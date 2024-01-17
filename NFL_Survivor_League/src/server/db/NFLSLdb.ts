const { Pool } = require('pg');

import PG_URI from '../utils/config'

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text : string, params : [], callback : any) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}