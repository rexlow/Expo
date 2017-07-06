const admin = require('firebase-admin');

module.exports = (req, res) => {
  // verify that user has provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input!'});
  }

  // format the phone number to remove dashes and parens
  const phone = String(req.body.phone).replace(/[^\d]/g, ""); // replace anything that id not a digit with empty string

  // create a new user account using the phone number
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(error => res.status(422).send({ error: error }));

  // response to user request, saying account is created
}