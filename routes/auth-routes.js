//express
var express = require('express');
const router = require("express").Router();
const passport = require('passport');

//bodyParser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//MongoDB 
var mongoose = require('mongoose');

//requiring users databse controller
var userModel = require('../database/users');
var sessionModel = require('../database/session');

router.get("/google",passport.authenticate('google',{scope: ['profile','email']}) );

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>
{
  console.log("session is = ",req.session)
  var usergmail = req.user.emails[0].value;
  console.log("Logged in user = " + usergmail);
  var nsessionid = req.session.id + usergmail
  console.log("req.session.id = ",nsessionid)
  res.cookie('nsessionid',nsessionid, { maxAge: 31536000000, httpOnly: true })

  //find gmail
  userModel.find({mail: usergmail}, function (err,data)
  {
    if (err) throw err;
    //if gmail is not in database
    if(data == "")
    {
      userModel.find().countDocuments((err, count)=>
      {
        if (err) throw err;
        console.log("this is count = ",count);
        count = count + 1;
        
        //inserting user data
        function hashCode(val)
        {
          var hash = 0;
          if (val.length === 0) return hash;
          for (i = 0; i < val.length; i++) 
          {
            char = val.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
          }
          return hash;
        }  
        
        var uid = hashCode(req.user.emails[0].value)+new Date(Date.now()).toLocaleString().split(/[ :-]+/).join("")
        
        var insertUser = userModel({
        uid: uid,
        nid: count,
        mail: req.user.emails[0].value,
        fname: req.user.name.givenName.toLowerCase(),
        lname: req.user.name.familyName.toLowerCase(),
        ppurl: req.user.photos[0].value,
        mobile : 0,
        //addresss
          local: "Not provided",
          country: "Not provided",
          state: "Not provided",
          district: "Not provided",
          pincode: 0
        }).save(function (error)
        {
          if (error) throw error;
          console.log("new user gmail saved");
   
          var insertSession = sessionModel({
            uid: req.user.emails[0].value,
            nid: count, 
            sessionid: nsessionid,
            mail: req.user.emails[0].value,
            fname: req.user.name.givenName.toLowerCase(),
            lname: req.user.name.familyName.toLowerCase(),
            ppurl: req.user.photos[0].value,
          }).save(function (error)
          {
            if (error) throw error;
            console.log("new session saved");
            res.redirect("/getdata");
          });
        });
      });
    }
    else
    {
      console.log("user Already exits");
      var insertSession = sessionModel({
        uid: data[0].mail,
        nid: data[0].nid,
        sessionid: nsessionid,
        mail: data[0].mail,
        fname: data[0].fname,
        lname: data[0].lname,
        ppurl: data[0].ppurl,
      
        mobile : data[0].mobile,
        
        //addresss
          local: data[0].local,
          country: data[0].country,
          state: data[0].state,
          district: data[0].district,
          pincode: data[0].pincode

      }).save(function (error)
      {
        if (error) throw error;
        console.log("new session saved");
        res.redirect("/signin");
      });
 }      
  });
});
module.exports = router;