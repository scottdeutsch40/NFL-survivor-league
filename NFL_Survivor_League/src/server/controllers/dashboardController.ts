import dashboardService from '../services/dashboardService';
import { Controller } from './controllerTypes';

const dashboardController: Controller = {};

dashboardController.getTeam = async (req, res, next) => {
  try {
    const { team_id } = req.body;
    res.locals.teamInfo = await dashboardService.getTeam(team_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

dashboardController.getPickData = async (req, res, next) => {
  try {
    const { year, league_id } = req.body;
    res.locals.picks = await dashboardService.getPickData(year, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};


export default dashboardController;
