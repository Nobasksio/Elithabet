const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

gulp.task('build', () => {
  gulp.scr('hello.js')
  .pipe(babel())
  .pipe(gulp.dest('./build'))
});
