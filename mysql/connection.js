const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection pool...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.68.59.33',
        user: 'root',
        password: 'Lavg3s5h22#',
        database: 'employees'
      })
      return this.pool;
    }
    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;