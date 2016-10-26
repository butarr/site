$(document).ready(function() {
  $(window).scroll(function(){
    var coverHeight = $('#cover').height();
    var footerTop = document.documentElement.scrollHeight - $('#page-footer').height();

    var pastHeader = ($(window).scrollTop() > coverHeight);
    $('#share-special').toggleClass('share-special-top', !pastHeader);
    $('#share-special').toggleClass('share-special-middle', pastHeader);

    var windowBottom = $(window).scrollTop()  + $(window).height();
    if(windowBottom > footerTop) {
      $('#share-special').toggleClass('share-special-bottom', true);
    } else if(windowBottom < (footerTop-64)) {
      $('#share-special').toggleClass('share-special-bottom', false);
    }
  });
});
