var gulp = require('gulp');

module.exports = function () {
	return function() {
		gulp.watch('src/js/**/*.js', ['javascript'])
	  gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin'])
	  gulp.watch('src/sass/**/*.scss', ['sass']);
		gulp.watch('src/mds/**/*.md', ['statics']);
	}
};
