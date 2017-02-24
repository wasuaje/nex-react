// GULP
var gulp = require('gulp');
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// WebPack
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');


var assets = {
    scss: ['./stylesheet/**/*.scss']
};

// GULP:STYLES
gulp.task('styles', function () {
  return gulp.src( './stylesheet/style.scss' )
    .pipe( sourcemaps.init())
    .pipe( sass( { includePaths:  ['./stylesheet/components/'], outputStyle: 'expanded'} ) )
    .pipe( autoprefixer('last 2 versions') )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css/'))
    // .pipe(stream(webpackConfig))
    // .pipe(cssmin())
    // .pipe( gulp.dest( './src/sass/') )
    // .pipe( connect.reload() );
});

gulp.task('watch', function() {
    gulp.watch( assets.scss, ['styles'] );
});


// GULP:WEBPACK DEV SERVER
gulp.task('webpack-dev-server', function() {
    // content
    var wpConfig = Object.create(webpackConfig);

    new WebpackDevServer(webpack(wpConfig), {
        publicPath: "/" + wpConfig.output.publicPath,
        stats: {
            colors:true
        }
    }).listen(8000, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");
    });
});

gulp.task('default',['webpack-dev-server', 'styles', 'watch']);