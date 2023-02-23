import { OkPacket } from "mysql";
import appConfig from "../2-utils/app-config";
import dal from "../2-utils/dal";
import imageHandler from "../2-utils/image-handler";
import { ResourceNotFoundError } from "../4-models/client-errors";
import UserModel from "../4-models/user-model";
import VacationModel from "../4-models/vocation-model";

async function getAllVacationsForUser(user: UserModel): Promise <VacationModel[]>{

    const sql = `
    SELECT DISTINCT 
    V.*,
    EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
    COUNT(F.userId) AS followersCount,
    CONCAT('${appConfig.vacationImageAddress}', imageName) AS imageUrl
    FROM vacations AS V LEFT JOIN followers AS F
    ON V.vacationId = F.vacationId
    GROUP BY vacationId
    ORDER BY startDate
    `

    const vacations = await dal.execute(sql, user.userId)

    return vacations
}


async function getAllVacationsForAdmin(): Promise <VacationModel[]>{

    const sql = `SELECT *, CONCAT('${appConfig.vacationImageAddress}', imageName) AS imageUrl FROM vacations  ORDER BY startDate `

    const vacations = await dal.execute(sql)

    return vacations
}

async function getOneVacation(vacationId: number): Promise<VacationModel> {

    const sql = "SELECT * FROM vacations WHERE vacationId = ?";
    const vacations = await dal.execute(sql, vacationId);
    const vacation = vacations[0];
    if(!vacation) throw new ResourceNotFoundError(vacationId)
    return vacation;

}


async function addVacation(vacation: VacationModel): Promise<VacationModel> {


    vacation.validatePost()

    vacation.imageName = await imageHandler.saveImage(vacation.image);


    const sql = "INSERT INTO vacations VALUES(DEFAULT, ?, ?, ?, ?, ?, ?)";
    const result: OkPacket = await dal.execute(sql, vacation.destination, vacation.description, vacation.startDate, vacation.endDate, vacation.price, vacation.imageName);

    vacation.vacationId = result.insertId;

    delete vacation.image;

    return vacation;
}

async function updateVacation(vacation: VacationModel): Promise <VacationModel> {

    vacation.validatePut()
    
    vacation.imageName = await getImageNameFromDBV(vacation.vacationId);

    if(vacation.image) {
        vacation.imageName = await imageHandler.updateImage(vacation.image, vacation.imageName)
    }

    const sql = "UPDATE vacations SET destination=?, description=?, startDate=?, endDate=?, price=?, imageName=? WHERE vacationId =?";

    const result: OkPacket = await dal.execute(sql, vacation.destination, vacation.description, vacation.startDate, vacation.endDate, vacation.price, vacation.imageName, vacation.vacationId);

    if(result.affectedRows === 0) throw new ResourceNotFoundError(vacation.vacationId)

    delete vacation.image;

    return vacation;

}

async function deleteVacation (vacationId: number): Promise<void>{

    const sql = "DELETE FROM vacations WHERE vacationId = ?";
    const result: OkPacket = await dal.execute(sql, vacationId);
    if(result.affectedRows ===0) throw new ResourceNotFoundError(vacationId)


}



async function getImageNameFromDBV(vacationId: number): Promise<string>{

    const sql = "SELECT imageName FROM vacations WHERE vacationId = ?";
    
    const vacations = await dal.execute(sql, vacationId);
    const vacation = vacations[0];

    if(!vacation) return null;

    return vacation;
}

export default {
    getAllVacationsForUser,
    getOneVacation,
    addVacation,
    getAllVacationsForAdmin,
    updateVacation,
    deleteVacation
}