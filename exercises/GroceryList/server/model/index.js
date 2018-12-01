var db = require('../../database');

module.exports = {
  list: {
    get: function(cb) {
      db.connection.query('SELECT * from list ;', function(err, result) {
        if(err) {
          console.log('err', err);
          throw err;
        } else {
          console.log('success', result);
          cb(null, result);
        }
      });
    }
  },
  post: function(cb) {
    db.connection.query('INSERT INTO list SET ?', message, function(err, result) {
      if(err) {
        console.log('err: ', err)
      } else {
        console.log('success, data has posted');
        cb(null, result);
      }
    });
  }
}



// module.exports.list.get();
// module.exports.list.post();





