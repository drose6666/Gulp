/**
 * Optimize images
 */

import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
   return app.gulp.src(app.path.src.images, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'IMAGES',
            message: 'Error: <%= error.message %>'
         })
      ))

      .pipe(app.plugins.newer(app.path.src.images))
      .pipe(webp()) // create .webp images
      .pipe(app.gulp.dest(app.path.src.imagesOptimizedDist)) // put .webp in the folder with the result
 
      .pipe(app.gulp.src(app.path.src.images))
      .pipe(app.plugins.newer(app.path.src.images))
      
      // optimize images
      .pipe(imagemin({ 
         progressive: true,
         svgoPlugins: [{ removeViewBox: false }],
         interlaced: true,
         optimizationLevel: 3 // 0 to 7
      }))
      .pipe(app.gulp.dest(app.path.src.imagesOptimizedDist)) // put the optimized images in the folder with the result

      .pipe(app.gulp.src(app.path.src.imagesOptimized))
      .pipe(app.gulp.dest(app.path.dist.images))
      .pipe(app.plugins.browsersync.stream());

}
