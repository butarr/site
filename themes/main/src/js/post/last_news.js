$(document).ready(function() {

  var getLead = function(post){
    var lead = '<a href="//'+post.url+'" class="lead-link" title="Link para a noticia recente">';

    if(!!post.hat){
      '<span class="hat">'+post.hat+'</span>';
    }

    lead += '<h2 class="title">'+post.title+'</h2>';
    lead += '<h3 class="description">'+post.description+'</h3>';

    lead += '</a>';
    return lead;
  };

  var loadLastNews = function(data){
    var html = '';
    var posts  = data;
    if(!!posts){
      return false;
    }

    var title = document.getElementsByClassName('title')[0].innerText || '';

    var posts = posts.filter(function(post) {
      post.title = post.title || '';
      return post.title.toLowerCase() !== title.toLowerCase();
    });

    posts.forEach(function(post){
      var image = '<a href="//'+post.url+'" class="thumbnail-link" title="Link para a noticia recente" >'+
        '<img src="'+post.cover['small']+'" alt="'+post.cover['subtitle']+'"/>'+
        '</a>';


      var section = '<section class="news">' +
        image+
        getLead(post)+
        '</section>';

      html += section;
    });

    $('#last-news').append(html);
  };

  $.getJSON(CONFIG.last_news_address, loadLastNews);
});
