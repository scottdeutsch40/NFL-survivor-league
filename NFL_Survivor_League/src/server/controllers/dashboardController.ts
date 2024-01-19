import dashboardService from '../services/dashboardService';
import { Controller } from './controllerTypes';

const dashboardController: Controller = {};

dashboardController.getPicks = async (req, res, next) => {
  try {
    const { year, league_id } = req.body;
    res.locals.picks = await dashboardService.getPicks(year, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};


export default dashboardController;
