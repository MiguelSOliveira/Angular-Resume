var gulp = require('gulp');

global.bs = require('browser-sync');
global.destFolder = './build';

var reload = global.bs.reload;

gulp.task('default', ['js', 'sass', 'html:watch', 'images', 'sass:watch'], function () {
  bs.init({
    server: {
      baseDir: global.destFolder,
      index: './main.html'
    },
    port: 3000,
    open: false
  });
});

try {
  require('require-dir')('./gulp/tasks', {recurse: true});
} catch (err) {
  console.log(err);
}
