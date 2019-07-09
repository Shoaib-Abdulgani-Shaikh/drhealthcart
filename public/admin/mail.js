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
          var continueString1 = "business_center</i> Medicine</span> <br><ul><li><b>"
      
          var continueString3 = "Date :</b> "+ data[i].date + " </li><li><b>"
          var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>"
          var continueString5 = "Medincines for :</b> "+data[i].dis+" </li><br><li><b>Name :</b>"+ data[i].fname+" "+ data[i].lname+"</li><br><li><b>Phone : </b> "+ data[i].mobile+"</li>"
          var continueString6 = "</li><br></ul></div></div></div></div>"
          var completeString = continueString + continueString1 +  continueString3 +continueString4+ continueString5+ continueString6 ; 
         
        }
          else if(data[i].type == "call")
          {
            var continueString = "<div class='row'><div class='col s12 m12'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'> <i class='medium material-icons right'>"
            var continueString1 = "phone</i> Phone Call appointment</span> <br><ul><li><b>"
           var continueString3 = "Date :</b> "+ data[i].date + " </li><li><b>"
            var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b>Appoinement for :</b> "+ data[i].dis + "</li><br><li><b><br><li><b><br><li><b>Name : </b>"+ data[i].fname+" "+ data[i].lname+"</li><br><li><b>Phone : </b> "+ data[i].mobile+"</li>"
            var completeString = continueString + continueString1 +continueString3 +continueString4; 
            }
          else if(data[i].type == "personal") 
          {
            var continueString = "<div class='row'><div class='col s12 m12'><div class='card green darken-1'><div class='card-content white-text'><span class='card-title'> <i class='medium material-icons right'>"
            var continueString1 = "group_add</i>Personal Appoinment</span> <br><ul><li><b>"
            var continueString3 = "Date :</b> "+ data[i].date + " </li><li><b>"
            var continueString4 = "Time :</b> "+ data[i].time + "</li><br><li><b><br><li><b>Name : </b>"+ data[i].fname+" "+ data[i].lname+"</li><li><b>Phone : </b> "+ data[i].mobile+"</li>"
            var continueString5 = "</div></center></ul></div></div></div></div>"  
            var completeString = continueString + continueString1 + continueString3 +continueString4+ continueString5;   
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
