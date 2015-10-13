var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
    hexo.call('generate', {'watch': true}).then(function(){
        console.log('Hexo is watching...');
        return hexo.exit();
    });
});