// delay arrow animation by 5 seconds
$(window).on("load", function() {
    window.setTimeout(point, 5000 );
});

// arrow disappears once page scrolls down
$("#page-wrapper").scroll(function() {
  if ($("#page-wrapper").scrollTop() > 1) {
    $("#down").animate({ "opacity": "0", "bottom": "0%"  }, { duration: 1500});
  }

});


      // --- additional functions ---- //

// arrow functions

function point() {
  var i = 3;
  while (i > 0 && $("#page-wrapper").scrollTop() <= 1) {
    $("#down").animate({ "opacity": "1" ,"bottom": "3%"}, { duration: 1500});
    $("#down").animate({ "opacity": "0", "bottom": "0%" }, { duration: 1500});
    i--;
  }
  $("#down").animate({ "opacity": "1", "bottom": "0%" }, { duration: 1500});

}
