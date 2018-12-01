var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shop'
});

connection.connect(function(err){
  if(err){
    throw err;
  } else {
    console.log('you are now connected...');
  }
});

module.exports.connection = connection;

