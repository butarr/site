var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {'debug': true});

hexo.init().then(function() {
  hexo.call('generate', {'watch': true})
    .then(function() {
      console.log('Hexo is watching...');
      return hexo.exit();
    }).catch(function(err) {
      console.error('Hexo failed.', err);
      return hexo.exit(err);
    });;
});
