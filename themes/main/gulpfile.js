var gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
  sass        = require('gulp-sass'),
  bourbon     = require('node-bourbon').includePaths,
  optipng     = require('imagemin-optipng'),
  jpegtran    = require('imagemin-jpegtran'),
  imagemin    = require('gulp-imagemin');

var baseDir = 'source';


gulp.task('sass', function () {
  return gulp.src(['src/sass/**/*.scss', '!src/sass/_include/'])
		.pipe(plumber())
    .pipe(sass({
        includePaths: ['styles'].concat(bourbon)
    }).on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(gulp.dest(baseDir+'/css/'));
});

gulp.task('js', function(){
	return gulp.src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(baseDir+'/js/'))
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [optipng(), jpegtran()]
    }))
		.pipe(gulp.dest(baseDir+'/img/'));
});

gulp.task('watch', function () {
	gulp.watch('src/js/**/*.js', ['js'])
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin'])
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass', 'imagemin', 'watch']);
gulp.task('build', ['js', 'sass', 'imagemin']);
