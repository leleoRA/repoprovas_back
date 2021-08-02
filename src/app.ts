import "reflect-metadata";
import express from "express";
import cors from "cors";

import connectDatabase from "./database";

import * as testsController from "./controllers/testsController"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/subjects", testsController.allSubjectsAndTeachers)
app.post("/addTest", testsController.addTest)

export async function init () {
  await connectDatabase();
}

export default app;