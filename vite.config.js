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
          
          // Keep original paths for images folder
          if (/^images\//.test(assetInfo.name)) {
            return `images/${info[0].split('/').pop()}.${ext}`;
          }
          
          // Keep original paths for assets folder
          if (/^assets\//.test(assetInfo.name)) {
            return `assets/${info[0].split('/').pop()}.${ext}`;
          }
          
          // Default handling for other assets
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif', 'mp4', 'webm'].includes(ext)) {
            return `assets/${info[0].split('/').pop()}.${ext}`;
          }
          
          return `assets/${info[0]}-[hash].${ext}`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  publicDir: 'public'
}