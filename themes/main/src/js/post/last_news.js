$(document).ready(function() {

  var loadLastNews = function(data){
    var posts  = data || [{}];
    var html = '';

    var title = document.getElementsByClassName('title')[0].innerText || '';

    var posts = posts.filter(function(post) {
      return post.title.toLowerCase() !== title.toLowerCase();
    });

    posts.forEach(function(post){
      var section = '<section class="news">' +
                      '<a href="//'+post.url+'" class="thumbnail-link" title="Link para a noticia recente" >'+
                        '<img src="'+post.cover['small']+'" alt="'+post.cover['subtitle']+'"/>'+
                      '</a>'+
                      '<a href="//'+post.url+'" class="lead-link" title="Link para a noticia recente">'+
                        '<span class="hat">'+post.hat+'</span>'+
                        '<h2 class="description">'+post.title+'</h2>'+
                      '</a>'+
                    '</section>';


      html += section;
    });

    $('#last-news').append(html);
  };

  $.getJSON(CONFIG.last_news_address, loadLastNews);
});
