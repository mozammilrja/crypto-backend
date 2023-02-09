import express from "express";
import { verifyToken } from "../../middlewares/verifyToken.js";

import {
  createProgram,
  getPrograms,
  updateProgram,
  getProgram,
  getProgramsByLoginUser
} from "../../controller/program.js";
const ProgramRouter = express.Router();

//CREATE
ProgramRouter.post("/add", verifyToken, createProgram);
ProgramRouter.put("/update/:id", verifyToken, updateProgram);
ProgramRouter.get("/get", verifyToken, getProgram);
ProgramRouter.get("/", getPrograms);
ProgramRouter.get("/get-program-by-login-user", verifyToken, getProgramsByLoginUser)

export default ProgramRouter;
