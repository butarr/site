'use strict';

var _ = require('underscore');
var util = require('hexo-util');
var slugize = util.slugize;


var columnists =  function(locals){
  var config = this.config;
  var archiveDir = config.archive_dir;
  var allColumnists = locals.data.columnists || [];
  var result = [];

  if (_.size(allColumnists) === 0) return;

  function generate(columnists){
    _.each(columnists, function(element){
      console.log();
      result.push({
          layout: 'columnist',
          path: slugize(element.name, {transform: 1})+'/',
          data: {
            columnist: element,
            posts: [1,2,3]
          }
      });
    });
  }

  generate(allColumnists);


  return result;
};


hexo.extend.generator.register('columnists', columnists);