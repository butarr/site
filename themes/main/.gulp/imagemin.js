var gulp      = require('gulp'),
	plumber     = require('gulp-plumber'),
	optipng     = require('imagemin-optipng'),
	jpegtran    = require('imagemin-jpegtran'),
	imagemin    = require('gulp-imagemin'),
	gzip        = require('gulp-gzip');

module.exports = function(baseDir) {
	return function() {
		return gulp.src('src/img/**/*.{jpg,png,gif}')
			.pipe(plumber())
	    .pipe(imagemin({
	      progressive: true,
	      svgoPlugins: [{removeViewBox: false}],
	      use: [optipng(), jpegtran()]
	    }))
			.pipe(gzip())
			.pipe(gulp.dest(baseDir+'/img/'));

	}
};
