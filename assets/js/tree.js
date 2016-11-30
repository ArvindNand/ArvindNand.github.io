// on page load
$(document).ready(function() {
  tree_sizing();
});

// whenever page is resized
$(window).resize(function() {
  tree_sizing();
});

    // --- additional functions ---- //

// dimensions by page size
function tree_sizing() {
  if ($(window).width() >= 1350) {
    $("#tree").css("width", "1350px");
  } else {
    var width = String($(window).width()) + "px";
    $("#tree").css("width", width);
  }


}
