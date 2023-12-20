import express, { Express } from "express";
import type { Request, Response } from "express"
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

let rootDomain = process.env.NODE_ENV == "development" ? process.env.ROOT_DOMAIN_DEV : process.env.ROOT_DOMAIN_PROD;

const app: Express = express();
const port= 3005;
const route = "/backend"

app.use(cookieParser())
app.use(cors({origin: rootDomain, credentials: true}))
app.use(bodyParser.json())

app.get(route + "/health", async(req: Request, res: Response)=> {
    return res.status(200).json({message: "healthy"})
});

app.listen(port, () => {
    console.log("Backend server listening on port " + port);
})
