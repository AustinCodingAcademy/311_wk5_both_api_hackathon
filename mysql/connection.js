const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "den1.mysql1.gear.host",
        user: "hackathon011121",
        password: "Le7qyI7Lv5!!",
        database: "hackathon011121",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
