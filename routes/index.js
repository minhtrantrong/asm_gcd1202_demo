var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud computing class' });
});
/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN PAGE' });
});
/* POST Login page. */
router.post('/login', function(req, res, next) {
  // login authen --> true
  res.redirect('/users')
});
module.exports = router;
