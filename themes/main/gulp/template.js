var gulp = require('gulp');
var plumber = require('gulp-plumber');

module.exports = function (baseDir) {
    return function() {
      return gulp.src('src/**/*.jade')
			.pipe(plumber())
			.pipe(gulp.dest(baseDir));
    }
};
