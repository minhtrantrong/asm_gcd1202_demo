const authenticator = require('./authen')
async function login_ctrl(req, res) {
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
}
module.exports = login_ctrl;
