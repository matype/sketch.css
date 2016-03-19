var gulp = require('gulp')

gulp.task('build', function () {
    var postcss = require('gulp-postcss')
    var customProperties = require('postcss-custom-properties')
    var For = require('postcss-for')
    var nested = require('postcss-nested')
    var size = require('postcss-size')
    var Import = require('postcss-import')
    var flexbugsfixes = require('postcss-flexbugs-fixes')
    var csso = require('gulp-csso')
    var processors = [
        Import,
        customProperties,
        For,
        nested,
        size,
        flexbugsfixes
    ]
    var rename = require('gulp-rename')

    return gulp.src('src/sketch.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist'))
        .pipe(csso())
        .pipe(rename('sketch.min.css'))
        .pipe(gulp.dest('dist'))
})
