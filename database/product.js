//MongoDB 
var mongoose = require('mongoose');

//Schema
// uid stands for Universal backend id of product
// nid stands for Nestimatic id
var productSchema = new mongoose.Schema(
{ 
  nid: Number, // a unique id in collection
  uid: String,
  // product / call , personal
  type: String,
  // diseases for which the medicine or appoinemtent is 
  dis: String,
  // date & time of puchase or appointment booking
  dat: Date,
//////From here it is  for appoinements
  //Date of appointment
  date: String,
  //Time of appointment
  time: String,
  //is order dilivered or not or is appoinement done or not
  done: Boolean,
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

module.exports = productSchema;

