var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var stringify = require('stringify');

gulp.task('js', function () {
    var bundler = watchify(browserify({'entries': ['app/scripts/main.js']}));
    bundler.transform(stringify, {
      appliesTo: { includeExtensions: ['.html'] }
    });

    function rebundle() {
        var stream = bundler.bundle();
        return stream
            .pipe(source('bundle.js'))
            // .pipe(buffer())
            // .pipe(uglify())
            .pipe(gulp.dest(global.destFolder + '/scripts'))
            .on('end', function () {
                global.bs.reload();
            });
    }

    bundler.on('update', function() {
        rebundle();
    });
    return rebundle();
});
