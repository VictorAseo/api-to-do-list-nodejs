import { Application } from "express";
import { router } from "./routes/router";
import express from "express";
import bodyParser from "body-parser";
const app: Application = express();
const PORT: string | number = process.env.PORT || 8686;

app.listen(PORT, (): void => console.log("Server running on 8686"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);