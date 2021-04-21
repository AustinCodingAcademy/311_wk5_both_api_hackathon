const sqlErrorHandler = (res, err) => {
  console.log("SQL Error: ", err);
  return res.status(500).send("An unexpected error occured");
};

module.exports = sqlErrorHandler;
