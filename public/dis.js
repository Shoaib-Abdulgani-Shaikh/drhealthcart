$(document).ready(function()
{
  var datetimetoday = new Date();
  var datetime = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000));
  var month = datetime.getMonth()+1
  var mydate = datetime.getDate()+" / "+month+" / "+datetime.getFullYear();
  
  var datetime1 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month1 = datetime1.getMonth()+1
  var mydate1 = datetime1.getDate()+" / "+month1+" / "+datetime1.getFullYear();

  var datetime2 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month2 = datetime2.getMonth()+1
  var mydate2 = datetime2.getDate()+" / "+month2+" / "+datetime2.getFullYear();

  var datetime3 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month3 = datetime3.getMonth()+1
  var mydate3 = datetime3.getDate()+" / "+month3+" / "+datetime3.getFullYear();

  var datetime4 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month4 = datetime4.getMonth()+1
  var mydate4 = datetime4.getDate()+" / "+month4+" / "+datetime4.getFullYear();

  var datetime5 = new Date(datetimetoday.getTime() + (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000)+ (24 * 60 * 60 * 1000));
  var month5 = datetime5.getMonth()+1
  var mydate5 = datetime5.getDate()+" / "+month5+" / "+datetime5.getFullYear();

  $("#cdate").text(mydate);
  $("#cdate1").text(mydate1);
  $("#cdate2").text(mydate2);
  $("#cdate3").text(mydate3);
  $("#cdate4").text(mydate4);
  $("#cdate5").text(mydate5);

  $("#pdate").text(mydate);
  $("#pdate1").text(mydate1);
  $("#pdate2").text(mydate2);
  $("#pdate3").text(mydate3);
  $("#pdate4").text(mydate4);
  $("#pdate5").text(mydate5);

  $("#topsignindiv").hide();

  $("#cancelsigin").click(function()
  {
    $("#topsignindiv").hide();
  })
  

  $(".packeageit").click(function()
  {
    $("#topsignindiv").hide();
    $("#topsignindiv").show(1000);
        
    $('html, body').animate(
        {
            scrollBottom: $("#topsignindiv").offset().top
        },
         2000);
    
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
    

    });
