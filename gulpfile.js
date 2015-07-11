var gulp = require('gulp');
var connect = require('gulp-connect');
var typescript = require('gulp-typescript');

// Html task
gulp.task('html', function() {
  gulp.src('app/**/*.html')
    .pipe(connect.reload());
});

// JS task
gulp.task('ts', function() {
  var project = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  var result = project.src()
    .pipe(typescript(project));
  return result.js.pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

// Watch our changes
gulp.task('watch', function(){
  //html
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['app/**/*.ts'], ['ts']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    root: 'app'
  });
});

// Start the tasks
gulp.task('default', ['connect', 'ts', 'watch']);
