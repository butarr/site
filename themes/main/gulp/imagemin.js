var gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	optipng     = require('imagemin-optipng'),
	jpegtran    = require('imagemin-jpegtran'),
	imagemin    = require('gulp-imagemin');

module.exports = function(baseDir) {
	return function() {
		return gulp.src('src/img/**/*.{jpg,png,gif,ico}')
			.pipe(plumber())
	    .pipe(imagemin({
	      progressive: true,
	      svgoPlugins: [{removeViewBox: false}],
	      use: [optipng(), jpegtran()]
	    }))
			.pipe(gulp.dest(baseDir+'/img/'));

	}
};
