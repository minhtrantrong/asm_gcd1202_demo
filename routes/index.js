var express = require('express');
var router = express.Router();
const login_controller = require('../controllers/login_controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud computing class' });
});
/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN PAGE' });
});
/* POST Login page. */
router.post('/login', async function(req, res, next) {
  await login_controller(req, res);
});
module.exports = router;
