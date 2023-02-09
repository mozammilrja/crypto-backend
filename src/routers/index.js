import express from "express";
import AuthRouter from "./user/auth.router.js"
import ProgramRouter from "./user/program.route.js"
import UserRouter from "./user/user.route.js"
import ReportUploadRoute from "./hacker/fileUpload.js"
import TeleUser from  './user/tele.route.js'

const rootRouter = express.Router();

rootRouter.use("/api/auth", AuthRouter);
rootRouter.use("/api/program", ProgramRouter);
rootRouter.use("/api/profile", UserRouter);
rootRouter.use("/api/report",ReportUploadRoute)
rootRouter.use("/api/tele",TeleUser)


export default rootRouter;



