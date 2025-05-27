export default {
  server: {
    open: true
  },
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          // Keep original paths for images
          if (assetInfo.name.startsWith('images/')) {
            return `${assetInfo.name}`;
          }
          // Keep original paths for media
          if (assetInfo.name.startsWith('media/')) {
            return `${assetInfo.name}`;
          }
          return `assets/${info[0]}-[hash].${ext}`;
        }
      }
    }
  },
  publicDir: 'public'
}