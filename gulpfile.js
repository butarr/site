'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('default', function(cb){
  spawn('gulp', ['--cwd', 'themes/main/'], { stdio: 'inherit' });
  spawn('./node_modules/hexo/bin/hexo', ['serve'], { stdio: 'inherit' });
});
