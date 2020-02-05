var mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection pool...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.188.48.136',
        user: 'root',
        password: 'password',
        database: 'employees'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;