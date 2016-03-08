var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver',function(){
    gulp.src('')
	.pipe(webserver({
		port: 8080,
		host: '0.0.0.0',
	    reload: false,
	    open: false
	}));
});

gulp.task('default', function(){
    gulp.run('webserver');
});
