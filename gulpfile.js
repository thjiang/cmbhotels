var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
	gulp.src('index.less')
        .pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 5 versions', 'Android >= 4.0']
        }))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('index.less', ['less']);
});
