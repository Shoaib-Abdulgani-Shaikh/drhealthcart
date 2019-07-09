//MongoDB 
var mongoose = require('mongoose');

//Schema
var sessionSchema = new mongoose.Schema(
    { 
      uid : String,
      nid : Number,
      sessionid: String,
      socket: String, 
      mail: String,
      fname: String,
      lname: String,
      ppurl: String,
    
      mobile : Number,
      
      //addresss
        local: String,
        country: String,
        state: String,
        district: String,
        pincode: Number,
        history:String,
        landmark:String,
        city:String
    
   });


//Collection
var sessionModel = mongoose.model( "sessions" , sessionSchema);

module.exports = sessionModel;
