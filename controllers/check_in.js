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

//redering webpages
module.exports = function (app,authCheck) 
{
  
  app.get('/callcheck',urlencodedParser,authCheck,(req,res) =>
{
    var mydate = req.query.date;
   
    console.log(mydate)
 
    var productModel = mongoose.model( mydate+"call" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
     console.log(mytimearray.length);
     console.log("count=",count)
      if (count >= 6)
      {
        res.send("sorry")
      }
      else
      {

     res.send("success")
  
   
      }
    })
})





app.get('/psnlcheck',urlencodedParser,authCheck,(req,res) =>
{
    var mydate = req.query.date;
   
    console.log(mydate)
 
    var productModel = mongoose.model( mydate+"personal" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
     console.log(mytimearray.length);
     console.log("count=",count)
      if (count >= 6)
      {
        res.send("sorry")
      }
      else
      {

     res.send("success")
  
   
      }
    })
})


















  //phonecall appointments
  //today date check
app.get('/tdcallcheck',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime()) 
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"call" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
     console.log(mytimearray.length);
      if (count >= 6)
      {
        res.send("sorry")
      }
      else
      {

     res.send("succsses")
  
   
      }
    })
})



//tommorow day check
app.get('/twcallcheck',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000));
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"call" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
     console.log(mytimearray.length);
      if (count >= 6)
      {
        res.send("sorry")
      }
      else
      {

     res.send("succsses")
  
   
      }
    })
})






//day after tommorow

app.get('/dtwcallcheck',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
    var month = datetime.getMonth()+1
    var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
    var mytime = datetime.getHours()+"-"+datetime.getMinutes();
    console.log(month)
    console.log(mydate)
    console.log(mytime)

    var productModel = mongoose.model( mydate+"call" , productSchema);

    productModel.find().countDocuments((err, count)=>
    {
      if (err) throw err;

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
     console.log(mytimearray.length);
      if (count >= 6)
      {
        res.send("sorry")
      }
      else
      {

     res.send("succsses")
  
   
      }
    })
})



//personal appointments
//todays appointments
app.get('/tdbookpersonal',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
  var datetime = new Date(datetimetoday.getTime() );
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

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:45 PM','3:00 PM','3:15 PM']
      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")

      if (count >= 6)
      {
        res.send("sorry")
      }
      else{
        res.send("success")
      }
  
    })
})


//tommorows appointments
app.get('/twbookpersonal',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
  var datetime = new Date(datetimetoday.getTime()+ (24 * 60 * 60 * 1000) );
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

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:45 PM','3:00 PM','3:15 PM']
      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")

      if (count >= 6)
      {
        res.send("sorry")
      }
      else{
        res.send("success")
      }
  
    })
})


//day after toomorrow appointments
app.get('/twbookpersonal',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
  var datetime = new Date(datetimetoday.getTime()+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000) );
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

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:45 PM','3:00 PM','3:15 PM']
      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")

      if (count >= 6)
      {
        res.send("sorry")
      }
      else{
        res.send("success")
      }
  
    })
})

}