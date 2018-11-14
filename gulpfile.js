var gulp = require('gulp'),
	merge_streams = require('merge-stream'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	livereload = require('gulp-livereload'),
	filter = require('gulp-filter');

/**
 * Copy assets to dedicated directories
 */
gulp.task('install-assets', function () {

	// Bootstrap Fonts
	var fonts_twbs = gulp.src(
		'node_modules/bootstrap-sass/assets/fonts/**/*',
		{base: 'node_modules/bootstrap-sass/assets/fonts'})
		.pipe(gulp.dest('src/fonts/vendor'));

	// JavaScripts
	var js = gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
		'node_modules/enquire.js/dist/enquire.min.js'
	]).pipe(gulp.dest('src/js/vendor'));

	return merge_streams(fonts_twbs, js);
});


/**
 * Production assets
 *
 * Copy needed assets to production directory
 */
gulp.task('production-assets', function () {
    // Fonts
    var fonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    // Stylesheets and JavaScripts are handled by minifier

	var images = gulp.src('src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));

    var videos = gulp.src('src/video/**/*')
        .pipe(gulp.dest('dist/video'));

    var htaccess = gulp.src('.htaccess.sample')
        .pipe(rename('.htaccess'))
        .pipe(gulp.dest('dist'));

	return merge_streams(fonts, images, videos, htaccess);
});

/**
 * Sass compilation for production
 *
 * Will compile sass into css with compressed with auto-prefixer
 *
 * @link https://github.com/dlmanning/gulp-sass
 */
gulp.task('sass:prod', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed',
				precision: 8,
				indentType: 'tab',
				indentWidth: 1
			}).on('error', sass.logError)
		)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist/css/'));
});


/**
 * JS minification for production
 *
 * Will create a min-version of all js files
 *
 * @link https://github.com/terinjokes/gulp-uglify
 */
gulp.task('jsminify', function (cb) {
	pump([
			gulp.src('src/js/**/*'),
			uglify({
				output: {
					comments: true
				}
			}),
			gulp.dest('dist/js')
		],
		cb
	);
});


/**
 * HTML minification for production
 *
 * Will strip spaces and comments from html
 *
 * @link https://github.com/jonschlinkert/gulp-htmlmin
 */
gulp.task('htmlminify', () => {
    // Check if .shtml will work, too
	return gulp.src('src/*.html')
		.pipe(htmlmin({
			minifyJS: true,
			collapseWhitespace: true,
			conservativeCollapse: true,
			removeComments: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		}))
		.pipe(gulp.dest('dist'));
});


/**
 * Sass compilation for development
 *
 * Will compile sass into css with sourcemaps and livereload
 *
 * @link https://github.com/dlmanning/gulp-sass
 * @link https://github.com/floridoo/gulp-sourcemaps
 * @link https://github.com/vohof/gulp-livereload
 */
gulp.task('sass:dev', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'expanded',
				precision: 8,
				indentType: 'tab',
				indentWidth: 1
			}).on('error', sass.logError)
		)
		.pipe(sourcemaps.write('sourcemaps'))
		.pipe(gulp.dest('src/css'))
		// make sure livereload will only reload the css and not the entire page when passing .map files in
		.pipe(filter('**/*.css'))
		.pipe(livereload());
});

/**
 * Common development task (default)
 *
 * This will run sass:dev before watching the sass files for changes
 *
 * @link https://github.com/vohof/gulp-livereload
 */
gulp.task('dev', ['sass:dev'], function () {
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['sass:dev']);
	gulp.watch([
		'src/**/*.html',
		'src/**/*.shtml',
		'src/**/*.php',
		'src/js/**/*',
		'src/img/**/*'
	], function (event) {
		livereload.changed(event.path);
	});
});

gulp.task('setup', ['install-assets', 'sass:dev']);
gulp.task('default', ['dev']);
gulp.task('production', ['sass:prod', 'jsminify', 'htmlminify', 'production-assets']);
