//express
var express = require('express');

//bodyParser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//MongoDB 
var mongoose = require('mongoose');
var sessionModel = require('../database/session');
var productSchema = require('../database/product')
var userModel = require("../database/users")

//redering webpages
module.exports = function (app,authCheck) 
{

//product
app.get('/ap',(req,res)=>
{
    res.render('admin/orders');
}); 

//mail
app.get('/mail',(req,res)=>
{
    res.render('admin/mail');
}); 


//product
app.get('/api/orders',urlencodedParser,(req,res) =>
{
    var mydate = req.query.date;
    var type = req.query.type
    console.log(mydate)

    var productModel = mongoose.model( mydate+type , productSchema);
    productModel.find({},function(err, data) { 
      if (err) return err;
      console.log(data)
      res.json(data);
     });
})

//for user activiy by email 
app.get('/api/adminmail',urlencodedParser,(req,res) =>
{
    var mydate = req.query.mail;
    console.log(mydate)

    var productModel = mongoose.model( mydate , productSchema);
    productModel.find({}).sort({dat: -1}).exec(function(err, data) { 
      if (err) return err;
      res.json(data);
     });
})

};

