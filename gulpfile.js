var gulp = require('gulp');
var ts = require('gulp-typescript');
var webpack = require('gulp-webpack');
var tscConfig = require('./tsconfig.json');
var del = require('del');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('clean', function () {
	return del('dist/**/*');
});

gulp.task('compile', ['clean'], function () {
	return gulp.src('./app/*.ts')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./'));

});

gulp.task('watch', ['compile'], function () {
	gulp.watch('app/*.ts', ['compile']);
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("dist/*.js").on("change", reload);
});

gulp.task('build', ['watch']);
gulp.task('default', ['build', 'serve']);