import playerPageService from '../services/playerPageService';
import { Controller } from './controllerTypes';

const playerPageController: Controller = {};

playerPageController.getTeamValues = async (req, res, next) => {
  try {
    const { year, league_id } = req.body;
    res.locals.teamValues = await playerPageService.getTeamValues(year, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

playerPageController.postPick = async (req, res, next) => {
  try {
    const { user_id, team_id, week, year, league_id } = req.body;
    res.locals.postPickSuccess = await playerPageService.postPick(user_id, team_id, week, year, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

playerPageController.patchPick = async (req, res, next) => {
  try {
    const { user_id, team_id, week, year, league_id } = req.body;
    res.locals.patchPickSuccess = await playerPageService.patchPick(user_id, team_id, week, year, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

export default playerPageController;