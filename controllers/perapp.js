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

var Insta = require('instamojo-nodejs');


var mytimearray = ['none','11 AM','11:10 AM','11:20 AM','11:30 AM','11:40 AM','11:50 AM','12 PM','12:10 PM','12:20 PM','12:30 PM','12:40 PM','12:50 PM','1 PM','1:10 PM','1:20 PM','4:30 PM','4:40 PM','4:50 PM','5 PM','5:10 PM','5:20 PM','5:30 PM','5:40 PM','5:50 PM','6 PM','6:10 PM','6:20 PM','6:30 PM','6:40 PM','6:50 PM','7 PM','7:10 PM','7:20 PM','7:30 PM','7:40 PM','7:50 PM']
     
//redering webpages
module.exports = function (app,authCheck) 
{

  //for today



//for today
app.post('/bookpsnl',urlencodedParser,authCheck,(req,res) =>
{
    var datetime = new Date();
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")

      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {

      var mydoc = 
      {
        nid: count+1,
        uid: req.body.uid,
        type: "personal",
        dis: req.query.dis,
        dat: datetime,
        date: mydate,
        time: mytimearray[count+1],
        done: 0,
        mail: req.body.mail,
        fname: req.body.fname,
        lname: req.body.lname,
        ppurl: req.body.ppurl,
      
        mobile : req.body.mobile,
        
        //addresss
          local: req.body.local,
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          pincode: req.body.pincode,
          landmark:req.body.landmark,
          city:req.body.city
    
      }
  
     var insertProduct = productModel(mydoc).save(function (error)
        {
          if (error) throw error;
          var productModel = mongoose.model( req.body.uid , productSchema);
          var datetime = new Date()
          var insertProduct = productModel(mydoc).save(function (error)
          {
            if (error) throw error;
            console.log()
            console.log("new product saved");
            res.redirect('/myactivity');
          });
        });
      }
    })
})

//for tomarraw
app.post('/bookpsnl1',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
  var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000));
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      var mytimearray = ['none','2 PM','2:15 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
      console.log("array length is =",mytimearray.length)

      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {
      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")
      var mydoc = 
      {
        nid: count+1,
        uid: req.body.uid,
        type: "personal",
        dis: req.query.dis,
        dat: datetime,
        date: mydate,
        time: mytimearray[count+1],
        done: 0,
        mail: req.body.mail,
        fname: req.body.fname,
        lname: req.body.lname,
        ppurl: req.body.ppurl,
      
        mobile : req.body.mobile,
        
        //addresss
          local: req.body.local,
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          pincode: req.body.pincode,
          landmark:req.body.landmark,
          city:req.body.city
    
      }
  
     var insertProduct = productModel(mydoc).save(function (error)
        {
          if (error) throw error;
          var productModel = mongoose.model( req.body.uid , productSchema);
          var datetime = new Date()
          var insertProduct = productModel(mydoc).save(function (error)
          {
            if (error) throw error;
            console.log()
            console.log("new product saved");
            res.redirect('/myactivity');
          });
        });
      }
    })
})

//for day after tomarraw
app.post('/bookpsnl2',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)*2 );
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")
      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {

      var mydoc = 
      {
        nid: count+1,
        uid: req.body.uid,
        type: "personal",
        dis: req.query.dis,
        dat: datetime,
        date: mydate,
        time: mytimearray[count+1],
        done: 0,
        mail: req.body.mail,
        fname: req.body.fname,
        lname: req.body.lname,
        ppurl: req.body.ppurl,
      
        mobile : req.body.mobile,
        
        //addresss
          local: req.body.local,
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          pincode: req.body.pincode,
          landmark:req.body.landmark,
          city:req.body.city
    
      }
  
     var insertProduct = productModel(mydoc).save(function (error)
        {
          if (error) throw error;
          var productModel = mongoose.model( req.body.uid , productSchema);
          var datetime = new Date()
          var insertProduct = productModel(mydoc).save(function (error)
          {
            if (error) throw error;
            console.log()
            console.log("new product saved");
            res.redirect('/myactivity');
          });
        });
      }
    })
})



app.post('/bookpsnl3',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)* 3);
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")
      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {

      var mydoc = 
      {
        nid: count+1,
        uid: req.body.uid,
        type: "personal",
        dis: req.query.dis,
        dat: datetime,
        date: mydate,
        time: mytimearray[count+1],
        done: 0,
        mail: req.body.mail,
        fname: req.body.fname,
        lname: req.body.lname,
        ppurl: req.body.ppurl,
      
        mobile : req.body.mobile,
        
        //addresss
          local: req.body.local,
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          pincode: req.body.pincode,
          landmark:req.body.landmark,
          city:req.body.city
    
      }
  
     var insertProduct = productModel(mydoc).save(function (error)
        {
          if (error) throw error;
          var productModel = mongoose.model( req.body.uid , productSchema);
          var datetime = new Date()
          var insertProduct = productModel(mydoc).save(function (error)
          {
            if (error) throw error;
            console.log()
            console.log("new product saved");
            res.redirect('/myactivity');
          });
        });
      }
    })
})



app.post('/bookpsnl4',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)* 4);
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")
      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {

      var mydoc = 
      {
        nid: count+1,
        uid: req.body.uid,
        type: "personal",
        dis: req.query.dis,
        dat: datetime,
        date: mydate,
        time: mytimearray[count+1],
        done: 0,
        mail: req.body.mail,
        fname: req.body.fname,
        lname: req.body.lname,
        ppurl: req.body.ppurl,
      
        mobile : req.body.mobile,
        
        //addresss
          local: req.body.local,
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          pincode: req.body.pincode,
          landmark:req.body.landmark,
          city:req.body.city
    
      }
  
     var insertProduct = productModel(mydoc).save(function (error)
        {
          if (error) throw error;
          var productModel = mongoose.model( req.body.uid , productSchema);
          var datetime = new Date()
          var insertProduct = productModel(mydoc).save(function (error)
          {
            if (error) throw error;
            console.log()
            console.log("new product saved");
            res.redirect('/myactivity');
          });
        });
      }
    })
})

app.post('/bookpsnl5',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)* 5);
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")
      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {

      var mydoc = 
      {
        nid: count+1,
        uid: req.body.uid,
        type: "personal",
        dis: req.query.dis,
        dat: datetime,
        date: mydate,
        time: mytimearray[count+1],
        done: 0,
        mail: req.body.mail,
        fname: req.body.fname,
        lname: req.body.lname,
        ppurl: req.body.ppurl,
      
        mobile : req.body.mobile,
        
        //addresss
          local: req.body.local,
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          pincode: req.body.pincode,
          landmark:req.body.landmark,
          city:req.body.city
    
      }
  
     var insertProduct = productModel(mydoc).save(function (error)
        {
          if (error) throw error;
          var productModel = mongoose.model( req.body.uid , productSchema);
          var datetime = new Date()
          var insertProduct = productModel(mydoc).save(function (error)
          {
            if (error) throw error;
            console.log()
            console.log("new product saved");
            res.redirect('/myactivity');
          });
        });
      }
    })
})


};

