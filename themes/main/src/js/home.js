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

  var disableArrows = function(toSelect, direction){
    $('#home .gallery-images .images').removeClass('disable-left-arrow','disable-right-arrow')

    if(direction > 0){
      $('#home .gallery-images .images').addClass('disable-left-arrow');
    }else {
      $('#home .gallery-images .images').addClass('disable-right-arrow');
    }
  };

  var navigationOnImages = function(direction){
    var active = $('#home .gallery-images .images .slider img.active');

    var toSelect = active.prev()[0];
    if(direction > 0 ){
        toSelect = active.next()[0];
    }

    if(!!toSelect){
      activeImage(toSelect);
      toSelect.scrollIntoView();
    }
  };

  $('#home .gallery-images .images img').click(function(){
    activeImage(this);
  });

  $('#home .gallery-images .images').click(function(event){
    if (event.target !== this){
      return;
    }
    var POSITION_START_RIGHT_PSEUDO_ARROW = 300;
    var POSITION_END_LEFT_PSEUDO_ARROW    = 40;

    var posX = $(this).position().left,
        posY = $(this).position().top;

    var mousePositionRelativeToSectionX = (event.pageX - posX);

    if( mousePositionRelativeToSectionX > POSITION_START_RIGHT_PSEUDO_ARROW){
      navigationOnImages(1);
    }else if( mousePositionRelativeToSectionX < POSITION_END_LEFT_PSEUDO_ARROW ){
      navigationOnImages(-1);
    }
  });
});
