'use strict';

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  jscs = require('gulp-jscs');

gulp.task('jshint', function() {
  gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  gulp.src('*.js')
    .pipe(jscs());
});

gulp.task('style', [ 'jshint', 'jscs' ]);

gulp.task('watch', function() {
  gulp.watch('*.js', [ 'style' ]);
});

gulp.task('default', [ 'style', 'watch' ]);