var jsonFiles = function(locals){
  var posts = locals.posts.toArray();

  var first_posts =
    posts.sort(function(a, b){
      return b.updated - a.updated;
    })
    .slice(0, 10 )
    .map(function(element){
      return {
        title: element.title,
        hat:   element.hat,
        description: element.description,
        cover: element.cover,
        place: element.place,
        url: element.permalink,
        date: element.date.format()
      };
    });

  return {
    path: 'json/last-news.json',
    data: JSON.stringify(first_posts)
  };
};

hexo.extend.generator.register('last-news', jsonFiles);
