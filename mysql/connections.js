const mysql = require('mysql');

function connection() {
  if(!this.pool){
    console.log('creating pool');this.pool = mysql.createPool({
      connectionLimit: 100,
      host: 'den1.mysql4.gear.host',
      user: 'aca311hackdb',
      password: 'Tv3R_96le~b0',
      database: 'aca311hackdb'
    })
    return this.pool;
  }
  return this.pool
}

const instance = connection();

module.exports = instance;