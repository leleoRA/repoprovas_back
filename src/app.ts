import "reflect-metadata";

import connectDatabase from "./database";

export async function init () {
  await connectDatabase();
}

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());



export default app;