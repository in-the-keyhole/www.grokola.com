var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    jshint  = require('gulp-jshint'),
    concat  = require('gulp-concat'),
    del     = require('del'),
    cleanCss  = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sass    = require('gulp-sass'),
    rename  = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    source  = require('vinyl-source-stream');

var browserSync = require('browser-sync').create();

var options = {
  src: 'src',
  dist: 'dist',
  port: 9000
};

//Task for compliing scss to css and minify
gulp.task('sass', function(){
    return gulp.src(options.src + '/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    //.pipe(cleanCss())
    .pipe(rename('main.css'))
    .pipe(gulp.dest(options.src + '/css'))
    //.pipe(gulp.dest(options.dist + '/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(livereload());
});

gulp.task('js', function(){
  return gulp.src(options.src + '/js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  //.pipe(sourcemaps.init())
  //.pipe(uglify())
  //.pipe(concat('bundle.js'))
  //.pipe(rename('bundle.js'))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest(options.src + '/js'))
  //.pipe(gulp.dest(options.dist + '/js'))
  .pipe(browserSync.reload({stream: true}))
  .pipe(livereload());
});

gulp.task('html', function(){
    return gulp.src(options.src + '/**/*.html')
    .pipe(gulp.dest(options.dist))
    .pipe(livereload());
});

gulp.task('images', function(){
    return gulp.src(options.src + '/images/**/*')
    //.pipe(gulp.dest(options.dist + '/images'))
    .pipe(livereload());
});

gulp.task('browser-sync', function(){
  var files = [
    'src/**/*.html',
    'src/scss/**/*.scss',
    'src/js/**/*.js'
  ];

  browserSync.init(files, {
    server: options.src,
    port: options.port
  });
});

gulp.task('watch', function(){
  gulp.watch('gulpfile.js');
  gulp.watch(options.src + '/scss/**/*.scss', ['sass']);
  gulp.watch(options.src + '/js/**/*.js', ['js']);
  gulp.watch(options.src + '/**/*.html', ['html']);
  gulp.watch(options.src + '/images/**/*', ['images']);
  livereload.listen();
  //gulp.watch([options.src + '/**']).on('change', livereload.change());
});

gulp.task('clean', function(){
  //return del([options.dist], {dot: true});
});

gulp.task('serve', ['watch']);

gulp.task('default', ['clean', 'browser-sync', 'sass', 'js', 'images', 'html', 'serve'], function(){
  gulp.start();
});
