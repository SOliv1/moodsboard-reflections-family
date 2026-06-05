//waits until page is ready
//jQuery must be included in HTML: <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
/* global $ */

$(document).ready(function(){
//will need to comment out some code when trying to view effects on their own

 //hides all panels when a panel is clicked

$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
  $(this).hide();
  $("#panel .container").siblings().fadeTo(1000, .5);

   });


//restores all panels to full opacity when reset button clicked 

$(".superButton").click(function(){
   $("#panel .container").show();
   $(".theButton").show().fadeTo(1000,1);

   });

//turns panel background black on mouseenter

$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");

   });
   
 //returns to original colour on mouseout 

$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");

   });
   
   //when table header is clicked , removes selection class from all other table rows and
   //adds the selection class to this table headers row only

   $("th").click(function(){
   	$("tr").children().removeClass("selection")
   	$(this).siblings().addClass("selection");
   });

});

