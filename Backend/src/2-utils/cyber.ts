import { Request } from "express";
import crypto from "crypto"
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { AuthenticationError } from "../4-models/client-errors";
import UserModel from "../4-models/user-model";
import RoleModel from "../4-models/role-model";

const secretKey = "4578-86 Students Are Amazing!";

function createNewToken(user: UserModel): string {

    // Remove password: 
    delete user.password;

    // Create container for the user object: 
    const container = { user };

    // Create options:
    const options = { expiresIn: "24h" };

    // Create the token: 
    const token = jwt.sign(container, secretKey, options);

    return token;
}

// Verify if token is valid or not (Header --> authorization: "Bearer the-token")
//                                                            "01234567"
function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {

            // Extract authorization header:
            const header = request.header("authorization");

            // If missing:
            if (!header) {
                reject(new AuthenticationError("Invalid token"));
                return;
            }

            // Extract token:
            const token = header.substring(7);

            // If missing:
            if (!token) {
                reject(new AuthenticationError("Invalid token"));
                return;
            }

            // Verify:
            jwt.verify(token, secretKey, (err: JsonWebTokenError) => {

   

                // If token not valid: 
                if (err) {
                    reject(new AuthenticationError("Invalid token"));
                    return;
                }

                // Here the token must be valid: 
                resolve(true);
            });

        }
        catch (err: any) {
            reject(err);
        }
    });
}

async function verifyAdmin(request: Request): Promise<boolean> {
    await verifyToken(request);
    const user = getUserFromToken(request)
    return user.role === RoleModel.Admin;

    }

    function getUserFromToken(request: Request): UserModel {
        const header = request.header("authorization");
        const token = header.substring(7);
        const user: UserModel = (jwt.decode(token) as any).user;
        return user;   

    }


// Hash password: 

// HMAC = Hash based Message Authentication Code
function hashPassword(plainText: string): string {

    
    if(!plainText) return null;
    
    // Hashing with salt: 
    const salt = "MakeThingsGoRight";
    const hashedPassword = crypto.createHmac("sha512", salt).update(plainText).digest("hex");

    return hashedPassword;
}


export default {
    createNewToken,
    verifyAdmin,
    verifyToken,
    hashPassword,
    getUserFromToken
};
