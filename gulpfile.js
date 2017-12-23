'use strict';

// dependencies
/*
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

/////////////////////////////////////////////////////
///////////        CSS/CSS      ///////////////
/////////////////////////////////////////////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// compile SCSS
/*
gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .on('error',function(err){ gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(rename( {suffix: '.min'} ))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));

});
*/

gulp.task('sass', function () {
  return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(SCSS_DEST));
});

// detect changes in SCSS
/*
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});
*/

gulp.task('sass:watch', function () {
  gulp.watch(SCSS_SRC, ['sass']);
});

// run tasks
/*gulp.task('default', ['watch_scss']);*/

gulp.task('default',['sass:watch']);
