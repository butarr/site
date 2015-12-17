var gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat');

module.exports = function(baseDir){
	return function() {
		return gulp.src('src/js/**/*.js')
			.pipe(plumber())
			.pipe(concat('main.js'))
			.pipe(uglify())
			.pipe(gulp.dest(baseDir+'/js/'));
	}
};
