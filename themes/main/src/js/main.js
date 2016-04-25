$(document).ready(function() {

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    var disapeared = ( top > 120 );
    $('#menu-mobile, .menu-options, .banner-header, .social-media-icons').toggleClass('contracted', disapeared);
  });

  $('#hamburguer').click(function() {
    var toggle_el = $('.menu-options').data('toggle');
    $(toggle_el).addClass('open');
    $(this).addClass('open');
  });

  $('#search-icon').click(function() {
    var toggle_el = $('#search-tool');
    var toggle_content = $('#content');
    if($('#search-icon').hasClass('open')) {
      $(toggle_el).removeClass('open');
      $(toggle_content).removeClass('open-search');
      $(this).removeClass('open');
    } else {
      $(toggle_el).addClass('open');
      $(toggle_content).addClass('open-search');
      $(this).addClass('open');
    }
  });

  $('#close-button').click(function() {
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

  var toggleLastNews = function() {
    var active = $('.last-news#last-news-dynamic li.active');

    var next = active.next();
    if (next.length == 0) {
      next = active.parent().children().first();
    }

    active.removeClass('active');
    active.hide();

    next.addClass('active');
    next.fadeIn('slow');
  }

  $('.last-news#last-news-dynamic li:first').addClass('active').show();
  setInterval(toggleLastNews, 6000);
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.5&appId=123400244719553";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function() {
  var cx = '011963050669547263372:ei7nv4vae54';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
  '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();
