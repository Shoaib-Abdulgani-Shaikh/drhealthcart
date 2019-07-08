
  function aboveaddress() {
      $('html, body').animate(
          {
              scrollTop: $("#icon_telephone").offset().top
          },
           2000);
  }

function myfunction() 
{
  alert("hello")
var myjson = {
  fname : $("#first_name" ).val(),
  lname : $("#last_name" ).val(),
  mobile : $("#icon_telephone" ).val(),
  local : $("#textarea1" ).val(),
  country : $("#country_name" ).val(),
  state : $("#state_name" ).val(),
  district : $("#disctrict_name" ).val(),
  pincode : $("#pincode_name" ).val()
};

console.log(myjson)
  $.ajax({
    type: "POST",
    url: "/api/mydata",
  crossDomain:true, 
    dataType : "json",
    data:{'str':JSON.stringify(myjson)} ,
    success: function (data) 
    {
      alert(data)
    }})


}
   
$(document).ready(function()
{
  //preventing form from refreshing the page
  $("#prospects_form").submit(function(e) {
    e.preventDefault();
});

  
      $.ajax({
        type: "GET",
        url: "/api/mydata",
        success: function (data) 
        {

$("#first_name" ).focus();
$("#first_name" ).val(data[0].fname);

$("#last_name" ).focus();
$("#last_name" ).val(data[0].lname);

$("#icon_telephone" ).focus();
$("#icon_telephone" ).val(data[0].mobile);

$("#textarea1" ).focus();
$("#textarea1" ).val(data[0].local);

$("#country_name" ).focus();
$("#country_name" ).val(data[0].country);

$("#state_name" ).focus();
$("#state_name" ).val(data[0].state);

$("#disctrict_name" ).focus();
$("#disctrict_name" ).val(data[0].district);

$("#pincode_name" ).focus();
$("#pincode_name" ).val(data[0].pincode);

$("#pincode_name" ).blur();

$('html, body').animate(
  {
      scrollTop: $("#activities").offset().top
  },
   5000);


        }})

      $.ajax({
        type: "GET",
        url: "/api/myactivity",
        success: function (data) 
        {
for (let i = 0; i < data.length; i++) 
{
  var datetime =  new Date(data[i].date);
  var month = datetime.getMonth()+1
  var mydate = datetime.getDate()+"/"+month+"/"+datetime.getFullYear();
  var mytime = datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds();

  if (data[i].type == "product")
  {

  var continueString = "<div class='row'><div class='col s12 m12'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'> <i class='medium material-icons right'>"
  var continueString1 = "business_center</i> <p style='color: orangered;'> <b>Your order placed successfully ! </b></p>  </span> <br><ul>"
  var continueString2 = "<li><b>"
  var continueString3 = "Date :</b> "+ data[i].date + " </li><br><li><b>"
  var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>"
  var continueString5 = "Medincines for :</b> "+data[i].dis+" </li><br><li><b>"
  var continueString6 = "Dilivery of Medincines :</b>We will diliver your medicines on your given address. <br><br>"
  var continueString7  = "<a id='aboveaddress' onclick='aboveaddress()' class='waves-effect white black-text btn right' style='text-transform: none;'><i class='material-icons right'>arrow_upward</i>Go to my given address</a>"
  var continueString8 = "</li><br></ul></div></div></div></div>"
  var completeString = continueString + continueString1 + continueString2 + continueString3 +continueString4+ continueString5+ continueString6 +continueString7+ continueString8; 
 
}
  else if(data[i].type == "call")
  {
    var continueString = "<div class='row'><div class='col s12 m12'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'> <i class='medium material-icons right'>"
    var continueString1 = "phone</i> Phone Call appointment</span> <br><ul><li><b>"
    var continueString2 = "Your phone call appointment is booked successfully !</b></li><br><li><b>"
    var continueString3 = "Date :</b> "+ data[i].date + " </li><br><li><b>"
    var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>Appoinement for :</b> "+ data[i].dis + "</li><br><li><b><br><li><b>"
    var continueString5 = "Our Doctor :</b> will call you at "+data[i].time +" on your given mobile number  <br><br><a id='aboveaddress' onclick='aboveaddress()' class='waves-effect white black-text btn right' style='text-transform: none;'><i class='material-icons right'>arrow_upward</i>Go to my given mobile number</a> </li></ul></div></div></div></div>"
    var completeString = continueString + continueString1 + continueString2 + continueString3 +continueString4+ continueString5; 
    }
  else if(data[i].type == "personal") 
  {
    var continueString = "<div class='row'><div class='col s12 m12'><div class='card green darken-1'><div class='card-content white-text'><span class='card-title'> <i class='medium material-icons right'>"
    var continueString1 = "group_add</i>Personal Appoinment</span> <br><ul><li><b>"
    var continueString2 = "Your Personal appointment is booked successfully !</b></li><br><li><b>"
    var continueString3 = "Date :</b> "+ data[i].date + " </li><br><li><b>"
    var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>"
    var continueString5 = "Our Doctor :</b> will meet you at "+data[i].time + " on below address<br><br><div><p> Dr. HealthCart, <br>Vishal Residency, <br>Near Yamaha Showroom, <br>Mumbai-Pune Highway, <br>Kasarwadi, Pune, <br>Pincode - 411034, <br>Maharashtra, <br>India.</div></ul></div></div></div></div>"  
    var completeString = continueString + continueString1 + continueString2 + continueString3 +continueString4+ continueString5;   
  }
  else{
    console.log("This is not supported...")
  }

  $("#activities").append(completeString);

}
        
}}
)}

      );

  
  