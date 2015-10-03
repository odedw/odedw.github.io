var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');


gulp.task('less', function () {
  return gulp.src('styles/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('styles/css'));
});

gulp.task('bundle-css', ['less'], function() {
 return gulp.src([
 'styles/css/poole.css',
 'styles/css/lanyon.css',
 'styles/css/syntax.css',
 'styles/css/site.css'
])
   .pipe(concat('styles.min.css'))
   .pipe(minifyCss())
   .pipe(gulp.dest('./public/css'));
});

gulp.task('bundle-js', function() {
  return gulp.src('scripts/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
   gulp.watch('styles/less/*.less', ['bundle-css']);
   gulp.watch('scripts/*.js', ['bundle-js']);

});

gulp.task('default', ['bundle-css', 'bundle-js', 'watch']);
