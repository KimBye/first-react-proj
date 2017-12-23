'use strict';

// dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

/////////////////////////////////////////////////////
///////////        CSS/CSS      ///////////////
/////////////////////////////////////////////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// compile SCSS
gulp.task('compile:scss', function(){
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS().on('error', function(err){
    gutil.log(gutil.colors.red('[Error]'),err.toString());
  }))
  .pipe(rename( {suffix: '.min'} ))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));

});

/*gulp.task('compile:scss', function () {
  return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(SCSS_DEST));
});*/

// detect changes in SCSS
gulp.task('sass:watch', function () {
  gulp.watch(SCSS_SRC, ['compile:scss']);
});

// run tasks
gulp.task('default',['sass:watch']);
