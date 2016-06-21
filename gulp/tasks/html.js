var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
    return gulp.src('./app/main.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(global.destFolder))
});
