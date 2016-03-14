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

  var toggle = function() {
    var element = $('.last-news#side li.active');

    var next = element.next();
    console.log(next, next.length)
    if (next.length == 0) {
      next = element.parent().children().first();
    }

    element.removeClass('active');
    element.addClass('inactive');

    next.removeClass('inactive');
    next.addClass('active');
  }

  $('.last-news#side li:first').addClass('active').removeClass('inactive');
  setInterval(toggle, 6000);
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.5&appId=123400244719553";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
