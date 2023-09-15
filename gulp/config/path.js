/**
 * Contains path information
 */

import * as nodePath from 'path'; // import module path
import { distFolder, srcFolder, pagePath, pageHTMLPath } from './pagesConfig.js';
const rootFolder = nodePath.basename(nodePath.resolve()); // Get the name of the project root folder (gulp-2022)

/**
 * The path object that will store all the path
 */
export const path = {
    src: { 
      html: `${srcFolder}/*.html`,
      'page-oneHTML': pageHTMLPath('src', 'page-one'),
      'page-twoHTML': pageHTMLPath('src', 'page-two'),

      indexJs: pagePath('src', 'index', 'js'),
      'page-oneJs': pagePath('src', 'page-one', 'js'),
      'page-twoJs': pagePath('src', 'page-two', 'js'),

      indexScss: pagePath('src', 'index', 'scss'), 
      'page-oneScss': pagePath('src', 'page-one', 'scss'),
      'page-twoScss': pagePath('src', 'page-two', 'scss'),

      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`,
      other: `${srcFolder}/other/**/*.*`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimized: `${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimizedDist: `${srcFolder}/img/optimized/`,
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   },


   dist: {
      html: `${distFolder}/`,
      'page-oneHTML': pageHTMLPath('dist', 'page-one'),
      'page-twoHTML': pageHTMLPath('dist', 'page-two'),

      indexJs: pagePath('dist', 'index', 'js'),
      'page-oneJs': pagePath('dist', 'page-one', 'js'),
      'page-twoJs': pagePath('dist', 'page-two', 'js'),

      indexScss: pagePath('dist', 'index', 'css'),
      'page-oneScss': pagePath('dist', 'page-one', 'css'),
      'page-twoScss': pagePath('dist', 'page-two', 'css'),

      fonts: `${distFolder}/fonts/`,
      libs: `${distFolder}/libs/`,
      other: `${distFolder}/other/`,
      images: `${distFolder}/img/optimized/`,
      svg: `${distFolder}/img/`,
   }, 


   watch: { 
      html: `${srcFolder}/**/*.html`,
      'page-oneHTML': pageHTMLPath('watch', 'page-one'),
      'page-twoHTML': pageHTMLPath('watch', 'page-two'),

      indexJs: pagePath('watch', null, 'js'),
      'page-oneJs': pagePath('watch', null, 'js'),
      'page-twoJs': pagePath('watch', null, 'js'),
      
      indexScss: pagePath('watch', null, 'scss'),
      'page-oneScss': pagePath('watch', null, 'scss'),
      'page-twoScss': pagePath('watch', null, 'scss'),
      
      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`, 
      other: `${srcFolder}/other/**/*.*`,
      images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, `!${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`],
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   }, 

   clean: distFolder, // clear the production folder
   distFolder: distFolder, // production folder
   srcFolder: srcFolder, // source folder
   rootFolder: rootFolder, // root folder (gulp-2022)
   ftp: `test` // ftp connection
}
