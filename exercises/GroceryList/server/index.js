var express = require('express');
var models = require('./model');
var app = express();

var message = {id: '0', quantity: '25', descr: 'sausages'};

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.get('/data', (req, res) => {
  models.list.get((err, result) => {
    if(err) {
      console.log('err');
      res.status(404).json(err);
    } else {
      console.log('sucess');
      res.send(result);
    }
  });
})

app.post('/s', message, (req, res) => {
  models.list.post((err, result) => {
    if(err) {
      console.log('err');
      res.status(404).json(err);
    } else {
      console.log('sucess');
      res.send(result);
    }
  });
});