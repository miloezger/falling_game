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
          
          // Preserve images folder structure
          if (assetInfo.name.startsWith('images/')) {
            return `images/${info[0].split('/').pop()}.${ext}`;
          }
          
          // Keep original paths for assets folder
          if (assetInfo.name.startsWith('assets/')) {
            return `${assetInfo.name}`;
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
    },
    // Ensure images folder is copied to dist
    copyPublicDir: true
  },
  publicDir: 'public',
  // Make sure to include both images and assets directories
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.mp4', '**/*.webm']
}