$(document).ready(function() {

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    if ( top > 120 ){
      $('.banner-header').addClass('smaller-banner');
      $('.menu-options').addClass('smaller-menu');
      $('.menu-nav').addClass('smaller-nav');
    }
    else{
      $('.banner-header').removeClass('smaller-banner');
      $('.menu-options').removeClass('smaller-menu');
      $('.menu-nav').removeClass('smaller-nav');
    }
  });

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
