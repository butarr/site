var gulp = require('gulp');
var plumber = require('gulp-plumber');
var YAML = require('js-yaml');
var fs = require('fs');

module.exports = function (baseDir) {
    return function() {
      var doc = YAML.safeLoad(fs.readFileSync(baseDir+'/../../../_config.yml', 'utf8'));
      var sourceDir = doc.source_dir;
      if(!sourceDir.startsWith("/")) {
        sourceDir = baseDir+'/../../../'+sourceDir;
      }
      return gulp.src('src/mds/**/*.md')
                       .pipe(plumber())
                       .pipe(gulp.dest(sourceDir));
    }
};
