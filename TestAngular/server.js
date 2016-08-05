/**
 * Created by Oleg on 26.05.2016.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var config 	   = require('./config');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
// send our index.html file to the user for the home page
app.use(express.static(__dirname + '/public'));


var takeRoutes = require('./routes/take');
app.use('/take', takeRoutes.take(app, express));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/index.html'));
});
 // start the server      throw new TypeError('Router.use() requires middleware function but got a ' + gettype(fn));

app.listen(8080);
console.log('8080 is the magic port!');
console.log(takeRoutes);