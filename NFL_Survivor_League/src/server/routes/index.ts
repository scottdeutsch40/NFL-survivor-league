import express, { Express, NextFunction, Request, Response } from "express";

const router = express.Router();

//Controllers
import adminRegistrationController from '../controllers/adminRegistrationController'
//Login
    //Google OAuth

//Non-Admin Registration Page
    //POST player creation
    //Post profile photo

//Admin Registration Page
    //POST request to create new league
    router.post('/createLeague', adminRegistrationController.signup, (req: Request, res: Response) => {
        return res.status(200)
    })
    //POST profile photo (see earlier route)

//League dashboard
    //GET pick data (how to configure standings TBD)
    //GET photos

//Player Page
    //POST pick
    //PATCH pick

//Admin Pae
    //POST point values
    //PATCH point values
    //PATCH pick


export default router;