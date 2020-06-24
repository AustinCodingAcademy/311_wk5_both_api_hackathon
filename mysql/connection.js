const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool){
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 20,
        host: '35.193.239.243',
        user: 'root',
        password: 'Skate123!',
        database: 'employees'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance