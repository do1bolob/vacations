import express, { Request, Response, NextFunction } from "express";
import cyber from "../2-utils/cyber";
import imageHandler from "../2-utils/image-handler";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import vacationService from "../5-services/vacation-service-user";

const router = express.Router(); // Capital R

// GET http://localhost:4000/api/users/vacations
router.get("/users/vacations", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = cyber.getUserFromToken(request)
        const vacations = await vacationService.getAllVacationsForUser(user);
        response.json(vacations)
    
    }
    catch (err: any) {
        next(err);
    }
});


// post http://localhost:4000/api/users/follow/:vacationId
router.post("/users/follow/:vacationId", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {  
try {
        const user = cyber.getUserFromToken(request);
        const vacationId = +request.params.vacationId;
        await vacationService.follow(user.userId, vacationId);
        // response.status(204);
        response.json({});
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/users/unfollow/:vacationId
router.delete("/users/unfollow/:vacationId", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = cyber.getUserFromToken(request)
        const vacationId = +request.params.vacationId;
        await vacationService.unfollow(user.userId, vacationId);
        // response.status(204);
        response.json({});
    }
    catch (err: any) {
        next(err);
    }
});




// GET http://localhost:4000/api/vacations/images/:imageName
router.get("/users/vacations/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const imageName = request.params.imageName;
        const absolutePath = imageHandler.getAbsolutePath(imageName);
        response.sendFile(absolutePath);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;
