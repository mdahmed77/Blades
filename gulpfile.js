const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define the 'sass' task
gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

// Define the 'sass:watch' task
gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
});