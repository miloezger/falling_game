export default {
  server: {
    open: true
  },
  build: {
    assetsInlineLimit: 0, // Don't inline any assets
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Keep the original directory structure for media files
          if (assetInfo.name.includes('media/')) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
}