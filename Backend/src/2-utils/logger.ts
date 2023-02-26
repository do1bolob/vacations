import fs from "fs/promises";
import path from "path";

// Log files:
const activitiesFile = path.join(__dirname, "..", "1-assets/logs/activities", "activities.txt");
const errorsFile = path.join(__dirname, "..", "1-assets/logs/errors", "errors.txt");

// Log activity: 
async function logActivity(message: string): Promise<void> {
    const now = new Date();
    const msgToLog = `${now.toLocaleString()}\t${message}\n--------------------------------------------------\n`;
    await fs.appendFile(activitiesFile, msgToLog);
}

// Log error:
async function logError(message: string): Promise<void> {
    const now = new Date();
    const msgToLog = `${now.toLocaleString()}\t${message}\n--------------------------------------------------\n`;
    await fs.appendFile(errorsFile, msgToLog);
}

export default {
    logActivity,
    logError
};


