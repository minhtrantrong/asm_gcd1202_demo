var express = require('express');
var router = express.Router();
const authenticator = require('../controllers/authen')

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
  // Call authenication function for checking username, password
  let uname = req.body.username
  let pword = req.body.password
  console.log(`USERNAME: ${uname}`);
  console.log(`PASSWORD: ${pword}`);
  // if authentication return --> true
  result = await authenticator(uname, pword)
  if (result.rowCount == 1) {
    res.redirect('/users');
  } else {
    res.render('login', { title: 'LOGIN PAGE' });
  }
});
module.exports = router;
