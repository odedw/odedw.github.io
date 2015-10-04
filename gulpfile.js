var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var es = require('event-stream');

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
   .pipe(gulp.dest('build/public/css'));
});

var scriptSources = 'scripts/*.js';
gulp.task('bundle-js', function() {
  return gulp.src(scriptSources)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/public/js'));
});

var staticContent = ['static/**'];
var jekyllContent = ['_data/*'];
var htmlSources = ['*.html', '**/*.html','!node_modules/**','!_site/**', '!build/**'];
var otherFiles = ['favicon.ico'];
gulp.task('copy-static', function() {
  return es.merge(
    gulp.src(staticContent).pipe(gulp.dest('build/public')),
    gulp.src(jekyllContent).pipe(gulp.dest('build/_data')),
    gulp.src(htmlSources).pipe(gulp.dest('build')),
    gulp.src(otherFiles).pipe(gulp.dest('build'))
  );
});

gulp.task('watch', function () {
   gulp.watch(lessSources, ['bundle-css']);
   gulp.watch(scriptSources, ['bundle-js']);
   gulp.watch(staticContent.concat(jekyllContent).concat(htmlSources).concat(otherFiles), ['copy-static']);
});

gulp.task('default', ['bundle-css', 'bundle-js', 'copy-static', 'watch']);
