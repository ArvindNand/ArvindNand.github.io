// on page load
$(document).ready(function() {
  head_sizing();
});

// whenever page is resized
$(window).resize(function() {
  head_sizing();
});

    // --- additional functions ---- //

// dimensions by page size
function head_sizing() {
  if ($(window).width() <= 558) {
    $("#head-container").css("width", "200");
    $("#leftsquare").css("width", "12.5px");
    $("#rightsquare").css("width", "12.5px");
    $("#date").css("font-size", "16px");
    $("#mlk").css("font-size", "8px");
    $(".icon").css("width", "12px");
    $(".icon").css("height", "12px");
  } else if ($(window).width() <= 710) {
    $("#head-container").css("width", "300");
    $("#leftsquare").css("width", "25px");
    $("#rightsquare").css("width", "25px");
    $("#date").css("font-size", "20px");
    $("#mlk").css("font-size", "12px");
    $(".icon").css("width", "12px");
    $(".icon").css("height", "12px");
  } else if ($(window).width() <= 855) {
    $("#head-container").css("width", "400");
    $("#leftsquare").css("width", "75px");
    $("#rightsquare").css("width", "75px");
    $("#date").css("font-size", "28px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "12px");
    $(".icon").css("height", "12px");
  } else if ($(window).width() <= 995) {
    $("#head-container").css("width", "500");
    $("#leftsquare").css("width", "100px");
    $("#rightsquare").css("width", "100px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "18px");
    $(".icon").css("height", "18px");
  } else if ($(window).width() <= 1135) {
    $("#head-container").css("width", "600");
    $("#leftsquare").css("width", "125px");
    $("#rightsquare").css("width", "125px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");
  } else if ($(window).width() <= 1275) {
    $("#head-container").css("width", "700");
    $("#leftsquare").css("width", "150px");
    $("#rightsquare").css("width", "150px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");
  } else {
    $("#head-container").css("width", "800");
    $("#leftsquare").css("width", "150px");
    $("#rightsquare").css("width", "150px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");
  }
}
