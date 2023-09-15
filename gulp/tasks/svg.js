/**
 * Processing svg (merging all svgs into 1 file)
 */

import svgSprite from "gulp-svg-sprite";

export const svg = () => {
   return app.gulp.src(app.path.src.svg, {})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'SVG',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(app.gulp.dest(app.path.dist.svg))
      .pipe(app.plugins.browsersync.stream());
}