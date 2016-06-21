var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('app/assets/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest(global.destFolder + '/assets'));
});
