$(document).ready(function() {
  $('.menu-options').click(function() {
    var toggle_el = $(this).data('toggle');
    $(toggle_el).toggleClass('open');
    $(this).toggleClass('open');
  });

  if ($('.social-network')[0]) {
    var $window = $(window);
    var $socialNetwork = $('.social-network');
    var $newsletter = $('#newsletter');
    var marginTop = '';

    var newsletterIsVisible = function() {
      return parseInt($newsletter.offset().top) <= parseInt($window.scrollTop() + $window.height() * 1.3);
    }
    $window.scroll(function(){
      if( $window.scrollTop() > 300 ) {
        marginTop = '-100px';
      } else {
        marginTop = '90px';
      }

      console.log(marginTop);
      if (marginTop !== $socialNetwork.css('margin-top')) {
        $socialNetwork.css({
          'margin-top': marginTop
        });
      }

    });

    $window.trigger('scroll');
  }

});
