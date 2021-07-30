import "reflect-metadata";
import express from "express";
import cors from "cors";

import connectDatabase from "./database";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("rodando")
})

export async function init () {
  await connectDatabase();
}

export default app;