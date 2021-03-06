var gulp    = require('gulp');
var concat  = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var rename  = require('gulp-rename');
var sass    = require('gulp-sass');
var routing = {
  src: '../continu-app/public/sass'
}

gulp.task('js', function() {
  gulp.src(['./public/js/libs/angular.min.js',
            './public/js/libs/angular-route.min.js',
            './public/js/libs/jquery.min.js',
            './public/js/libs/ss-symbolicons.js',
            './public/js/app.js',
            './public/js/controllers.js'])
      .pipe(concat('styleguide.min.js'))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function () {
    gulp.src(['./public/sass/*.scss'])
        .pipe(sass({includePaths: ['./public/sass'], errLogToConsole: true}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css'));
  });

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development'){
    
  gulp.task('default', ['js']);

} else {

  gulp.task('default', ['js', 'sass'], function() {
    nodemon({ script: 'app.js', ext: 'js scss' })
      .on('change', ['js', 'sass']);
  });

}


