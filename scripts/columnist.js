'use strict';

var _ = require('underscore');
var util = require('hexo-util');
var slugize = util.slugize;


var columnists =  function(locals){
  var allColumnists = locals.data.columnists || [];
  var result = [];

  if (_.size(allColumnists) === 0) return;

  function getPostsByColumnist(columnist){
    return locals.posts.find({'columnist': columnist});
  }

  function generate(columnists){
    _.each(columnists, function(element, index){
      result.push({
          layout: 'columnist',
          path: slugize(element.name, {transform: 1})+'/',
          data: {
            columnist: element,
            posts: getPostsByColumnist(index)
          }
      });
    });
  }

  generate(allColumnists);


  return result;
};


hexo.extend.generator.register('columnists', columnists);