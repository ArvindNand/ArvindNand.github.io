// on page load
$(document).ready(function() {
  stats_sizing();
});

// whenever page is resized
$(window).resize(function() {
  stats_sizing();
});

    // --- additional functions ---- //

// dimensions by page size
function stats_sizing() {
  if ($(window).width() <= 558) {

  } else if ($(window).width() <= 844) {

  } else if ($(window).width() <= 1500) {
    // resize contents
    $("#sheet").css("width", "800px");
    $("#sheet").css("height", "300px");
    $(".sbox").css("margin-left", "0px");
    $(".sbox").css("margin-right", "0px");

    //resize header
    $("#head-container").css("width", "700");
    $("#leftsquare").css("width", "150px");
    $("#rightsquare").css("width", "150px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");
  } else {
    //resize contents
    $("#sheet").css("width", "1000px");
    $("#sheet").css("height", "420px");
    $(".sbox").css("margin-left", "5%");
    $(".sbox").css("margin-right", "5%");

    // resize header
    $("#head-container").css("width", "800");
    $("#leftsquare").css("width", "150px");
    $("#rightsquare").css("width", "150px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");

  }
}
