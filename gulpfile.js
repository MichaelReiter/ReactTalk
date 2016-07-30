const gulp   = require('gulp');
const babel  = require('gulp-babel');
const stylus = require('gulp-stylus');

const htmlSource   = './src/html/*.html';
const stylusSource = './src/styles/main.styl';
const jsSource     = './src/js/*.js';
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
    .pipe(stylus())
    .pipe(gulp.dest(destination));
});

// Copy markup
gulp.task('html', () => {
  return gulp.src(htmlSource)
    .pipe(gulp.dest(destination));
});

// Copy assets
gulp.task('assets', () => {
  return gulp.src(assetsSource)
    .pipe(gulp.dest(destination));
});

// Build everything and watch for changes
gulp.task('default', [
    'html',
    'styl',
    'js',
    'assets'
  ], () => {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(stylusSource, ['styl']);
    gulp.watch(assetsSource, ['assets']);
  }
);
