const admin = require("firebase-admin");

module.exports = (req, res) => {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: "Phone and code must be provided" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const code = parseInt(req.body.code);

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref(`/users/` + phone);

      ref.on('value', snapshot => {
        ref.off(); // shut down listener
        const user = snapshot.val();

        if (user.code !== req.body.code || !user.codeValid) {
          return res.status(422).send({ error: "Code not valid" });
        }

        ref.update({ codeValid: false });
        admin.auth().createCustomToken(phone) // send JWT token to user
          .then(token => res.send({ token: token }))
      });
    })
    .catch(error => res.status(422).send({ error: error }));
}