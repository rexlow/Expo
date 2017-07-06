const admin = require("firebase-admin");
const twilio = require("./twilio");

module.exports = (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ error: "You must provide a phone number" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, ""); // sanitize phone number

  admin.auth().getUser(phone) // get user model
    .then(userRecord => {
      const code = Math.floor(Math.random() * 8999 + 1000); // between 1000 - 9999

      twilio.messages.create({ // asynchronous
        body: "Your code is " + code,
        to: phone,
        from: "+18564215323"
      }, (error) => {
        if (error) { return res.status(422).send(error); }

        admin.database().ref(`/users/` + phone)
          .update({ code: code, codeValid: true }, () => {
            res.send({ success: true });
        })
      })
    })
    .catch(error => {
      res.status(422).send({ error: error });
    });
};
