//MongoDB 
var mongoose = require('mongoose');

//Schema
// uid stands for Universal backend id of user
// nid stands for Nestimatic id
var userSchema = new mongoose.Schema(
{ 
  uid: String,
  nid: Number,
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
    pincode: Number
});

//Collection
var userModel = mongoose.model( "users" , userSchema);

module.exports = userModel;

