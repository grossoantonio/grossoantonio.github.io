var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    minifycss   = require('gulp-minify-css'),
    jshint      = require('gulp-jshint'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    cp          = require('child_process'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    jade        = require('gulp-jade'),
    del         = require('del');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_assets/css/main.sass')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }).on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 10', 'ie 9'], { cascade: true }))
        .pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(minifycss())
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});


/**
 * Compile Jade
 */
gulp.task('jade', function() {
    return gulp.src('_jadefiles/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('_includes'));
});


/*
** JS Task
*/
gulp.task('js', function() {
  return gulp.src('_assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(gulp.dest('_site/assets/js'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_assets/js/*.js', ['js']).on("change", browserSync.reload);
    gulp.watch('_assets/css/**', ['sass']);
    gulp.watch(['*.md','*.html', 'en/*.md','en/*.html', '_layouts/*.html', '_posts/*', '_includes/*'], ['jekyll-rebuild']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);



/*
** Image Task
*/


gulp.task('imagejpg', function () {
    gulp.src('_assets/img/**/*.jpg')
    // .pipe(gulp.dest('assets/img'))
    .pipe(imagemin({
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('assets/img/'));
});
gulp.task('imagepng', function () {
    gulp.src('_assets/img/**/*.png')
    // .pipe(gulp.dest('assets/img/'))
    .pipe(imagemin({
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('assets/img/'));
});
gulp.task('imagesvg', function () {
    gulp.src('_assets/img/**/*.svg')
    // .pipe(gulp.dest('assets/img/'))
    .pipe(imagemin({
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('assets/img/'));
});
gulp.task('imagegif', function () {
    gulp.src('_assets/img/**/*.gif')
    // .pipe(gulp.dest('assets/img/'))
    .pipe(imagemin({
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('assets/img/'));
});
gulp.task('imagejpeg', function () {
    gulp.src('_assets/img/**/*.jpeg')
    // .pipe(gulp.dest('assets/img/'))
    .pipe(imagemin({
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('imagecopy', function () {
    gulp.src('_assets/img/**/*')
    .pipe(gulp.dest('assets/img'));
});

gulp.task('imagemin', ['imagejpg','imagepng','imagesvg','imagegif','imagejpeg']);



gulp.task('clean', function() {
    return del(['assets/img']);
});
