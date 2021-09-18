// Путь к приложению в котором храниться статика django
const static_dir = '../todo_notes/static'

// Путь, относительно static_dir
// В него webpack положит шаблон Vue приложения
const template_path = '../templates/index.html'

module.exports = {
    filenameHashing: false, // Django will hash file names, not webpack
    runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    devServer: {
        writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
    },
    // Paths
    // Рабочая директория сборки
    // Я обычно указываю директорию приложения django, которое отвечает за фронт
    outputDir: process.env.NODE_ENV === 'production' ? static_dir : 'dist/',  // Output to a directory in STATICFILES_DIRS
    // Куда пойдёт шаблон проекта
    indexPath: process.env.NODE_ENV === 'production' ? template_path : 'index.html',
    // Куда пойдут ассеты (относительно outputDir)
    assetsDir: '', // ассеты храним там же, где и JS/CSS
    // Путь по которому можно достать статику
    // Нужно указать тот, который прописан в STATIC_URL настроек django
    publicPath: process.env.NODE_ENV === 'production' ? 'static' : '/', // Should be STATIC_URL + path/to/build
    configureWebpack: {
      devtool: "source-map"
    }
  };