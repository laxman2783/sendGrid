var http = require('http');
var fs = require('fs');
const sgMail = require('@sendgrid/mail');
http.createServer(function (req, res) {
    console.log("Running");
     
  //Open a file on the server and return it's content:
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'laxmant.thota@gmail.com',
  from: 'laxmant.thota@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
console.log(sgMail.send(msg));

}).listen(8080);