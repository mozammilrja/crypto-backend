import express from "express";
import { userMiddleware } from "../../middlewares/user.middleware.js";
import {
    createTelegram,
    deletedTelegram,
    updateTelegram,
    getTeleUser
} from "../../controller/telegramDetails.js";


const AuthRouter = express.Router();

AuthRouter.post("/updatetele",createTelegram);
AuthRouter.delete("/removetele/:id", deletedTelegram);
AuthRouter.put("/update", updateTelegram);
AuthRouter.get("/get", getTeleUser);



export default AuthRouter;