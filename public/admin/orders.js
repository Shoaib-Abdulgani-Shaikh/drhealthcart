function myfunctiondone(val)
{
  alert(val)
  $('"#'+val+'"').hide(); 
}

function myfunction() 
{
  $("#nodata").hide(1000);
  $("#addedPosts").remove();

var myjson = $("#first_name" ).val()
var typej = $("#last_name" ).val()

console.log(myjson)
  $.ajax({
    type: "GET",
    url: "/api/orders",
    data:{'date':myjson,'type':typej} ,
    success: function (data) 
    {
      console.log(data)
      if (data == '')
      {
        $("#nodata").show(1000);
      }
      else{
        if (typej == "calls")
        {

          $("#activities").append("<div id='addedPosts'></div>");


          for (let i = 0; i < data.length; i++) {
            var forid = '"'+data[i].uid+'"';
            var string1 = "<hr><div class='row'><div class='col s12 m12'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'> <i class='medium material-icons right'>phone</i> Phone calls</span> <br><ul><li><b>"+data[i].dis +"</b>" 
    var string2 = "<br><li><b>Gmail : </b> "+ data[i].uid +"</li></li><br><li><b>Name : </b> "+ data[i].fname+" "+ data[i].lname+"</li><br><li><b>Address :</b></li> <center><div><p>"+ data[i].local+"</div></center><br><li><b>Landmark : </b> "+ data[i].landmark+"</li><li><b>City : </b> "+ data[i].city+"</li><br><li><b>District : </b> "+ data[i].district+"</li><li><b>Pincode : </b> "+ data[i].pincode+"</li><li><b>State : </b> "+ data[i].state+"</li><li><b>Country : </b>"+ data[i].country+"</li><li><b>Phone : </b> "+ data[i].mobile+"</li><br><li><b>Time :</b> "+ data[i].time+"</li><li><b>Date :</b> "+ data[i].date+"</li>"
    var string3 = "</li><br></ul> </div></div></div>"
    var allstrings = string1 + string2 + string3;          
    $("#addedPosts").append(allstrings);
   
    
     
        }
  
                }
        else if(typej=="products")
        {
          $("#activities").append("<div id='addedPosts'></div>");

          for (let i = 0; i < data.length; i++) {
           
    var string1 = "<hr><div class='row'><div class='col s12 m12'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'> <i class='medium material-icons right'>business_center</i> Medincines</span> <br><ul><li><b>"+data[i].dis+"</b>" 
    var string2 = "<br><li><b>Gmail : </b> "+ data[i].uid +"</li></li><br><li><b>Name : </b> "+ data[i].fname+" "+ data[i].lname+"</li><br><li><b>Address :</b></li> <center><div><p>"+ data[i].local+"</div></center><br><li><b>Landmark : </b> "+ data[i].landmark+"</li><li><b>City : </b> "+ data[i].city+"</li><br><li><b>District : </b> "+ data[i].district+"</li><li><b>Pincode : </b> "+ data[i].pincode+"</li><li><b>State : </b> "+ data[i].state+"</li><li><b>Country : </b>"+ data[i].country+"</li><li><b>Phone : </b> "+ data[i].mobile+"</li><br><li><b>Time :</b> "+ data[i].time+"</li><li><b>Date :</b> "+ data[i].date+"</li>"
   
    var string3 = "</li><br></ul></div></div></div>"
    var allstrings = string1 + string2 + string3;          
    $("#addedPosts").append(allstrings);
   
    // <div class='mycard3'><div class='row'><form class='col s12' onsubmit='myfunction()'><div class='row'><div class='input-field col s12'><textarea id='textarea1' class='materialize-textarea' required></textarea><label for='textarea1'>Medicine Description</label></div><center><button class='btn white black-text'  type='submit' name='action'>Submit<i class='material-icons right'>send</i></button></center></form></div></div></div>
        }
  
            
        }
        else if(typej=="personal")
        {
          $("#activities").append("<div id='addedPosts'></div>");

          for (let i = 0; i < data.length; i++) {
           
    var string1 = "<hr><div class='row'><div class='col s12 m12'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'> <i class='medium material-icons right'>business_center</i> Personal Appointment</span> <br><ul><li><b>"+data[i].dis+"</b>" 
    var string2 = "<br><li><b>Gmail : </b> "+ data[i].uid +"</li></li><br><li><b>Name : </b> "+ data[i].fname+" "+ data[i].lname+"</li><br><li><b>Address :</b></li> <center><div><p>"+ data[i].local+"</div></center><br><li><b>Landmark : </b> "+ data[i].landmark+"</li><li><b>City : </b> "+ data[i].city+"</li><br><li><b>District : </b> "+ data[i].district+"</li><li><b>Pincode : </b> "+ data[i].pincode+"</li><li><b>State : </b> "+ data[i].state+"</li><li><b>Country : </b>"+ data[i].country+"</li><li><b>Phone : </b> "+ data[i].mobile+"</li><br><li><b>Time :</b> "+ data[i].time+"</li><li><b>Date :</b> "+ data[i].date+"</li>"
   
    var string3 = "</li><br></ul></div></div></div>"
    var allstrings = string1 + string2 + string3;          
    $("#addedPosts").append(allstrings);
   
    // <div class='mycard3'><div class='row'><form class='col s12' onsubmit='myfunction()'><div class='row'><div class='input-field col s12'><textarea id='textarea1' class='materialize-textarea' required></textarea><label for='textarea1'>Medicine Description</label></div><center><button class='btn white black-text'  type='submit' name='action'>Submit<i class='material-icons right'>send</i></button></center></form></div></div></div>
        }
  
            
        }
        else{
          $("#nodata").show(1000);
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

        //preventing form from refreshing the page
  $("#prospects_form2").submit(function(e) {
    e.preventDefault();
      });

      $("#nodata").hide();


    
      
    })
