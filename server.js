//========= importing modules ==========
var express = require('express'),
 mongoose=require('mongoose'),
 path = require('path'),
 bodyParser = require('body-parser'),
 routes = require('./server/routes/web'), //web routes
 apiRoutes = require('./server/routes/api'), //api routes
 connection = require("./server/config/db"), //mongodb connection
 User = require('./server/models/user'),
 session = require('client-sessions');
// creating express server
var app = express();

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// setting static files location './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
app.use(express.static('node_modules'));

// configure our routes
app.use('/', routes);
app.use('/api', apiRoutes);

// setting port number for running server
var port = process.env.port || 3000;

// starting express server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});
