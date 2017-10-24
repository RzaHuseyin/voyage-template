const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed =require('gulp-changed')
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const svgmin = require('gulp-svgmin');
const autoprefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
       server: {
          baseDir: 'dist'
       },
    })
 })
 gulp.task('clean:dist',function(){
     return del.sync('dist')
 })

/*
    --Top level functiom
        gulp.task - define tasks 
        gulp.src - point trofilesto use 
        gulp.does - Points to folder to output
        gulp.qatch --watch files and folders for changes


*/ 
gulp.task('message',function(){
    return console.log('Gulp is running...');
});

gulp.task('copyHtml',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})
// optimize images
gulp.task('imageMin', () =>
gulp.src('src/image/**/*')
    // .pipe(changed('dist/image'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image'))
);

gulp.task('styles', function() {
    gulp.src(['src/css/*.css'])
    .pipe(concat('main1.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
     }))
 });

 // comple sass
 gulp.task('sass',function () {
     gulp.src('src/sass/*.scss')
        .pipe(concat('main.css'))
        .pipe(sass().on('error',sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
 })
//  minify js
gulp.task('minify',function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('scripts',function () {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default',['browserSync','message','copyHtml','imageMin','sass','styles','scripts'],

function(){
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/images/*',['imageMin']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/*.html',['copyHtml']);
})   