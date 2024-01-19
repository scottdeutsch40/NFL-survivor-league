import db from '../db/NFLSLdb';
import { Service } from './serviceTypes';

const playerPageService : Service = {};

playerPageService.getTeamValues = async (year : number, league_id : number) => {
    const query = `
    SELECT tv.value, 
    ti.team_name, 
    ti.abbreviation 
    FROM team_values AS tv 
    LEFT JOIN team_id AS ti 
    ON tv.team_id = ti.id 
    ORDER BY tv.value
`
    const params = [year, league_id];
    let teamValues = await db.query(query, params);
    return teamValues.rows;
}

export default playerPageService;