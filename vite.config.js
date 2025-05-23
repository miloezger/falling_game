export default {
  server: {
    open: true
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  publicDir: 'images'
}