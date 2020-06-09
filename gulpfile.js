const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const server = require('browser-sync').create();
const prefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const {series} = require('gulp');


function Sass(){
    return gulp.src(['scss/style.scss'],{base:"scss"})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'))
        .pipe(server.reload({stream:true}))
}

function Server(){
    server.init({server:"./",browser:'chrome'});
    gulp.watch('scss/**/*.scss',gulp.series(Sass))
}

exports.start = series(Sass,Server);