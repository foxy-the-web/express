// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// Backend Task
gulp.task('backend', function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'app.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...')
		);
	})
});

// Frontend Task
gulp.task('frontend', function() {
	// start server
	nodemon({
		script: 'app.js',
		ignore: ['public/js/*.js']
	});

	// listen for changes
	livereload.listen();
	gulp.watch('public/js/*.js').on('change', function(){
		gulp.src('public/js/*.js').pipe(livereload());
	});
});