$(document).ready(function() {

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    var disapeared = ( top > 120 );
    $('.menu-nav, .menu-options, .banner-header').toggleClass('contracted', disapeared);  
  });

  $('.menu-options').click(function() {
    var toggle_el = $(this).data('toggle');
    $(toggle_el).toggleClass('open');
    $(this).toggleClass('open');
    $('#home').toggleClass('mobile-menu-open');
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
