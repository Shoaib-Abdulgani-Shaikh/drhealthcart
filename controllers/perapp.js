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

  //for today
app.get('/tdbookpersonal',urlencodedParser,authCheck,(req,res) =>
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

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:45 PM','3:00 PM','3:15 PM']
      console.log("here am i = ",mytimearray[count+1]) 
      console.log("hello look at here")

      if (count >= mytimearray.length-1)
      {
        res.render("sorry")
      }
      else
      {
        Insta.setKeys('14ada57a8b82be0c1321101954d3bd2a', 'a5f369de84391497644e774477bf4e3a');
        var data = new Insta.PaymentData();
       
      data.purpose = "Personal Appoinment";            // REQUIRED
      data.amount = 50;                  // REQUIRED
      data.redirect_url = "http://localhost:5000/tdbookpersonalpure?dis="+req.query.dis;
       
      Insta.createPayment(data, function(error, response) {
        if (error) {
          console.log("this error occured ",error)
          // some error
        } else {
          // Payment redirection link at response.payment_request.longurl
          console.log("--------------response ___________________________________")
          console.log(response);
          const responseData = JSON.parse(response)
          console.log("--------------response ___________________________________")
          console.log(responseData.payment_request.longurl)
          res.redirect(responseData.payment_request.longurl)
        }
      });
    
      }
    })
})


//for today
app.get('/tdbookpersonalpure',urlencodedParser,authCheck,(req,res) =>
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

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
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
          pincode: req.body.pincode
    
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
app.get('/twbookpersonal',urlencodedParser,authCheck,(req,res) =>
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
          pincode: req.body.pincode
    
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
app.get('/dtwbookpersonal',urlencodedParser,authCheck,(req,res) =>
{
  var datetimetoday = new Date();
    var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
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

      var mytimearray = ['none','2 PM','2:15 PM','2:30 PM','2:40 PM','2:50 PM','3:00 PM']
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
          pincode: req.body.pincode
    
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

