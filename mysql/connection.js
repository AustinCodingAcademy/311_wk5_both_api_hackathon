const mysql = require('mysql')

class Connection {
    constructor() {
        if(!this.pool){
            console.log('creating connection...')
            this.pool = mysql.createPool({
                connectionLimis: 100,
                host: '34.70.182.105',
                user: 'root',
                password: '1Silverl@ce',
                database: 'employees'
            })
            return this.pool
        }
        return this.pool
    }
}

const instance = new Connection()

module.exports = instance