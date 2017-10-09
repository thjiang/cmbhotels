var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
	gulp.src('styles/*.less')
        .pipe(less())
		.pipe(cssmin())
		.pipe(concat('index.css'))
		.pipe(autoprefixer({
            browsers: ['last 5 versions', 'Android >= 4.0']
        }))
        .pipe(gulp.dest('styles'));
});

gulp.task('watch', function () {
    gulp.watch('index.less', ['less']);
});
