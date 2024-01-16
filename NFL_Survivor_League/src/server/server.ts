import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const PORT = 3876;

//router
import router from './routes/index';
app.use('/', router)

//middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

//global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
    return res.sendStatus(500);
  });
  
//server
const expressServer = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });