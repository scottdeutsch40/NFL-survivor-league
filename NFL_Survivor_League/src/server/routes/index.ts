import express, { Express, NextFunction, Request, Response } from "express";

const router = express.Router();

//Controllers
import adminRegistrationController from '../controllers/adminRegistrationController'
import dashboardControlleController from '../controllers/dashboardController'

//Login
    //Google OAuth
    //GET id, Admin ID, leagueID

//Non-Admin Registration Page
    //POST player creation
    //Post profile photo

//Admin Registration Page
    //POST request to create new league
    router.get('/createLeague', (req: Request, res: Response) => {
        console.log("hey scottie")
        return res.status(200).send("deez")
    })
    //POST profile photo (see earlier route)

//League dashboard
    //GET pick data (how to configure standings TBD)
    //Want to return first and last name of pick, team name, abrev, value, week
    router.get('/getPickData', dashboardControlleController.getPickData, (req: Request, res: Response) => {
        return res.status(200).send(res.locals.picks)
    })
    //GET photos

//Player Page
    //GET team values
    router.get('/getTeams', dashboardControlleController.getTeam, (req: Request, res: Response) => {
        return res.status(200).send(res.locals.teamInfo)
    })
    //POST pick

    //PATCH pick

//Admin Page
    //POST point values
    //PATCH point values
    //PATCH pick


export default router;