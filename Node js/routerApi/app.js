var express = require('express');
var app = express();

var port = 8080;

var router = require('./route.js');

app.use('/api', router.rout); 

app.listen(port, function(){
    console.log('app running on port ' + port);
});
