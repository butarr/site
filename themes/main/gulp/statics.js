var gulp = require('gulp');
var plumber = require('gulp-plumber');
var YAML = require('js-yaml');
var fs = require('fs');
var path = require('path');
var events = require('events');

//remove warning about max events listeners
events.EventEmitter.prototype._maxListeners = 20;

module.exports = function (baseDir) {
    return function() {
      var doc = YAML.safeLoad(fs.readFileSync(path.normalize(baseDir+'/../../../_config.yml'), 'utf8'));
      var sourceDir = doc.source_dir;
      if(!path.isAbsolute(sourceDir)) {
        sourceDir = path.normalize(baseDir+'/../../../'+sourceDir);
      }
      return gulp.src('src/mds/**/*.md')
                       .pipe(plumber())
                       .pipe(gulp.dest(sourceDir));
    }
};
