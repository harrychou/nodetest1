var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
        title: 'Harry Chou' 
    });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', {
        title: 'Hello, World!'
    });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET bible verses page. */
router.get('/verses', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.find({},{},function(e,docs){
        res.render('verses', {
            "siteTitle" : "BIBLE VERSES",
            "verses" : docs 
        });
    });
});

/* GET first game. */
router.get('/memorize_bible_verse_game_1/:verse', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.find({},{},function(e,docs){
        res.render('memorize_bible_verse_game_1', {
            "siteTitle" : "BIBLE VERSES",
            "verses" : docs, 
            "verse" : req.params.verse
        });
    });
});


/* GET first game. */
router.get('/memorize_bible_verse_game_2', function(req, res) {
    var db = req.db;
    var collection = db.get('bibleverses');
    collection.find({},{},function(e,docs){
        res.render('memorize_bible_verse_game_2', {
            "verses" : docs
        });
    });
});

router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

router.get('/d3/example1', function(req, res) {
    res.render('d3/example1', { title: 'D3 Example 1' });
});

router.get('/timeline/taiwan', function(req, res) {
    res.render('timeline/taiwan', { title: 'Timeline for Taiwan History' });
});



module.exports = router;
