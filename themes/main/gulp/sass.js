var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nodeResetScss = require('node-reset-scss').includePath;
var cleanCSS = require('gulp-clean-css');

module.exports =  function (baseDir) {
	return function() {
	  return gulp.src(['src/sass/**/*.scss', '!src/sass/_include/'])
			.pipe(plumber())
	    .pipe(sass({
	        includePaths: [nodeResetScss, 'styles']
	    }).on('error', sass.logError))
			.pipe(concat('main.css'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(baseDir+'/css/'));
	}
};
