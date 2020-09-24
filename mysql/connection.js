const mysql = require('mysql')

class Connection {
    constructor() {
        if (!this.pool) {
            console.log('creating connection...')
            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: '35.224.187.91',
                user: 'root',
                password: 'TheTeam',
                database: 'sys'
            })

            return this.pool
        }

        return this.pool
    }
}

const instance = new Connection()

module.exports = instance;