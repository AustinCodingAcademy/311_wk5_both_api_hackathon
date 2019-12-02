const mysql = require('mysql')
const pool = require('../mysql/connection')

const allTitles = (req, res) => {
    let sql = "SELECT DISTINCT ?? FROM ??";
    let replacements = ['title', 'titles'];
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send('something went wrong');
        return res.json(rows);
    })
}

module.exports = { allTitles }