//express
var express = require('express');

//bodyParser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//MongoDB 
var mongoose = require('mongoose');
var sessionModel = require('../database/session');

module.exports = (req,res,next)=>{
        sessionModel.find({sessionid: req.cookies.nsessionid},function (err,data) {
  console.log(data)          
if(data == '')
          {
            console.log(req.url.split('/')[1]); 
            res.render(req.url.split('/')[1])
          }
          else
          {
            req.body.sessionid = data[0].sessionid;
            req.body.uid = data[0].uid;
            req.body.socket = data[0].socket;
            req.body.mail = data[0].mail;
            req.body.fname = data[0].fname;
            req.body.lname = data[0].lname;
            req.body.ppurl = data[0].ppurl;
            req.body.mobile = data[0].mobile;
            req.body.local= data[0].local;
            req.body.country= data[0].country;
            req.body.state= data[0].state;
            req.body.district= data[0].district;
            req.body.pincode= data[0].pincode;
            req.body.city= data[0].city;
            req.body.landmark= data[0].landmark;
            next();
          }
          })
      }      
