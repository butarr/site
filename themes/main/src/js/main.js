$(document).ready(function() {
  $('.menu-options').click(function() {
    var toggle_el = $(this).data('toggle');
    $(toggle_el).toggleClass('open');
    $(this).toggleClass('open');
  });

  if ($('.social-network')[0]) {
    var $window = $(window);
    var $socialNetwork = $('.social-network');
    var marginTop = '';

    $window.scroll(function(){
      if( $window.scrollTop() > 300 ) {
        marginTop = '-100px';
      } else {
        marginTop = '90px';
      }

      if (marginTop !== $socialNetwork.css('margin-top')) {
        $socialNetwork.css({
          'margin-top': marginTop
        });
      }

    });

    $window.trigger('scroll');
  }

});
