const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const server = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const {series} = require('gulp');
const imgMin = require('gulp-imagemin');
const svgMin = require('gulp-svgmin');
const minJS  = require('gulp-uglify');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');



function Sass(){
    return gulp.src(['src/scss/style.scss'],{base:"scss"})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
            ]))
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(server.reload({stream:true}))
}

function Images(){
    return gulp.src(['src/png/*.png'])
        .pipe(imgMin())
        .pipe(gulp.dest('build/images'))
}

function Jpg(){
    return gulp.src(['src/jpg/*.jpg'])
        .pipe(imgMin())
        .pipe(gulp.dest('build/jpg'))
}

function Js(){
    return gulp.src(['src/js/*.js'])
        .pipe(plumber())
        .pipe(concat('min.js'))
        .pipe(minJS())
        .pipe(gulp.dest('build/js'))
}

function Server(){
    server.init({server:"./",browser:'chrome'});
    gulp.watch('src/scss/**/*.scss',gulp.series(Sass))
}


exports.build = series(Sass,Images,Jpg);
exports.start = series(Sass,Images,Jpg,Server);