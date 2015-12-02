var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

var paths = {
	src: "src/jquery.xgallerify.js",
	dist: "dist/",
}

gulp.task('default', ['watch', 'build']);

gulp.task('build', function() {
  return gulp.src(paths.src)
    .pipe(plumber())
  	.pipe(gulp.dest(paths.dist))
    .pipe(uglify())
    .pipe(rename({
    	suffix: '.min'
	}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['build']);
});

