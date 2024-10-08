var express = require('express');
var router = express.Router();
const login_controller = require('../controllers/login_controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud computing class' });
});
/* GET Login page. */
router.get('/login', function(req, res, next) {
  let authented = req.session.authented;
  console.log(`SESSION: ${req.session.username}`);
  if (authented) {
    res.redirect('/users');
  } else {
    res.render('login', { title: 'LOGIN PAGE' });
  }
});
/* POST Login page. */
router.post('/login', async function(req, res, next) {
  let authented = await login_controller(req, res);
});
module.exports = router;
