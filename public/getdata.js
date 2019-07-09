function myfunction() 
{

  var myjson = {
  fname : $("#first_name" ).val(),
  lname : $("#last_name" ).val(),
  mobile : $("#icon_telephone" ).val(),
  local : $("#textarea1" ).val(),
  country : $("#country_name" ).val(),
  state : $("#state_name" ).val(),
  district : $("#disctrict_name" ).val(),
  pincode : $("#pincode_name" ).val(),
  history : $("#history" ).val(),
  city : $("#city_name" ).val(),
  landmark : $("#landmark" ).val()
};

console.log(myjson)
  $.ajax({
    type: "POST",
    url: "/api/mydata",
  crossDomain:true, 
    dataType : "json",
    data:{str:JSON.stringify(myjson)} ,
    success: function (data) 
    {
      window.location.href = "www.drhealthcart.com/signin";    
    }})
}
   
$(document).ready(function()
{

  //preventing form from refreshing the page
  $("#prospects_form").submit(function(e) {
    e.preventDefault();});

    
    $.ajax({
      type: "GET",
      url: "/api/mydata",
      success: function (data) 
      {

$("#first_name" ).focus();
$("#first_name" ).val(data[0].fname);

$("#last_name" ).focus();
$("#last_name" ).val(data[0].lname);

$("#last_name" ).blur();



      }})


});

