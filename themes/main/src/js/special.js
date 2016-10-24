$(document).ready(function() {
  $(window).scroll(function(){
    var coverHeight = $('#cover').height();
    var showBar = ($(window).scrollTop() > coverHeight);
    $('#share-special').toggleClass('share-special-visible', showBar);
    $('#share-special').toggleClass('share-special-invisible', !showBar);
  });
});
