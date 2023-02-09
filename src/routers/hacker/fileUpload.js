import { Router } from "express";
import upload from "./../../middlewares/uploadFileMulti.js";
import { UploadReport} from "../../controller/hacker.js";

const ReportUploadRoute = Router();


ReportUploadRoute.post("/upload/:id", upload.array('files', 10),UploadReport)


export default ReportUploadRoute;