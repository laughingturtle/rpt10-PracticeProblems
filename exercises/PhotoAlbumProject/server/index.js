var express = require('express');
var app = express();

const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log('server started and listening on port ' + port);
});
