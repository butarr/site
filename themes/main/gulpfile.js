var gulp = require('gulp'),
    baseDir = __dirname +'/source';

var TASKS = [
    'template',
    'sitemap.js',
    'imagemin',
    'javascript',
    'sass',
    'watch'
];

TASKS.forEach(function(name) {
    gulp.task(name, require(__dirname + '/gulp/' + name)(baseDir));
});

gulp.task('default', ['javascript', 'sass', 'imagemin', 'template', 'sitemap', 'watch']);
gulp.task('build', ['javascript', 'sass', 'imagemin', 'template', 'sitemap']);
