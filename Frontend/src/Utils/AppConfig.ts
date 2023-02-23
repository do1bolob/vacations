class AppConfig {
    public registerUrl = "http://localhost:4000/api/auth/register/";
    public loginUrl = "http://localhost:4000/api/auth/login/";
    public getAllVacationToUserUrl = "http://localhost:4000/api/users/vacations/";
    public getAllVacationToAdminUrl = "http://localhost:4000/api/admin/vacations/";
    public followVacationUrl = "http://localhost:4000/api/users/follow/"
    public unfollowVacationUrl = "http://localhost:4000/api/users/unfollow/"

}

const appConfig = new AppConfig();

export default appConfig;
