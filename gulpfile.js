var gulp        = require('gulp');
var usemin      = require('gulp-usemin');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var html2js     = require('gulp-html2js');
var jshint      = require('gulp-jshint');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');

gulp.task('images', function() {
    gulp.src(['assets/images/**/*']).pipe(gulp.dest('build/img'));
});

gulp.task('usemin', function() {
    gulp.src('index.html').pipe(usemin()).pipe(gulp.dest('build'));
});

gulp.task('scripts', ['usemin'], function() {
    return gulp.src(['assets/js/*.js']).pipe(rename({suffix: '.min'})).pipe(uglify()).pipe(gulp.dest('build/js'));
});

gulp.task('default', ['images', 'scripts']);