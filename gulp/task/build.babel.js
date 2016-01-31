import gulp from 'gulp'
import webpack from 'webpack-stream'
import webpackConfig from '../../webpack.config.js'
import stylus from 'gulp-stylus'

gulp.task('build', () => {
  gulp.start('webpack')
  gulp.start('stylus')
  gulp.start('media')
  gulp.start('sharder')
})

gulp.task('webpack', () => {
  return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./assets/dist/javascript/'))
})

gulp.task('media', () => {
  return gulp.src('./assets/sources/media/*')
    .pipe(gulp.dest('./assets/dist/media/'))
})

gulp.task('stylus', () => {
  return gulp.src('./assets/sources/stylus/*')
      .pipe(stylus())
      .pipe(gulp.dest('./assets/dist/css/'))
})

gulp.task('sharder', () => {
  return gulp.src('./assets/sources/sharder/*')
      .pipe(gulp.dest('./assets/dist/sharder/'))
})
