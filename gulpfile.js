const fs = require('fs');
const path = require('path');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const rollup = require('gulp-rollup');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const rev = require('gulp-rev');
const minifyHtml = require('gulp-htmlmin');
const through = require('through2');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const assetsInjector = require('gulp-assets-injector')();

const rollupOptions = {
  format: 'iife',
  plugins: [
    require('rollup-plugin-babel')({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-commonjs')({
      include: 'node_modules/**',
    }),
  ],
  allowRealFiles: true,
};

const DIST = 'dist';
const isProd = process.env.NODE_ENV === 'production';

gulp.task('clean', () => del(DIST));

gulp.task('scss', () => {
  let outputStyle = isProd ? 'compressed' : 'expanded';
  let stream = gulp.src('src/scss/index.scss')
    .pipe(sass({outputStyle}))
    .on('error', sass.logError);
  if (isProd) {
    stream = stream
    .pipe(postcss([
      autoprefixer(),
      isProd && cssnano(),
    ]));
  }
  stream = stream
    .pipe(rename('styles.css'))
    // .pipe(gulp.dest('src/assets'))
    .pipe(gulp.dest(DIST + '/assets'));
  if (!isProd) {
    stream = stream
      .pipe(browserSync.stream());
  }
  return stream;
});

gulp.task('js', () => {
  let stream = gulp.src('src/app.js');
  if (isProd) {
    stream = stream
      .pipe(rollup(Object.assign({
        input: 'src/app.js',
      }, rollupOptions)))
      .pipe(uglify());
  }
  stream = stream
    .pipe(gulp.dest(DIST + '/assets'));
    // .pipe(gulp.dest('src/assets'));
  if (!isProd) stream = stream
    .pipe(browserSync.stream());
  return stream;
});

gulp.task('pug', () => {
  let pretty = !isProd;
  let stream = gulp.src('src/templates/index.pug')
    .pipe(pug({pretty}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('src/'))
    .on('error', notify.onError( (error) => {
      return `pug went wrong, ${error}`; 
    }));
  if (isProd) {
    stream = stream
      .pipe(minifyHtml({
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
      }));
  }
  else {
    stream.pipe(browserSync.stream())
  }
  return stream
    .pipe(gulp.dest(DIST));
});

gulp.task('copy', () => {
  return gulp.src([
    'src/assets/**',
  ], {base: 'src'})
    .pipe(gulp.dest(DIST));
});

gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['pug', 'scss', 'js', 'copy'], () => {
  gulp.watch('src/**/*.scss', ['scss']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.pug', ['pug']);
});

gulp.task('browser-sync', ['default'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: DIST,
    },
  });
});

gulp.task('build', ['pug', 'scss', 'js', 'copy']);
