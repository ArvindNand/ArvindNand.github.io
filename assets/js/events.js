// on page load
$(document).ready(function() {
  events_sizing();
});

// whenever page is resized
$(window).resize(function() {
  events_sizing();
});

    // --- additional functions ---- //

// dimensions by page size
function events_sizing() {
  if ($(window).width() <= 685) {
    // content shrinks
    $(".box").css("padding", "20px");
    $(".box").css("margin-right", "none");
    $(".box").css("margin-left", "none");
    $("#google-calendar").css("width", "350px");
    $("#google-calendar").css("height", "150px");
    $("#eventimage").css("width", "350px");

    // header shrinks
    $("#head-container").css("width", "300");
    $("#leftsquare").css("width", "25px");
    $("#rightsquare").css("width", "25px");
    $("#date").css("font-size", "20px");
    $("#mlk").css("font-size", "12px");
    $(".icon").css("width", "12px");
    $(".icon").css("height", "12px");
  } else if ($(window).width() <= 815) {
    // content shrinks
    $(".box").css("padding", "30px");
    $(".box").css("margin-right", "none");
    $(".box").css("margin-left", "none");
    $("#google-calendar").css("width", "400px");
    $("#google-calendar").css("height", "200px");
    $("#eventimage").css("width", "400px");

    // header shrinks
    $("#head-container").css("width", "400");
    $("#leftsquare").css("width", "75px");
    $("#rightsquare").css("width", "75px");
    $("#date").css("font-size", "28px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "12px");
    $(".icon").css("height", "12px");
  } else if ($(window).width() <= 1035) {
    // content shrinks
    $(".box").css("padding", "30px");
    $(".box").css("margin-right", "none");
    $(".box").css("margin-left", "none");
    $("#google-calendar").css("width", "500px");
    $("#google-calendar").css("height", "300px");
    $("#eventimage").css("width", "400px");

    // header shrinks
    $("#head-container").css("width", "400");
    $("#leftsquare").css("width", "75px");
    $("#rightsquare").css("width", "75px");
    $("#date").css("font-size", "28px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "12px");
    $(".icon").css("height", "12px");
  } else if ($(window).width() <= 1090) {
    // content shrinks
    $(".box").css("padding", "20px");
    $(".box").css("margin-right", "10px");
    $(".box").css("margin-left", "10px");
    $("#google-calendar").css("width", "700px");
    $("#google-calendar").css("height", "500px");
    $("#eventimage").css("width", "300px");

    // header shrinks
    $("#head-container").css("width", "500");
    $("#leftsquare").css("width", "100px");
    $("#rightsquare").css("width", "100px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "18px");
    $(".icon").css("height", "18px");
  } else if ($(window).width() <= 1270) {
    // content shrinks
    $(".box").css("padding", "30px");
    $(".box").css("margin-right", "10px");
    $(".box").css("margin-left", "10px");
    $("#google-calendar").css("width", "700px");
    $("#google-calendar").css("height", "500px");
    $("#eventimage").css("width", "300px");

    // header shrinks
    $("#head-container").css("width", "500");
    $("#leftsquare").css("width", "100px");
    $("#rightsquare").css("width", "100px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "18px");
    $(".icon").css("height", "18px");
  } else if ($(window).width() <= 1480) {
    // content shrinks
    $(".box").css("padding", "30px");
    $(".box").css("margin-right", "20px");
    $(".box").css("margin-left", "20px");
    $("#google-calendar").css("width", "800px");
    $("#google-calendar").css("height", "600px");
    $("#eventimage").css("width", "400px");

    // header shrinks
    $("#head-container").css("width", "700");
    $("#leftsquare").css("width", "150px");
    $("#rightsquare").css("width", "150px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");
  } else {
    // content shrinks
    $(".box").css("padding", "40px");
    $(".box").css("margin-right", "30px");
    $(".box").css("margin-left", "30px");
    $("#google-calendar").css("width", "900px");
    $("#google-calendar").css("height", "700px");
    $("#eventimage").css("width", "500px");


    // header shrinks
    $("#head-container").css("width", "800");
    $("#leftsquare").css("width", "150px");
    $("#rightsquare").css("width", "150px");
    $("#date").css("font-size", "32px");
    $("#mlk").css("font-size", "16px");
    $(".icon").css("width", "24px");
    $(".icon").css("height", "24px");
  }
}
