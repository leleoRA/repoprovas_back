import "reflect-metadata";
import express from "express";
import cors from "cors";

import connectDatabase from "./database";

export async function init () {
  await connectDatabase();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("rodando")
})



export default app;