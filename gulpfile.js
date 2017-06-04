var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var sassGlob     = require('gulp-sass-glob');
var autoprefixer = require('autoprefixer');
var postcss      = require('gulp-postcss');
var notify       = require('gulp-notify');
var twig         = require('gulp-twig');
var browserSync  = require('browser-sync').create();
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant'); // $ npm i -D
/*
3. url variables
*/

// -------------------------------------
//   settings
// -------------------------------------
//
var sassOptions = {
    errLogToConsole : true,
    outputStyle     : 'expanded'
};

var postCssOpts = [
  autoprefixer({ browsers: ['last 4 versions', '> 1%'] })
];

// -------------------------------------
//   styles:dev
// -------------------------------------
//  Compile styles quickly without optimizations and with additional info
//
//  1 - Collects all Sass
//  2 - Add source maps
//  3 - Compiles to CSS
//  4 - Output to dist as `generatedByGulp.css`
//
gulp.task('styles', function() {
    return gulp.src('frontend-src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass(sassOptions).on('error', notify.onError(function (error) {
          return 'Problem file : ' + error.message;
        }))) // 3
        .pipe(postcss(postCssOpts)) // 3 + 4
        .pipe(gulp.dest('./')); // 4
});



// -------------------------------------
//   markup
// -------------------------------------
// Compile twig templates to html pages 
//
gulp.task('markup', function() {
    'use strict';

    return gulp.src('frontend-src/twig/index.twig')
        .pipe(plumber())
        .pipe(twig({}))
        .pipe(gulp.dest('./'))
});





// -------------------------------------
//   images
// -------------------------------------
//  Takes images from `frontend-src` folder, compress them and outputs to
//  frontend-dist folder.
//
gulp.task('images', function(){
    return gulp.src('frontend-src/img/**/*')
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel : 3,                        // png
            progressive       : true,                     // jpg
            interlaces        : true,                     // gif
            svgoPlugins       : [{removeViewBox: false}], // svg
            use               : [pngquant()]              // png
        }))
        .pipe(gulp.dest('./img'));
});





// -------------------------------------
//   serve
// -------------------------------------
//  Spin up browserSync webserver on port 3000
//
//  1 - mirrors clicks, scrolls, etc. - false for performance, true for testing
//  2 - opens page in browser automatically
//  3 - notifies about changes in corner of the browser window
//  4 - keep an eye for generated files and push changes to browser
gulp.task('serve', function() {
    browserSync.init({
        ghostMode : false, // 1
        open      : false, // 2
        notify    : false, // 3
        server    : {
            baseDir: './',
            index: 'index.html'
        },
        files     : [      // 4
            'style.css',
            'index.html'
        ]
    });
});



gulp.task('watch:styles', function() {
    return gulp.watch('frontend-src/scss/**/*.scss',
        gulp.series('styles'));
});

gulp.task('watch:markup', function() {
    return gulp.watch('frontend-src/twig/**/*.twig',
        gulp.series('markup'));
});

gulp.task('watch:images', function() {
    return gulp.watch('frontend-src/img/**/*',
        gulp.series('images'));
});

gulp.task('watch', gulp.parallel('watch:styles', 'watch:markup'));





// -------------------------------------
//   default task
// -------------------------------------
//  1 - Regenerate everything
//  2 - Fire up browserSync & watch for everything
//
gulp.task('default',
    gulp.series(
        gulp.parallel( // 1
            'styles',
            'markup',
            'images'
        ),
        gulp.parallel('watch', 'serve') // 2
    )
);