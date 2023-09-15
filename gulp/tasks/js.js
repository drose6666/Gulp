/**
 * Javascript file handling
 */ 
import gulp from 'gulp'
import { path } from '../config/path.js'
import { plugins } from '../config/plugins.js'

import webpack from "webpack-stream"; // Including webpack to add import capability (ES6)

const js = (pageName) => {
   return gulp.src(path.src[`${pageName}Js`], { allowEmpty: true }, { sourcemaps: true })
      .pipe(plugins.plumber(
         plugins.notify.onError({
            title: 'JS',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: `bundle-${pageName}.min.js`,
         },
         module: {
            rules: [
               {
                  test: /\.(css|s[ac]ss)$/i,
                  use: ['css-loader', { loader: 'postcss-loader' }, 'sass-loader'] // Использование loaders происходит справа налево
               },
               {
                  test: /\.less$/i,
                  use: ['css-loader', { loader: 'postcss-loader' }, 'less-loader'], // Использование loaders происходит справа налево
               },
            ]
         }
      }))
      .pipe(gulp.dest(path.dist[`${pageName}Js`]))
      .pipe(plugins.browsersync.stream());
}

export { js }

/**
 * sourcemaps: true - helps to track in which file js is written 
 */