$(document).ready(function() {

  var activeImage = function(imageElement){
    $('#home .gallery-images .images img').removeClass('active');
    $(imageElement).addClass('active');

    var credits = $(imageElement).data('credits');
    var title = $(imageElement).data('title');
    var largeImageURL = $(imageElement).data('large-image');


    $('#home .gallery-images > figure > img')
      .attr('src', largeImageURL)
      .attr('title', credits + ' - '+ title)
      .attr('alt', credits + ' / '+ title);


    $('#home .gallery-images > figure > figcaption .title')
      .text(title);

    $('#home .gallery-images > figure > figcaption .credits')
      .text(credits);
  };

  var navigationOnImages = function(direction){
    var active = $('#home .gallery-images .images .slider img.active');

    var toSelect = active.prev()[0];
    if(direction > 0 )
        toSelect = active.next()[0];


    if(!!toSelect){
      activeImage(toSelect);
      toSelect.scrollIntoView();
    }
  };

  $('#home .gallery-images .images img').click(function(){
    activeImage(this);
  });

  $('#home .gallery-images .images .arrow.left').click(function(){
    navigationOnImages(-1);
  });

  $('#home .gallery-images .images .arrow.right').click(function(){
    navigationOnImages(1);
  });
});
