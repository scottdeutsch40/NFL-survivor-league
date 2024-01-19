import express, { Express, NextFunction, Request, Response } from "express";

const router = express.Router();

//Controllers
import adminRegistrationController from '../controllers/adminRegistrationController'
import dashboardController from '../controllers/dashboardController'
import playerPageController from '../controllers/playerPageController'

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
    //GET pick data
    router.get('/getPickData', dashboardController.getPicks, (req: Request, res: Response) => {
        return res.status(200).send(res.locals.picks)
    })
    //GET photos

//Player Page
    //GET team values
    router.get('/getTeamValues', playerPageController.getTeamValues, (req: Request, res: Response) => {
        return res.status(200).send(res.locals.teamValues)
    })

    //POST pick
    router.post('/postPick', playerPageController.postPick, (req: Request, res: Response) => {
        return res.status(200).send("pick posted")
    })
    //PATCH pick
    router.patch('/patchPick', playerPageController.patchPick, (req: Request, res: Response) => {
        return res.status(200).send("pick updated")
    })

//Admin Page
    //POST point values
    //PATCH point values
    //PATCH pick


export default router;