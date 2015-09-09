var gulp      = require('gulp'),
	plumber     = require('gulp-plumber'),
  sass        = require('gulp-sass'),
	concat      = require('gulp-concat'),
  bourbon     = require('node-bourbon').includePaths;

module.exports =  function (baseDir) {
	return function() {
	  return gulp.src(['src/sass/**/*.scss', '!src/sass/_include/'])
			.pipe(plumber())
	    .pipe(sass({
	        includePaths: ['styles'].concat(bourbon)
	    }).on('error', sass.logError))
			.pipe(concat('main.css'))
			.pipe(gulp.dest(baseDir+'/css/'));
	}
};
