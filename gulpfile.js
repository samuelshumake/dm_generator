const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css')
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/style.min.css'));
});

gulp.task('clean', () => {
    return del([
        'dist/style.min.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('src/scss/', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});