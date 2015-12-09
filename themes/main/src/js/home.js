$(document).ready(function() {

  $('#home .gallery-images .images img').click(function(){
    $('#home .gallery-images .images img').removeClass('active');
    $(this).addClass('active');

    var credits = $(this).data('credits');
    var title = $(this).data('title');
    var largeImageURL = $(this).data('large-image');


    $('#home .gallery-images > figure > img')
      .attr('src', largeImageURL)
      .attr('title', credits + ' - '+ title)
      .attr('alt', credits + ' / '+ title);


    $('#home .gallery-images > figure > figcaption .title')
      .text(title);

    $('#home .gallery-images > figure > figcaption .credits')
      .text(credits);

  });
});
