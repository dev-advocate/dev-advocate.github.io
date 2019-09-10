const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('styles', function() {
    return gulp.src('./assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.scss', gulp.series(['styles']))
});

gulp.task('default', gulp.series(['styles']));