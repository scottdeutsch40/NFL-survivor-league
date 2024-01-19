import db from '../db/NFLSLdb';
import { Service } from './serviceTypes';

const dashboardService : Service = {};

dashboardService.getTeam = async (team_id : number) => {
    const query = 'SELECT * FROM team_id WHERE id =$1'
    const params = [team_id];
    let team = await db.query(query, params);
    return team.rows;
}

dashboardService.getPickData = async (year : number, league_id : number) => {
    const query = `
    SELECT
    u.first_name,
    u.last_name,
    p.week,
    tv.value,
    ti.team_name,
    ti.abbreviation
FROM
    users u
JOIN picks p ON u.id = p.user_id
JOIN team_values tv ON p.team_id = tv.team_id
JOIN team_id ti ON tv.team_id = ti.id
WHERE
    p.year = $1
    AND p.league_id = $2
    AND tv.year = $1
    AND tv.league_id = $2;
`
    const params = [year, league_id];
    let picks = await db.query(query, params);
    return picks.rows;
}

export default dashboardService;