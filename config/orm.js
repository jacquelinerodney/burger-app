const connection = require("./connection.js");



const orm= {


//select all

//insertone

//updateone

//deleteone

selectAll(cb) {
    const query = "SELECT * FROM burgers;";
    connection.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne(value, cb) {
    const query = "INSERT INTO burgers (burgerName) VALUES (?);";
    connection.query(query, [value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne(value, cb) {
    const query = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(query, [value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  deleteOne(value, cb) {
    const query = "DELETE FROM burgers WHERE id = ?";
    connection.query(query, [value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },


};


//exports
module.exports = orm;