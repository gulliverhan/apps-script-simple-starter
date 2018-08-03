const gulp =  require('gulp');
const exec = require('child_process').exec;

gulp.task('push', function() {
    process.chdir('./apps_script/');
    exec('clasp push');
});

gulp.task('watch',function(){
    gulp.watch([
        '**/*.gs',
        '**/*.html'
    ],['push'])
});

