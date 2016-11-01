$(document).ready(function() {
  var coverHeight = $('#cover').height();

  $(window).scroll(function(){
    var pastHeader = ($(window).scrollTop() > coverHeight);
    $('#share-special').toggleClass('share-special-top', !pastHeader);
    $('#share-special').toggleClass('share-special-middle', pastHeader);
  });
});

$(window).load(function() {
  var footerTop = $(document).height() - $('#page-footer').height();

  $(window).scroll(function(){
    var windowBottom = $(window).scrollTop() + $(window).height();
    var atBottom = windowBottom > footerTop;
    $('#share-special').toggleClass('share-special-bottom', atBottom);
  });
});
