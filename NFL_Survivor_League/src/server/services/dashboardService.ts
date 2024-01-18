import db from '../db/NFLSLdb';
import { Service } from './serviceTypes';

const dashboardService : Service = {};

dashboardService.getTeam = async (team_id : number) => {
    const query = 'SELECT * FROM team_id WHERE id =$1'
    const params = [team_id];
    let team = await db.query(query, params);
    return team.rows;
}

export default dashboardService;