import gulp from 'gulp';
import changed from 'gulp-changed';

gulp.task('fonts', () => (
	gulp.src('app/fonts/**/*')
		.pipe(changed('dist'))
		.pipe(gulp.dest('dist/assets/fonts'))
));
