'use strict';

var gulp = require('gulp'),
    spawnSync = require('child_process').spawnSync;

gulp.task('default', function(cb){
  spawnSync('./node_modules/hexo/bin/hexo', ['clean'], { stdio: 'inherit' });
  spawnSync('gulp', ['--cwd', 'themes/main/'], { stdio: 'inherit' });
});
