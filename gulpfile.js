var gulp = require('gulp')

gulp.task('build', function () {
    var postcss = require('gulp-postcss')
    var customProperties = require('postcss-custom-properties')
    var customMedia = require('postcss-custom-media')
    var For = require('postcss-for')
    var Import = require('postcss-import')
    var flexbugsfixes = require('postcss-flexbugs-fixes')
    var csso = require('gulp-csso')
    var processors = [
        Import,
        customProperties,
        customMedia,
        For,
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
