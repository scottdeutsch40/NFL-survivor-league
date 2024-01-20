import express, { Express, NextFunction, Request, Response } from "express";

const router = express.Router();

//Controllers
import adminRegistrationController from '../controllers/adminRegistrationController'
import dashboardController from '../controllers/dashboardController'
import playerPageController from '../controllers/playerPageController'
import adminPageController from '../controllers/adminPageController'

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
        if (res.locals.postPickSuccess) return res.status(200).send("pick posted");
        else return res.status(500).send("Error: pick not posted");
    })

    //PATCH pick
    router.patch('/patchPick', playerPageController.patchPick, (req: Request, res: Response) => {
        if (res.locals.patchPickSuccess) return res.status(200).send("pick updated");
        else return res.status(500).send("Error: pick not updated");
    })

//Admin Page
    //GET team IDs
    router.get('/getTeamIDs', adminPageController.getTeamIDs, (req: Request, res: Response) => {
        return res.status(200).send(res.locals.teamIDs)
    })

    //POST team point values
    router.post('/postTeamPointValue', adminPageController.postTeamPointValue, (req: Request, res: Response) => {
        if (res.locals.postTeamPointValueSuccess) return res.status(200).send("team value posted");
        else return res.status(200).send("Error: team value not posted");
    })

    //PATCH point values
    router.patch('/patchTeamPointValue', adminPageController.patchTeamPointValue, (req: Request, res: Response) => {
        if (res.locals.patchTeamPointValue) return res.status(200).send("team point value updated");
        else return res.status(200).send("Error: team point value was not updated");
    })

    //PATCH pick
    router.patch('/adminPatchPick', adminPageController.patchPick, (req: Request, res: Response) => {
        if (res.locals.patchPickSuccess) return res.status(200).send("pick updated by admin")
        else return res.status(500).send("Error: pick was not updated")
    })

export default router;