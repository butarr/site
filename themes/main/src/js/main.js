$(document).ready(function() {

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    var disapeared = ( top > 120 );
    $('.menu-nav, .menu-options, .banner-header').toggleClass('contracted', disapeared);  
  });

  $('#hamburguer').click(function() {
    var toggle_el = $('.menu-options').data('toggle');
    $(toggle_el).addClass('open');
    $(this).addClass('open');
  });

  $('#close-bttn').click(function() {
    var toggle_el = $('.menu-options').data('toggle');
    $(toggle_el).removeClass('open');
    $(this).removeClass('open');
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
