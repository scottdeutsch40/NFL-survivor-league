import playerPageService from '../services/playerPageService';
import { Controller } from './controllerTypes';

const playerPageController: Controller = {};

playerPageController.getTeam = async (req, res, next) => {
  try {
    const { team_id } = req.body;
    res.locals.teamInfo = await dashboardService.getTeam(team_id);
    return next();
  } catch (err) {
    return next(err);
  }
};



export default playerPageControllerController;