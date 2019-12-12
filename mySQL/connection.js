const mysql = require('mysql');

class Connection {
    constructor() {
        if(!this.pool) {
            console.log('creating connection...')
            this.pool = mysql.createPool({
                connectionLimit: 100, 
                host: '',
                user:'root', 
                password: '',
                datebase: 'employees'
            })
            return this.pool
        }
        return this.pool
    }
}

const instance = new Connections()

module.exports = instance;