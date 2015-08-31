$(document).ready(function() {
  $(".menu-options").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open");
    $(this).toggleClass("open");
  });
});
