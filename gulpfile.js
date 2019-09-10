const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('styles', function() {
    return gulp.src('./assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('scripts', function() {
    return gulp.src('./assets/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.scss', gulp.series(['styles']))
});

gulp.task('default', gulp.series(['styles', 'scripts']));