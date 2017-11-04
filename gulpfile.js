const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cssmin = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');

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

gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
});
