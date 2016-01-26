import gulp from 'gulp'
import { exec } from 'child_process'

import './gulp/task/build.babel'
import './gulp/task/watch.babel'
import './gulp/task/test.babel'

gulp.task('serve', () => {
  let port = 4343
  console.dir(`start http server(port ${port})`)
  exec(`python -m SimpleHTTPServer ${port}`) // for python 2.x
  //exec(`python -m http.server ${port}`) // for python 3.x
})

gulp.task('run', ['build', 'watch'], () => {
  gulp.start('serve')
})

gulp.task('default', () => {
  gulp.start('run')
})
