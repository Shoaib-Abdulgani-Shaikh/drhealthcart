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
  app.get('/privacy_policy',(req,res)=>
  {
    res.render('privacy_policy');
  }); 

  app.get('/terms_and_conditions',(req,res)=>
  {
    res.render('terms_and_conditions');
  }); 
  


  app.get('/paymentmsg',(req,res)=>
  {
    res.render('paymentmsg');
  }); 

  app.get('/',(req,res)=>
  {
    res.render('index');
  }); 

  app.get('/getdata',(req,res)=>
  {
    res.render('getdata');
  }); 


  app.get('/signin',(req,res)=>
  {
    res.render('signin');
  }); 


  app.get('/hairfall2',(req,res)=>
  {
    res.render('hairfall_2');
  }); 

   app.get('/constipation2',(req,res)=>
  {
    res.render('constipation_2');
  });

  app.get('/diabetes2',(req,res)=>
  {
    res.render('diabetes_2');
  }); 

   app.get('/ibs2',(req,res)=>
  {
    res.render('ibs_2');
  }); 


   app.get('/obesity2',(req,res)=>
  {
    res.render('obesity_2');
  }); 


   app.get('/pcod2',(req,res)=>
  {
    res.render('pcod_2');
  }); 


   app.get('/psoriasis2',(req,res)=>
  {
    res.render('psoriasis_2');
  });


  app.get('/myactivity',authCheck,(req,res)=>
  {
    res.render('myactivity');
  }); 

  app.get('/api/mydata',authCheck,(req,res)=>
  {
  userModel.find({mail:req.body.uid},function(err, data) 
  { 
    if (err) return err;
    res.json(data);
   });
  }); 

  app.post('/api/mydata',urlencodedParser,authCheck,(req,res)=>
  {
    var m = JSON.parse(req.body.str)
    console.log(m.fname)
    console.log(m.lname)
    console.log(m.mobile)
    console.log(m.local)
    console.log(m.country)
    console.log(m.state)
    console.log(m.district)
    console.log(m.pincode)
    console.log(m.history)
    console.log(m.landmark)
    console.log(m.city)


    userModel.updateOne(//criteria to find the data
      { mail : req.body.uid
      },//which data we want to find
      {
        $set :
        {
          "fname": m.fname,
          "lname" : m.lname,
          "mobile":m.mobile,
          "local":m.local,
          "country":m.country,
          "state":m.state,
          "district":m.district,
          "pincode": m.pincode,
          "history":m.history,
          "landmark":m.landmark,
          "city":m.city
          
          
        } 
      },//callback function            
      function (err,data)
      {
        if(err)throw err;
        console.log("User new data is saved...");
        
        sessionModel.updateOne(//criteria to find the data
          { mail : req.body.uid
          },//which data we want to find
          {
            $set :
            {
              "fname": m.fname,
              "lname" : m.lname,
              "mobile":m.mobile,
              "local":m.local,
              "country":m.country,
              "state":m.state,
              "district":m.district,
              "pincode": m.pincode,
              "history":m.history,
              "landmark":m.landmark,
              "city":m.city
            } 
          },//callback function            
          function (err,data)
          {
            if(err)throw err;
            console.log("User new data is saved...");
            res.json("success")
          })
      })
  }); 

  app.get('/api/myactivity',authCheck,(req,res)=>
  {
    //Collection
  var productModel = mongoose.model( req.body.uid , productSchema);
  productModel.find({}).sort({dat: -1}).exec(function(err, data) { 
    if (err) return err;
    res.json(data);
   });
  }); 


 

//real ones
app.post('/placeorder',urlencodedParser,authCheck,(req,res) =>
{

  var datetime = new Date();
  var month = datetime.getMonth()+1
  var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
  var mytime = datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds();
  console.log(month)
  console.log(mydate)
  console.log(mytime)

  var productModel = mongoose.model( mydate+"product" , productSchema);

  var mydoc = 
  {
    uid: req.body.uid,
    type: "product",
    dis: req.query.dis,
    dat: datetime,
    date: mydate,
    time: mytime,
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
      console.log("--------------------mydoc --------------",mydoc)
      var productModel = mongoose.model( req.body.uid , productSchema);
      var insertProduct = productModel(mydoc).save(function (error)
      {
        if (error) throw error;
        console.log()
        console.log("new product saved");
        res.redirect('/paymentmsg');
      });
    });

})

// app.get('/bookphonecall',urlencodedParser,authCheck,(req,res) =>
// {
//   if (req.query.date = "today")
//   {
//     var datetime = new Date();
//     var month = datetime.getMonth()+1
//     var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
//     var mytime = datetime.getHours()+"-"+datetime.getMinutes();
//     console.log(month)
//     console.log(mydate)
//     console.log(mytime)

//     var productModel = mongoose.model( mydate+"call" , productSchema);

//     productModel.find().countDocuments((err, count)=>
//     {
//       if (err) throw err;

//       count = count + 1;

//       var mydoc = 
//       {
//         nid: count,
//         uid: req.body.uid,
//         type: "call",
//         dis: req.query.dis,
//         dat: datetime,
//         date: mydate,
//         time: mytime,
//         done: 0
//       }
  
//      var insertProduct = productModel(mydoc).save(function (error)
//         {
//           if (error) throw error;
//           var productModel = mongoose.model( req.body.uid , productSchema);
//           var datetime = new Date()
//           var insertProduct = productModel(mydoc).save(function (error)
//           {
//             if (error) throw error;
//             console.log()
//             console.log("new product saved");
//             res.redirect('/paymentmsg');
//           });
//         });
//     })
//   // var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
//   }
// })

// app.get('/bookpersonal',urlencodedParser,authCheck,(req,res) =>
// {
//   //Collection
//   var productModel = mongoose.model( req.body.uid , productSchema);
//   var datetime = new Date()
//   var insertProduct = productModel({
//     uid: req.body.uid,
//     type: "personal",
//     dis: req.query.dis,
//     dat: datetime,
//     done: 0
//       }).save(function (error)
//     {
//       if (error) throw error;
//       console.log()
//       console.log("new product saved");
//       res.redirect('/paymentmsg');
//     });
// })

  app.get("/signout",(req,res)=>{
    sessionModel.remove({
      sessionid : req.cookies.nsessionid
    },function (err) {
      console.log("Sessioin destroyed !!!")
      res.cookie('nsessionid',"loggedout", { maxAge: 31536000000, httpOnly: true })
      res.redirect("/");
    })
  })

  // app.get('/settings',authCheck,(req,res)=>
  // {
  //   res.render('settings');
  // }); 

  // app.get('/help',authCheck,(req,res)=>
  // {
  //   res.render('help');
  // }); 

  // app.get('/feedback',authCheck,(req,res)=>
  // {
  //   res.render('feedback');
  // }); 

  // app.get('/aboutus',(req,res)=>
  // {
  //   res.render('aboutus');
  // }); 

  app.get('/privacypolicy',(req,res)=>
  {
    res.render('privacy');
  }); 

  app.get('/termsandconditions',(req,res)=>
  {
    res.render('terms');
  }); 
 
  app.get('/hairfall',authCheck,(req,res)=>
  {
    
     res.render('hairfall_2');
  }); 


   app.get('/constipation',authCheck,(req,res)=>
  {
    
     res.render('constipation_2');
  }); 


  app.get('/diabetes',authCheck,(req,res)=>
  {
    
     res.render('diabetes_2');
  });


    app.get('/ibs',authCheck,(req,res)=>
  {
    
     res.render('ibs_2');
  });


    app.get('/obesity',authCheck,(req,res)=>
  {
    
     res.render('obesity_2');
  });


   app.get('/pcod',authCheck,(req,res)=>
  {
    
     res.render('pcod_2');
  });



   app.get('/psoriasis',authCheck,(req,res)=>
  {
    
     res.render('psoriasis_2');
  });
  


  app.get('/piles',authCheck,(req,res)=>
  {
    
     res.render('piles_2');
  }); 

  app.get('/allergy',authCheck,(req,res)=>
  {
    
     res.render('allergy_2');
  }); 

  app.get('/sexual_problem',authCheck,(req,res)=>
  {
    
     res.render('sexual_problem_2');
  }); 


  
  app.get('/other_disease',authCheck,(req,res)=>
  {
    
     res.render('other_disease_2');
  }); 
  
  app.get('/other_disease2',(req,res)=>
  {
    
     res.render('other_disease_2');
  }); 
  


};

