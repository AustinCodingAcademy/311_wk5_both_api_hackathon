//sql/connection.js
const mysql = require('mysql')

class Connection {
constructor() {
if (!this.pool) {
console.log('creating connection...')
this.pool = mysql.createPool({
connectionLimit: 100,
host: '34.71.106.118',
user: 'root',
password: 'theprojectdl',
database: 'employees'
});
return this.pool
};
return this.pool
};
};

const instance = new Connection()

module.exports = instance;