import express from "express";
import {
    metaUsers
} from "./../../controller/metaUser.js";


const UserRouter = express.Router();


UserRouter.get("/",metaUsers);


export default UserRouter;
