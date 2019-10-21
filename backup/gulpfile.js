var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var es = require('event-stream');
// var browserSync = require('browser-sync').create();

// Static server
// gulp.task('browser-sync', ['refresh-css'], function() {
//     browserSync.init({
//         server: {
//             baseDir: "./_site"
//         }
//       });
//
//         // gulp.watch("_site/**/*.html").on('change', browserSync.reload);
//         gulp.watch("_site/public/**/*.css", ['refresh-css']);
// });

gulp.task('refresh-css', function() {
    return gulp.src("_site/public/**/*.css")
        .pipe(browserSync.stream());
});

var lessSources = 'styles/less/*.less';
gulp.task('less', function () {
  return gulp.src(lessSources)
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
   .pipe(gulp.dest('public/css'));
});

var scriptSources = 'scripts/*.js';
gulp.task('bundle-js', function() {
  return gulp.src(scriptSources)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

var staticContent = ['static/**'];
// var jekyllContent = ['_data/*'];
// var htmlSources = ['*.html', '**/*.html','!node_modules/**','!_site/**', '!build/**'];
// var otherFiles = ['favicon.ico'];
gulp.task('copy-static', function() {
    return gulp.src(staticContent).pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
   gulp.watch(lessSources, ['bundle-css']);
   gulp.watch(scriptSources, ['bundle-js']);
   gulp.watch(staticContent, ['copy-static']);
});

gulp.task('default', ['bundle-css', 'bundle-js', 'copy-static', 'watch']);
