const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});

app.post('/', (req,res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'captchafailingrobotjuice@gmail.com',
      pass: 'robot456123'
    }
  });

  var mailOptions = {
    from: data.dataEmail,
    to: 'captchafailingrobotjuice@gmail.com',
    subject: 'ENTER_YOUR_SUBJECT',
    html: `<p>${data.dataName}</p>
            <p>${data.dataEmail}</p>
            <p>${data.dataMessage}</p>`
  };

  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close();
  });

})
