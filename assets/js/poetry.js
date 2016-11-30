// on page load
$(document).ready(function() {
  video_sizing();
});

// whenever page is resized
$(window).resize(function() {
  video_sizing();
});

    // --- additional functions ---- //

// dimensions by page size
function video_sizing() {
  if ($(window).width() <= 558) {
    $(".vid-frame").css("width", "200");
    $(".vid-frame").css("height", "124");
    $(".title").css("font-size", "12px");
  } else if ($(window).width() <= 710) {
    $(".vid-frame").css("width", "300");
    $(".vid-frame").css("height", "168");
    $(".title").css("font-size", "20px");
  } else if ($(window).width() <= 855) {
    $(".vid-frame").css("width", "400");
    $(".vid-frame").css("height", "220");
    $(".title").css("font-size", "28px");
  } else if ($(window).width() <= 995) {
    $(".vid-frame").css("width", "500");
    $(".vid-frame").css("height", "280");
    $(".title").css("font-size", "32px");
  } else if ($(window).width() <= 1135) {
    $(".vid-frame").css("width", "600");
    $(".vid-frame").css("height", "336");
    $(".title").css("font-size", "32px");
  } else if ($(window).width() <= 1275) {
    $(".vid-frame").css("width", "700");
    $(".vid-frame").css("height", "343");
    $(".title").css("font-size", "32px");
  } else {
    $(".vid-frame").css("width", "800");
    $(".vid-frame").css("height", "500");
    $(".title").css("font-size", "32px");
  }
}
