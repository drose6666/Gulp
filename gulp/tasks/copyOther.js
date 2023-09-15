/**
 * Копирование файлов
 * Copying files
 */
export const copyOther = () => {
   return app.gulp.src(app.path.src.other)
      .pipe(app.gulp.dest(app.path.dist.other))
}