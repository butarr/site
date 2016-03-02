var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var bourbon = require('node-bourbon').includePaths;
var nodeResetScss = require('node-reset-scss').includePath;

module.exports =  function (baseDir) {
	return function() {
	  return gulp.src(['src/sass/**/*.scss', '!src/sass/_include/'])
			.pipe(plumber())
	    .pipe(sass({
	        includePaths: [nodeResetScss, 'styles'].concat(bourbon)
	    }).on('error', sass.logError))
			.pipe(concat('main.css'))
			.pipe(gulp.dest(baseDir+'/css/'));
	}
};
