const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimirImages() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
};

function comprimirJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/scripts'))
};

function compilarSASS() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
};

exports.default = gulp.parallel(comprimirImages, comprimirJavaScript, compilarSASS);
exports.watch = function() {
    gulp.watch("./source/images/*", gulp.series(comprimirImages));
    gulp.watch("./source/scripts/*.js", gulp.series(comprimirJavaScript));
    gulp.watch("./source/styles/*.scss", gulp.series(compilarSASS));
}