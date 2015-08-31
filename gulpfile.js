'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    spawn = require('child_process').spawn;

gulp.task('default',function(cb){
  spawn('node_modules/hexo/bin/hexo', ['serve'], { stdio: 'inherit' });
  spawn('gulp', ['--cwd', 'themes/main/'], { stdio: 'inherit' });
});
