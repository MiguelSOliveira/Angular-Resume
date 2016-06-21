var reload = global.bs.reload;
var gulp = require('gulp');

gulp.task('sass:watch', ['sass'], function () {
    function rcss() {
        reload('main.css');
    }
    gulp.watch('./app/styles/**/*.scss', ['sass', rcss]);
});

gulp.task('html:watch', ['html'], function () {
    function rhtml() {
        reload('main.html');
    }
    gulp.watch('./app/main.html', ['html', rhtml]);
});
