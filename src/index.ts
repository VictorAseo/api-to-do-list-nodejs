import { Application } from "express";
import { router } from "./routes/router";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

const PORT: string | number = process.env.PORT || 8686;

app.listen(PORT, (): void => console.log("Server running on 8686"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});