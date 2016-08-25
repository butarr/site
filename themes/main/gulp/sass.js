var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nodeResetScss = require('node-reset-scss').includePath;
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-dest-clean');
var gitHashShort = require('child_process').execSync('git rev-parse --short HEAD').toString().trim();

module.exports =  function (baseDir) {
	return function() {
	  return gulp.src(['src/sass/**/*.scss', '!src/sass/_helpers/'])
			.pipe(plumber())
			.pipe(clean(baseDir+'/css/'))
	    .pipe(sass({
	        includePaths: [nodeResetScss, 'styles']
	    }).on('error', sass.logError))
			.pipe(concat('main.'+gitHashShort+'.css'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(baseDir+'/css/'));
	}
};
