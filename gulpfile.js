/* eslint-disable no-invalid-this, no-console,no-unused-vars */
const gulp = require('gulp');
const exec = require('child_process').exec;
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return (
    gulp
      .src(['apps_script/*.js'])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError())
  );
});

gulp.task('push', function(cb) {
  exec('clasp push', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('open', function(cb) {
  exec('clasp open', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', function() {
  gulp.watch(['**/*.gs', '**/*.html'], ['push']);
});
