import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const PORT = 3876;

//middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());

//router
import router from './routes/index';
app.use('/api', router)

//global error handling
app.use((err: Error, req: Request, res: Response) => {
  console.log(err)
    return res.sendStatus(500);
  });
  
//server
const expressServer = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });