'use strict';

var _ = require('underscore');

var columnists =  function(locals){
  var allColumnists = locals.data.columnists || [];
  var result = [];

  if (_.size(allColumnists) === 0) return;

  function getPostsByColumnist(columnist){
    return locals.posts.find({'columnist': columnist}).sort('-date');
  }

  function generate(columnists){
    _.each(columnists, function(element, index){
      result.push({
          layout: 'columnist',
          path: element.path+'/',
          data: {
            columnist: element,
            posts: getPostsByColumnist(index)
          }
      });
    });
  }

  generate(allColumnists);

  result.push({ layout: 'opinions', path: 'opinioes/'  });


  return result;
};


hexo.extend.generator.register('columnists', columnists);
