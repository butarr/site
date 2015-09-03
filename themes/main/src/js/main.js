$(document).ready(function() {
  $('.menu-options').click(function() {
    var toggle_el = $(this).data('toggle');
    $(toggle_el).toggleClass('open');
    $(this).toggleClass('open');
  });

  if ($('.social-network')[0]) {
    $(window).scroll(function(){
      if( $(window).scrollTop() > 40) {
        $('.social-network').css('margin-top', '-180px');
      } else {
        $('.social-network').css('margin-top', '90px');
      }
    });
    
    $(window).trigger('scroll');
  }

});
