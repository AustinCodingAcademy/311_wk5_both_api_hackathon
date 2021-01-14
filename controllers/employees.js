const getEmployeeById = (req, res) => {
    let id = req.params.id

    let sql = "SELECT FROM employees WHERE id = ?"
    let value = id
    
    sql = mysql.format(sql, value)

    pool.query(sql, (err, results) => {
        if (err) throw err
        return res.json(results)
    })
}