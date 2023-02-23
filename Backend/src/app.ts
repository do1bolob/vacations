import express from "express";
import expressFileUpload from "express-fileupload"
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import authRoutes from "./6-routes/auth-routes"
import adminVacationRoutes from "./6-routes/admin-vacation-routes"
import vocationServiceAdmin from "./6-routes/vocation-routes-user"
import helmet from "helmet";


// import vacationRoutes from "./6-routes/vocation-routes-admin";


const server = express();
// server.use(helmet())
server.use(cors());
server.use(express.json());
server.use(expressFileUpload())
server.use("/api", authRoutes);
server.use("/api",adminVacationRoutes );
server.use("/api", vocationServiceAdmin);

server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));
