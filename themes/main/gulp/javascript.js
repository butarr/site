var gulp      = require('gulp'),
	plumber     = require('gulp-plumber'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat');
  rev         = require('gulp-rev');

module.exports = function(baseDir){
  return function() {
    return gulp.src('src/js/**/*.js')
      .pipe(plumber())
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(rev())
      .pipe(gulp.dest(baseDir+'/js/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest(baseDir+'/js/'));
  }
};
