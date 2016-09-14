var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');
var del = require('del');

gulp.task('clean', function(){
		return del('dist/**/*');
});

gulp.task('compile',['clean'], function(){
	var tsresult = gulp.src(tscConfig.files)
				.pipe(sourcemaps.init())
				.pipe(ts(tscConfig.compilerOptions))				
				.pipe(concat('output.js'))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('dist'));
	return tsresult;
});

gulp.task('watch', ['compile'], function(){
	gulp.watch('app/*.ts', ['compile']);
});

gulp.task('build', ['watch']);
gulp.task('default', ['build']);