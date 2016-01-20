import gulp from 'gulp'
import { exec } from 'child_process'

import './gulp/task/build.babel'
import './gulp/task/watch.babel'
import './gulp/task/test.babel'

gulp.task('serve', () => {
  let port = 4343
  console.dir(`start http server(port ${port})`)
  exec(`python -m SimpleHTTPServer ${port}`)
})

gulp.task('run', ['watch'], () => {
  gulp.start('serve')
})

gulp.task('default', ['watch'], () => {
  gulp.start('serve')
})
