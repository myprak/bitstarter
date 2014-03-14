var express = require('express');
var app = express();
app.use(express.logger());

//var inputbuf = new Buffer(fs.readFileSync('index.html'));
//var newoutput = inputbuf.toString('utf8');


app.get('/', function(request, response) {
  response.send("Heelow Wrod");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
