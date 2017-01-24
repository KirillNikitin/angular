// Various helper modules
var gulp = require("gulp");
var webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  return gulp.src('.')							// root
    .pipe(webserver({
      livereload: true,							// livereload
      directoryListing: true,
      open: "http://localhost:8000/index.html"	// index.html
    }));
});

// The default task is 'webserver'
gulp.task("default", ["webserver"]);