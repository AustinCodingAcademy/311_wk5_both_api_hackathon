const mysql = require('mysql')

class Connection {
constructor() { 
if (!this.pool) {
console.log('creating connection...')
this.pool = mysql.createPool({
connectionLimit: 100,
host: '35.192.130.36',
user: 'root',
password: 'xxxxxxxxx',
database: 'employees'
})

return this.pool
}

return this.pool
}
}

const instance = new Connection()

module.exports = instance;