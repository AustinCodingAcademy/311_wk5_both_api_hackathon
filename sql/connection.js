const mysql = require('mysql');


class Connection {
    constructor() {
        if(!this.pool) {
            console.log('creating connection...');
            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: '35.232.156.181',
                user: 'root',
                password: '',
                database: 'employees',
                port:3306
            })
            return this.pool;
        }
        return this.pool;
    }
}

const instance = new Connection()
module.exports = instance;