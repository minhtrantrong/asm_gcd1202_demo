const authenticator = require('./authen')
async function login_ctrl(req, res) {
  // Call authenication function for checking username, password
  let uname = req.body.username;
  let pword = req.body.password;
  let authented = false;
  console.log(`USERNAME: ${uname}`);
  console.log(`PASSWORD: ${pword}`);
  // if authentication return --> true
  result = await authenticator(uname, pword)
  if (result.rowCount == 1) {
    authented = true;
    req.session.authented = authented;
    req.session.username = uname;
    res.redirect('/users');
  } else {
    res.render('login', { title: 'LOGIN PAGE' });
  }
  return authented
}
module.exports = login_ctrl;
