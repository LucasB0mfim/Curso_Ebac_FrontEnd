const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImage() {
    return gulp.src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"))
};

function comprimeJavaScript() {
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest("./build/scripts"))
};

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"));
};

exports.default = gulp.parallel(comprimeImage, comprimeJavaScript, compilaSass);
exports.watch = function() {
    gulp.watch("./build/images/*", gulp.series(comprimeImage));
    gulp.watch("./build/scripts/*.js", gulp.series(comprimeJavaScript));
    gulp.watch("./build/styles/*.scss", gulp.series(compilaSass));
}
