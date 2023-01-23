var express = require('express');
var app = express();
const http = require('http');
const hostname='localhost';
const port = 6000;

//This line for run server on local system and remove line number 3,4,5
// const port = process.env.PORT || 5000;

var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));





app.get('/',function(req,res){
    res.render('pages/index');
});

app.get('/contact',function(req,res){
    res.render('pages/contact');
});

app.get('/about-us',function(req,res){
  res.render('pages/about-us');
});

app.get('/gallery',function(req,res){
  res.render('pages/gallery');
});

app.get('/register',function(req,res){
  res.render('pages/register');
});

app.get('/activity',function(req,res){
  res.render('pages/activity');
});

app.post("/contact", function(req,res,){
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'prxdevs@gmail.com',
          pass: 'szutsadvtbfvweul',
        }
    });
  
    var mailOptions = {
        from: req.body.email+"Sent Mail on dyfgujarat !",
        to: 'dyfgujrat@gmail.com',
        subject: 'Mail from dyfgujarat',
        company: req.body.company,
        text: req.body.name + " sent you a message : \n" +"\n Message: "+ JSON.stringify(req.body.message) + "\n Email id: " + req.body.email + "\n Company: " + req.body.company
      };
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.redirect("/contact");
        }
      });  
  
      transporter.close();
      
  });


  app.post("/register", function(req,res,){
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'prxdevs@gmail.com',
          pass: 'szutsadvtbfvweul',
        }
    });
  
    var mailOptions = {
        from: req.body.email+"Sent Mail on DYFGUJARAT",
        to: 'dyfgujrat@gmail.com',
        subject: 'Mail from dyfgujarat',
        // company: req.body.company,
        text: req.body.name + " sent you a message : \n" +"\n Father's Name: "+ JSON.stringify(req.body.fname) + "\n Mother's Name: " + req.body.mname  + "\n Address: " + req.body.address   + "\n State: " + req.body.state1 + "\n Pincode: " + req.body.pincode + "\n Date of Birth: " + req.body.dob1 + "\n Aadhar: " + req.body.aadhar + "\n Phone: " + req.body.phone + "\n Email: " + req.body.email + "\n Gender: " + req.body.gender + "\n Married: " + req.body.married  + "\n Blood Group: " + req.body.bloodGroup + "\n Category: " + req.body.category  + "\n Level: " + req.body.level + "\n Passport Number: " + req.body.passportnumber  + "\n Passport Date: " + req.body.passportdate  + "\n Events: " + req.body.events  , 
      };
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.redirect("/contact");
        }
      });  
  
      transporter.close();
      
  });


  app.post("/", function(req,res,){
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'prxdevs@gmail.com',
          pass: 'szutsadvtbfvweul',
        }
    });
  
    var mailOptions = {
        from: req.body.email+"Sent Mail on dyfgujarat !",
        to: 'dyfgujrat@gmail.com',
        subject: 'Mail from dyfgujarat',
        company: req.body.company,
        text: req.body.name + " sent you a message : \n" +"\n Message: "+ JSON.stringify(req.body.message) + "\n Email id: " + req.body.email + "\n Company: " + req.body.company
      };
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.redirect("/contact");
        }
      });  
  
      transporter.close();
      
  });

//make change for run on local server 
  // app.listen(port, () => {
  //   console.log(`The server is running on port ${port}`)
  
//Listening to port
app.listen(port,hostname, () => {
    console.log(`The server is running on http://${hostname}:${port}/`)
    
   
   
});
