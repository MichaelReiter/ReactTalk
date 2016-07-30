const gulp   = require('gulp');
const babel  = require('gulp-babel');
const stylus = require('gulp-stylus');

const jsSource     = './src/**/*.js';
const stylusSource = './src/**/*.styl';
const assetsSource = './assets/*';
const destination  = './build';

// Build ES6 scripts
gulp.task('js', () => {
  return gulp.src(jsSource)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(destination));
});

// Build Stylus stylesheets
gulp.task('styl', () => {
  return gulp.src(stylusSource)
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(destination));
});

// Copy assets
gulp.task('assets', () => {
  return gulp.src(assetsSource)
    .pipe(gulp.dest(destination));
});

// Build everything and watch for changes
gulp.task('default', [
    'js',
    'styl',
    'assets'
  ], () => {
    gulp.watch(jsSource, ['js']);
    gulp.watch(stylusSource, ['styl']);
    gulp.watch(assetsSource, ['assets']);
  }
);
