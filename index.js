var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {'debug': true});

hexo.init()
  .then(function() {
    hexo.call('generate', {'watch': true})
      .then(function() {
        return hexo.exit();
      })
      .catch(function(err) {
        console.error('Hexo generate failed.', err);
        return hexo.exit(err);
      });
  })
  .catch(function(err) {
    console.error('Hexo init failed.', err);
    return hexo.exit(err);
  });
