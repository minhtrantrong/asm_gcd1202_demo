var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud computing class' });
});
// /* GET home page. */
// router.get('/admin', function(req, res, next) {
//   res.render('admin', { title: 'ADMIN PAGE' });
// });
module.exports = router;
