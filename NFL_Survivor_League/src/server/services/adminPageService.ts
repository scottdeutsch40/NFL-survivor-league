import db from '../db/NFLSLdb';
import { Service } from './serviceTypes';

const adminPageService : Service = {};

adminPageService.getTeamIDs = async () => {
    const query = `
    SELECT 
        * 
    FROM 
        team_id
`
    let teamIDs = await db.query(query);
    return teamIDs.rows;
}

adminPageService.postTeamPointValue = async (team_id : number, year : number, value : number, league_id : number) => {
    const query = `
    INSERT INTO 
        team_values
        (team_id, year, value, league_id) 
    VALUES
        ($1, $2, $3, $4)
`
    const params = [team_id, year, value, league_id];
    const response = await db.query(query, params);
    return response.rowCount === 1;
}

adminPageService.patchTeamPointValue = async (team_id : number, year : number, value : number, league_id : number) => {
    const query = `
    UPDATE 
        team_values 
    SET 
        value = $3 
    WHERE 
        team_id = $1 
        AND year = $2 
        AND league_id = $4
`
    const params = [team_id, year, value, league_id];
    const response = await db.query(query, params);
    return response.rowCount === 1;
}

adminPageService.patchPick = async (user_id : number, team_id : number, week : number, year : number, league_id : number) => {
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
    console.log(response);
    return response.rowCount === 1;
}

export default adminPageService;

