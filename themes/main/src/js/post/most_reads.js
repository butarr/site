$(document).ready(function() {

  var load = function(data){
    var posts  = data || [{}];
    var html = '';

    var title = document.getElementsByClassName('title')[0].innerText || '';

    var posts = posts.filter(function(post) {
      return post.title.toLowerCase() !== title.toLowerCase();
    });

    posts.forEach(function(post){
      var li = '<li class="title">' +
                      '<a href="//'+post.url+'" title="Link para a noticia mais lida" >'+
                        '<span>'+post.title+'</span>'+
                      '</a>'+
                    '</li>';

      html += li;
    });

    $('#most-reads nav ol').append(html);
  };

  $.getJSON(CONFIG.last_news_address, load);
});
