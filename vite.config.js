export default {
  server: {
    open: true
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
}