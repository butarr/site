'use strict';

const http = require('http');
const notifyValimate = require('valimate-notifier');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  hexo.call('generate',{}).then(function(){
    hexo.call('serve',{}).then(function() {
       notifyValimate(true);
    });
  });
}).catch(e => {
  console.log(e);
  notifyValimate(false);
});
