var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass',  function () {
    return gulp.src('./app/styles/**/*.scss')
        .pipe(sass())
        .pipe(cleancss())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(global.destFolder + '/styles'));
});
