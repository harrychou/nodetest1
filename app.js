var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config')();
var mongo = require('mongodb');
var monk = require('monk');

var db = monk(config.mongoUrl);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/verses/json', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.find({},{},function(e,docs){
        res.send(docs);
    });
});
app.get('/verses/json/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.find({},{},function(e,docs){
        var v1 = docs.filter(function(item) {
            return item.en.toUpperCase().replace(/\s+/g, '') === req.params.id.toUpperCase().replace(/\s+/g, ''); 
        });
        res.send(v1);
    });
});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
