var gulp = require('gulp')
var sass = require('gulp-sass')
var htmlmin = require('gulp-htmlmin')
var clean = require('gulp-clean')
var minify = require('gulp-minifier')

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', () => {
  return gulp.src('src/assets/styles/sass/estilos.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/styles/css'))
})

// gulp.task('sass:watch', () => {
//   gulp.watch('src/assets/styles/sass/**', ['sass'])
// })

gulp.task('copy', () => {
  return gulp.src(['src/**', '!src/assets/styles/sass', '!src/assets/styles/sass/**', '!src/*html'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean', () => {
  return gulp.src('dist/', {
      read: false
    })
    .pipe(clean());
})

gulp.task('default', ['sass', 'minify', 'copy'])