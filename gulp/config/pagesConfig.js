const distFolder = './dist'; // the dist folder is created automatically by the "gulp" command. You can also use rootFolder here
const srcFolder = './src'  // variable with root source folder

const pagePath = (pathType, page, ext) => {
   switch (pathType) {
      case 'src':
         return `${srcFolder}/pages/${page}/${page}.${ext}`
      case 'dist':
         return `${distFolder}/pages/${page}/${ext}`
      case 'watch':
         return `${srcFolder}/**/*.${ext}`
      default:
         return `Проверь pagePath в gulp/config/pagesConfig.js`
   }
}

const pageHTMLPath = (pathType, page) => {
   switch (pathType) {
      case 'src':
         return `${srcFolder}/pages/${page}/*.html`
      case 'dist':
         return `${distFolder}/pages/${page}/`
      case 'watch':
         return `${srcFolder}/**/*.html`
      default:
         return `Проверь pagePath в gulp/config/pagesConfig.js`
   }
}



// const pagesNames = ['index', 'contact']
// const tasksNames = { js: {}, css: {}, scss: {} }

// const generateTaskName = (ext) => {
//    pagesNames.forEach(item => {
//       if (ext === 'Js') tasksNames.js[`${item}`] = `${item}${ext}`
//       if (ext === 'Scss') tasksNames.scss[`${item}`] = `${item}${ext}`
//       if (ext === 'Css') tasksNames.css[`${item}`] = `${item}${ext}`
//    })
// }

// generateTaskName('Js')
// generateTaskName('Scss')
// generateTaskName('Css')

export { distFolder, srcFolder, pagePath, pageHTMLPath}