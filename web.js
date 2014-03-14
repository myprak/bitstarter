var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());


var inputbuf = new Buffer(fs.readFileSync('index.html'));

//var newoutput = inputbuf.toString('utf8');

var newoutput = "hllow";

app.get('/', function(request, response) {
  response.send(newoutput);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
