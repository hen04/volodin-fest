var gulp = require('gulp'),
	style = require('gulp-sass'),
	jade = require('gulp-jade'),
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
		.pipe(style({outputStyle: 'expanded'}).on('error', style.logError))
		.pipe(gulp.dest('build/'))
		.on('end', browserSync.reload);
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
