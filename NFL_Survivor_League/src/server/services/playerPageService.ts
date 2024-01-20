import db from '../db/NFLSLdb';
import { Service } from './serviceTypes';

const playerPageService : Service = {};

playerPageService.getTeamValues = async (year : number, league_id : number) => {
    const query = `
    SELECT 
        tv.value, tv.team_id, ti.team_name, ti.abbreviation 
    FROM 
        team_values AS tv 
    LEFT JOIN 
        team_id AS ti 
    ON 
        tv.team_id = ti.id 
    WHERE 
        tv.league_id = $2
        AND tv.year = $1 
    ORDER BY 
        tv.value
`
    const params = [year, league_id];
    let teamValues = await db.query(query, params);
    return teamValues.rows;
}

playerPageService.postPick = async (user_id : number, team_id : number, week : number, year : number, league_id : number) => {
    const query = `
    INSERT INTO 
        picks
        (user_id, team_id, week, year, league_id) 
    VALUES 
        ($1, $2, $3, $4, $5)
`
    const params = [user_id, team_id, week, year, league_id];
    const response = await db.query(query, params);
    return response.rowCount === 1;
}

playerPageService.patchPick = async (user_id : number, team_id : number, week : number, year : number, league_id : number) => {
    const query = `
    UPDATE
        picks
    SET
    team_id = $2
    WHERE
    user_id = $1
    AND week = $3
    AND year = $4
    AND league_id = $5
`
    const params = [user_id, team_id, week, year, league_id];
    const response = await db.query(query, params);
    return response.rowCount === 1;
}

export default playerPageService;