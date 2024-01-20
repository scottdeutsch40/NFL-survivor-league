import adminPageService from '../services/adminPageService';
import { Controller } from './controllerTypes';

const adminPageController: Controller = {};

adminPageController.getTeamIDs = async (req, res, next) => {
  try {
    res.locals.teamIDs = await adminPageService.getTeamIDs();
    return next();
  } catch (err) {
    return next(err);
  }
};

adminPageController.postTeamPointValue = async (req, res, next) => {
  try {
    const { team_id, year, value, league_id } = req.body;
    res.locals.postTeamPointValueSuccess = await adminPageService.postTeamPointValue(team_id, year, value, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

adminPageController.patchTeamPointValue = async (req, res, next) => {
  try {
    const { team_id, year, value, league_id } = req.body;
    res.locals.patchTeamPointValue = await adminPageService.patchTeamPointValue(team_id, year, value, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

adminPageController.patchPick = async (req, res, next) => {
  try {
    const { user_id, team_id, week, year, league_id } = req.body;
    res.locals.patchPickSuccess = await adminPageService.patchPick(user_id, team_id, week, year, league_id);
    return next();
  } catch (err) {
    return next(err);
  }
};

export default adminPageController;