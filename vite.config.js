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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.png')) {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  }
}