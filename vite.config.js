export default {
  server: {
    open: true
  },
  preview: {
    open: true
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  publicDir: 'public'
}