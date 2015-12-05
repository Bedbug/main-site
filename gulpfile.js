var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      // livereload: {
      //  enabled: true,
      // //  filter: function(fileName) {
      // //     if (fileName.match(/.git/)) { // exclude all source maps from livereload 
      // //       return false;
      // //     } else {
      // //       return true;
      // //     }
      // //   }
      // },
       livereload: {
        enable: true,
        filter: function(filePath, cb) {
          cb( !(/.git/.test(filePath)) );
        }
      },
      directoryListing: true,
      open: true
    }));
});