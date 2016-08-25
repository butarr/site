var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    hexoDir = __dirname +'/../..'
    baseDir = __dirname +'/source';

var TASKS = [
    'template',
    'copyist',
    'imagemin',
    'javascript',
    'sass',
    'watch'
];

TASKS.forEach(function(name) {
    gulp.task(name, require(__dirname + '/gulp/' + name)(baseDir));
});

gulp.task('build', ['javascript', 'sass', 'imagemin', 'template', 'copyist']);
gulp.task('default', ['build', 'watch'], function() {
  spawn(hexoDir+'/node_modules/hexo/bin/hexo', ['serve', '--cwd', hexoDir], { stdio: 'inherit' });
});
