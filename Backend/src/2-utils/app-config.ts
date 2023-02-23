class AppConfig {
    public port = 4000;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDatabase = "vacationsdatabase"; 
    public vacationImageAddress = `http://localhost:${this.port}/api/users/vacations/images/`
}

const appConfig = new AppConfig();

export default appConfig;
