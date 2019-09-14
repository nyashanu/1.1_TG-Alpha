// > crud

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var index = require('./routes/index');
var users = require('./routes/users');
var employees = require('./routes/employees');
var entry = require('./routes/entry');
// app.set('views', path.join(__dirname, 'views'));
// < crud
// > crud



var index = require('./routes/index');
var users = require('./routes/users');
var employees = require('./routes/employees');
var entry = require('./routes/entry');



// < crud



var express = require('express')
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

var port = process.env.PORT || 5000;

// > Today
mongoose.Promise = global.Promise;
// < Today

// var port = process.env.PORT || 8080;
// please change back to 8080 !

app.use(express.static(__dirname + '/public'));

;''
var configDB = require('./config/database.js');
// local database
// MongoClient.connect('mongodb://littlebits:littlebits@ds127928.mlab.com:27928/heroku_0v2hfpdx');
mongoose.connect('mongodb://littlebits:littlebits@ds127928.mlab.com:27928/heroku_0v2hfpdx');
// mongoose.connect('mongodb://localhost/loginapp')
// mongod --dbpath /Users/mac/Desktop/data

// var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

mongoose.connect('mongodb://localhost/loginapp')
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// 
// 
require('./app/routes.js')(app, passport);
// 
	app.get('/x', function(req, res){
		res.render('x.ejs');
	});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
// 	res.render('/index');
// })

app.listen(port, function() {
	console.log('app running')
})

// > crud
module.exports = app;

// > Today

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 
app.use('/', index);
app.use('/users', users);
app.use('/employees', employees);
app.use('/entry', entry);

// < Today






// < crud






