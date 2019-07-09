
function fullnotice(id,val){
  console.log(id)
  console.log(val)
 var queryurl =  "/callcheck?date="+val;
  $.ajax(
    {
      type: "GET",
      url: queryurl,
      success: function (data)
      {
       console.log(data)

       if (data == "success")
       {
        var insertext = "All appoitments of " + val + " are booked, please select another date."
        $("#cdatep").hide();
        $("#cdatep").fadeIn(1000);
      
        $("#cdatep").empty();
        $("#cdatep").html(insertext);
        //  var catchid = '#' + id + 'p'
        //  console.log(catchid)
       
        //  $(catchid).text(insertext);
 
        //  $(catchid).show(1000);

  
       }
       else
       {
        var catchid = '#' + id + 'pay'
        $(catchid).click();
       }

       
}})


}





function fullnoticepsnl(id,val){
  console.log(id)
  console.log(val)
 var queryurl =  "/psnlcheck?date="+val;
  $.ajax(
    {
      type: "GET",
      url: queryurl,
      success: function (data)
      {
       console.log(data)

       if (data == "success")
       {
        var insertext = "All appoitments of " + val + " are booked, please select another date."
        

        $("#pdatep").hide();
        $("#pdatep").fadeIn(1000);
      
        $("#pdatep").empty();
        $("#pdatep").html(insertext);
        
  
       }
       else
       {
        var catchid = '#' + id + 'pay'
        $(catchid).click();
       }

       
}})


}









$(document).ready(function()
{

  var datetimetoday = new Date();

  var datetime = new Date(datetimetoday.getTime()  );
  console.log("day = ",datetime.getDay());
  var month = datetime.getMonth()+1
  var mydate = datetime.getDate()+"-"+month+"-"+datetime.getFullYear();
  
  var datetime1 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000));
  var month1 = datetime1.getMonth()+1
  var mydate1 = datetime1.getDate()+"-"+month1+"-"+datetime1.getFullYear();

  var datetime2 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month2 = datetime2.getMonth()+1
  var mydate2 = datetime2.getDate()+"-"+month2+"-"+datetime2.getFullYear();

  var datetime3 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month3 = datetime3.getMonth()+1
  var mydate3 = datetime3.getDate()+"-"+month3+"-"+datetime3.getFullYear();

  var datetime4 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month4 = datetime4.getMonth()+1
  var mydate4 = datetime4.getDate()+"-"+month4+"-"+datetime4.getFullYear();

  var datetime5 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month5 = datetime5.getMonth()+1
  var mydate5 = datetime5.getDate()+"-"+month5+"-"+datetime5.getFullYear();

  $("#cdate").val(mydate);
  $("#cdate1").val(mydate1);
  $("#cdate2").val(mydate2);
  $("#cdate3").val(mydate3);
  $("#cdate4").val(mydate4);
  $("#cdate5").val(mydate5);

  $("#pdate").val(mydate);
  $("#pdate1").val(mydate1);
  $("#pdate2").val(mydate2);
  $("#pdate3").val(mydate3);
  $("#pdate4").val(mydate4);
  $("#pdate5").val(mydate5);

  $("#topsignindiv").hide();

  $("#cancelsigin").click(function()
  {
    $("#topsignindiv").hide();
  })
  

  
  
  $("#buymed").click(function()
  {
    $('html, body').animate(
        {
            scrollTop: $("#signindiv").offset().top
        },
         2000);
  })

  $("#bookcall").click(function()
  {
    $('html, body').animate(
        {
            scrollTop: $("#signindiv").offset().top
        },
         2000);
  })
  
  $("#bookapp").click(function()
  {
        $('html, body').animate(
            {
                scrollTop: $("#signindiv").offset().top
            },
             2000);
  })
    
  $(".payform").hide();




    });
