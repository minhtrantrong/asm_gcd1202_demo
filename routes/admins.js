var express = require('express');
var router = express.Router();

/* GET /admins page. */
router.get('/', function(req, res, next) {
  if (req.session.authented && req.session.role_id <= 2) {
    res.render('admins', { title: 'ADMIN PAGE' });
  } else {
    res.redirect('/')
  }
});

module.exports = router;

