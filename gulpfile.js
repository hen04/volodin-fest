var gulp = require('gulp'),
	style = require('gulp-sass'),
	jade = require('gulp-jade'),
	autoprefixer = require('gulp-autoprefixer'),
	// sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();

// Jade
gulp.task('jade', function(){
	gulp.src('src/*.jade')
		.pipe(jade({pretty: true}))
		.on('error', console.log)
		.pipe(gulp.dest('build/'))
		.on('end', browserSync.reload);
});

// style
gulp.task('style', function () {
	gulp.src('src/scss/*.scss')
		// .pipe(sourcemaps.init({loadMaps: true}))
		.pipe(style().on('error', style.logError))
		// .pipe(sourcemaps.write('/maps'))
		.pipe(gulp.dest('build/css/'))
		.on('end', browserSync.reload);
});

// autoprefix
gulp.task('autoprefix', function () {
	return gulp.src('css/volodin-fest.css')
		.pipe(autoprefixer('last 3 version', '> 1%', 'ie9'))
		.pipe(gulp.dest('css/'));
});


// webserver
gulp.task('webserver', function () {
	browserSync.init({
		server: {
			baseDir: './build/',
			tunnel: true
		}
	});
});

// Watch
gulp.task('watch', ['webserver'],function(){
	gulp.watch('src/scss/*.scss',['style']);
	gulp.watch('src/*.jade',['jade']);
});
