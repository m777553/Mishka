var less = require("gulp-less");
var gulp = require("gulp");

gulp.task('less', function () {
  return gulp.src("less/style.less")
    .pipe(less())
    .pipe(gulp.dest("css"));
});


//запрос на просмотр изменений в less и компиляция в css
//series перезапускает задачу less
gulp.task('ctrlc', function () {
    gulp.watch('less/**/*.less', gulp.series('less'));
});

// // Наблюдение
// gulp.task('watch', function() {

// // Наблюдение за .less файлами
// gulp.watch('less/**/*.less', ['less']);

// // Наблюдение за .js файлами
// gulp.watch('src/scripts/**/*.js', ['scripts']);

// // Наблюдение за файлами изображений
// gulp.watch('src/images/**/*', ['images']);

// // Создание сервера LiveReload
// livereload.listen();

// // Watch any files in dist/, reload on change
// gulp.watch(['dist/**']).on('change', livereload.changed);

// });

// Загрузка плагинов
// var gulp = require('gulp'),
// sass = require('gulp-ruby-sass'),
// autoprefixer = require('gulp-autoprefixer'),
// minifycss = require('gulp-minify-css'),
// jshint = require('gulp-jshint'),
// uglify = require('gulp-uglify'),
// imagemin = require('gulp-imagemin'),
// rename = require('gulp-rename'),
// concat = require('gulp-concat'),
// notify = require('gulp-notify'),
// cache = require('gulp-cache'),
// livereload = require('gulp-livereload'),
// del = require('del');

// Стили
// gulp.task('styles', function() {
// return gulp.src('less/style.less')
// /* .pipe(sass({ style: 'expanded', })) */
// .pipe(less({ style: 'expanded', }))
// .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
// .pipe(gulp.dest('dist/styles'))
// .pipe(rename({ suffix: '.min' }))
// .pipe(minifycss())
// .pipe(gulp.dest('dist/styles'))
// .pipe(notify({ message: 'Styles task complete' }));
// });

// // Скрипты
// gulp.task('scripts', function() {
// return gulp.src('src/scripts/**/*.js')
// // .pipe(jshint('.jshintrc'))
// // .pipe(jshint.reporter('default'))
// .pipe(concat('main.js'))
// .pipe(gulp.dest('dist/scripts'))
// .pipe(rename({ suffix: '.min' }))
// .pipe(uglify())
// .pipe(gulp.dest('dist/scripts'))
// .pipe(notify({ message: 'Scripts task complete' }));
// });

// // Изображения
// gulp.task('images', function() {
// return gulp.src('src/images/**/*')
// .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
// .pipe(gulp.dest('dist/images'))
// .pipe(notify({ message: 'Images task complete' }));
// });

// // Очистка
// gulp.task('clean', function(cb) {
// del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
// });

// // Задача по-умолчанию
// gulp.task('default', ['clean'], function() {
// gulp.start('less', 'scripts', 'images');
// });
