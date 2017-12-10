var proxy = require('express-http-proxy');
var cors = require('cors');
var app = require('express')();

app.use(cors());
app.use('/airport-lookup', proxy('http://www.airport-data.com/'));

app.listen(5000);
