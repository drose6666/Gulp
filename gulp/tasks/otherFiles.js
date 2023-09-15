/**
 * Копирование файлов
 * Copying files
 */
export const otherFiles = () => {
   return app.gulp.src(app.path.src.otherFiles)
      .pipe(app.gulp.dest(app.path.dist.otherFiles))
}