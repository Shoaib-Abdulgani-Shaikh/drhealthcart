function myfunction() 
{
  $("#nodata").hide(1000);
  $("#addedPosts").remove();

var myjson = $("#first_name" ).val()

console.log(myjson)
  $.ajax({
    type: "GET",
    url: "/api/adminmail",
    data:{'mail':myjson} ,
    success: function (data) 
    {
      if (data == '')
      {
        $("#nodata").show(1000);
      }
      else{
        console.log(data)

        $("#activities").append("<div id='addedPosts'></div>");

        for (let i = 0; i < data.length; i++) {
  
          if (data[i].type == "product")
          {
        
          var continueString = "<div class='row'><div class='col s12 m12'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'> <i class='medium material-icons right'>"
          var continueString1 = "business_center</i> Your order placed !</span> <br><ul><li><b>"
          var continueString2 = "Your order of medicines is placed successfully !</b></li><br><li><b>"
          var continueString3 = "Date :</b> "+ data[i].date + " </li><br><li><b>"
          var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>"
          var continueString5 = "Medincines for :</b> "+data[i].dis+" </li><br><li><b>Name :</b>"+ data[i].fname+"</li><br><li><b>Surname :</b> "+ data[i].lname+"</li><br><li><b>Phone : </b> "+ data[i].mobile+"</li><li><b>Country : </b>"+ data[i].country+"</li><li><b>State : </b> "+ data[i].state+"</li><li><b>District : </b> "+ data[i].district+"</li><li><b>Pincode : </b> "+ data[i].pincode+"</li><li><b>Address :</b></li> <center><div><p>"+ data[i].local+"</div></center><br>"
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
            var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>Appoinement for :</b> "+ data[i].dis + "</li><br><li><b><br><li><b><br><li><b>Name :</b>"+ data[i].fname+"</li><br><li><b>Surname :</b> "+ data[i].lname+"</li><br><li><b>Phone : </b> "+ data[i].mobile+"</li><li><b>Country : </b>"+ data[i].country+"</li><li><b>State : </b> "+ data[i].state+"</li><li><b>District : </b> "+ data[i].district+"</li><li><b>Pincode : </b> "+ data[i].pincode+"</li><li><b>Address :</b></li> <center><div><p>"+ data[i].local+"</div></center><br>"
            var continueString5 = "Our Doctor :</b> will call you at "+data[i].time +" on your given mobile number  <br><br><a id='aboveaddress' onclick='aboveaddress()' class='waves-effect white black-text btn right' style='text-transform: none;'><i class='material-icons right'>arrow_upward</i>Go to my given mobile number</a> </li></ul></div></div></div></div>"
            var completeString = continueString + continueString1 + continueString2 + continueString3 +continueString4+ continueString5; 
            }
          else if(data[i].type == "personal") 
          {
            var continueString = "<div class='row'><div class='col s12 m12'><div class='card green darken-1'><div class='card-content white-text'><span class='card-title'> <i class='medium material-icons right'>"
            var continueString1 = "group_add</i>Personal Appoinment</span> <br><ul><li><b>"
            var continueString2 = "Your Personal appointment is booked successfully !</b></li><br><li><b>"
            var continueString3 = "Date :</b> "+ data[i].date + " </li><br><li><b>"
            var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b><br><li><b>Name :</b>"+ data[i].fname+"</li><br><li><b>Surname :</b> "+ data[i].lname+"</li><br><li><b>Phone : </b> "+ data[i].mobile+"</li><li><b>Country : </b>"+ data[i].country+"</li><li><b>State : </b> "+ data[i].state+"</li><li><b>District : </b> "+ data[i].district+"</li><li><b>Pincode : </b> "+ data[i].pincode+"</li><li><b>Address :</b></li> <center><div><p>"+ data[i].local+"</div></center><br>"
            var continueString5 = "Our Doctor :</b> will meet you at "+data[i].time + " on below address<center><div><p> Dr. HealthCart, <br>Vishal Residency, <br>Near Yamaha Showroom, <br>Mumbai-Pune Highway, <br>Kasarwadi, Pune, <br>Pincode - 411034, <br>Maharashtra, <br>India.</div></center></ul></div></div></div></div>"  
            var completeString = continueString + continueString1 + continueString2 + continueString3 +continueString4+ continueString5;   
          }
          else{
            console.log("This is not supported...")
          }
        
  $("#addedPosts").append(completeString);
  
      }
  
    
      }
      
    }})

}
   
$(document).ready(function()
{

  //preventing form from refreshing the page
  $("#prospects_form").submit(function(e) {
    e.preventDefault();
      });

      $("#nodata").hide();


    
      
    })
