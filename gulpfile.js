var gulp    = require('gulp');
var nodemon = require('gulp-nodemon')
var rename  = require('gulp-rename');
var sass    = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src(['./public/sass/*.scss'])
      .pipe(sass({includePaths: ['./public/sass'], errLogToConsole: true}))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function() {
  nodemon({ script: 'app.js', ext: 'scss' })
    .on('change', ['sass']);
});