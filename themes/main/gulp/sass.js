var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nodeResetScss = require('node-reset-scss').includePath;
var cleanCSS = require('gulp-clean-css');
var rev = require('gulp-rev');

module.exports =  function (baseDir) {
	return function() {
	  return gulp.src(['src/sass/**/*.scss', '!src/sass/_helpers/'])
			.pipe(plumber())
	    .pipe(sass({
	        includePaths: [nodeResetScss, 'styles']
	    }).on('error', sass.logError))
      .pipe(concat('main.css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rev())
      .pipe(gulp.dest(baseDir+'/css/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest(baseDir+'/css/'));
	}
};
