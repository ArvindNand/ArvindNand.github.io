// on page load
$(document).ready(function() {

  //show nothing
  $("body").css("opacity", "0");
  $("body").css("top", "4%");
  $("#menu").css("opacity", "1");

  // page exit animations
  $("a").click(function() {
    event.preventDefault();
    next_page = this.href;
    if (next_page != window.location.href) {
      $("#head-container").slideUp(1000);
      $("body").fadeOut(1000, load);
    }
	} );

});

// after page finishes loading
$(window).on("load", function() {

  // page entrance animations
  $("body").animate({ opacity: 1 }, { duration: 1000, queue: false });
  $("body").animate({ top: 0 }, { duration: 1000, queue: false });

});


      // --- additional functions ---- //

// load new page
function load() {
  window.location = next_page
}
