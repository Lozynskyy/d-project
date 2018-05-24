var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('src/assets/styles/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('built/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'built'
        },
        browser: ["google chrome"],
        notify: false
    });
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('src/assets/styles/**/*.scss', ['sass']);

});

gulp.task('default',['watch']);