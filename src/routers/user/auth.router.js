import express from "express";
import { userMiddleware } from "../../middlewares/user.middleware.js";
import {
  register,
  login,
  resetPassword,
  forgitPassword,
  logout
} from "../../controller/auth.js";


const AuthRouter = express.Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login, userMiddleware);
AuthRouter.post("/logout", logout);
AuthRouter.post("/resetpassword", resetPassword);
AuthRouter.post("/forgotpassword", forgitPassword);


export default AuthRouter;