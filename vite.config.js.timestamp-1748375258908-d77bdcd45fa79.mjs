// vite.config.js
var vite_config_default = {
  server: {
    open: true
  },
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: "index.html"
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/^images\//.test(assetInfo.name)) {
            return `images/${info[0].split("/").pop()}.${ext}`;
          }
          if (/^assets\//.test(assetInfo.name)) {
            return `assets/${info[0].split("/").pop()}.${ext}`;
          }
          if (["png", "jpg", "jpeg", "gif", "svg", "webp", "avif", "mp4", "webm"].includes(ext)) {
            return `assets/${info[0].split("/").pop()}.${ext}`;
          }
          return `assets/${info[0]}-[hash].${ext}`;
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  },
  publicDir: "public",
  // Ensure both images and assets folders are copied to the dist directory
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg", "**/*.mp4", "**/*.webm"]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtleHBvcnQgZGVmYXVsdCB7XG4gIHNlcnZlcjoge1xuICAgIG9wZW46IHRydWVcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NixcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiAnaW5kZXguaHRtbCdcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gS2VlcCBvcmlnaW5hbCBwYXRocyBmb3IgaW1hZ2VzIGZvbGRlclxuICAgICAgICAgIGlmICgvXmltYWdlc1xcLy8udGVzdChhc3NldEluZm8ubmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgaW1hZ2VzLyR7aW5mb1swXS5zcGxpdCgnLycpLnBvcCgpfS4ke2V4dH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAvLyBLZWVwIG9yaWdpbmFsIHBhdGhzIGZvciBhc3NldHMgZm9sZGVyXG4gICAgICAgICAgaWYgKC9eYXNzZXRzXFwvLy50ZXN0KGFzc2V0SW5mby5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvJHtpbmZvWzBdLnNwbGl0KCcvJykucG9wKCl9LiR7ZXh0fWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIERlZmF1bHQgaGFuZGxpbmcgZm9yIG90aGVyIGFzc2V0c1xuICAgICAgICAgIGlmIChbJ3BuZycsICdqcGcnLCAnanBlZycsICdnaWYnLCAnc3ZnJywgJ3dlYnAnLCAnYXZpZicsICdtcDQnLCAnd2VibSddLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzLyR7aW5mb1swXS5zcGxpdCgnLycpLnBvcCgpfS4ke2V4dH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy8ke2luZm9bMF19LVtoYXNoXS4ke2V4dH1gO1xuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsXG4gIC8vIEVuc3VyZSBib3RoIGltYWdlcyBhbmQgYXNzZXRzIGZvbGRlcnMgYXJlIGNvcGllZCB0byB0aGUgZGlzdCBkaXJlY3RvcnlcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLnBuZycsICcqKi8qLmpwZycsICcqKi8qLmpwZWcnLCAnKiovKi5naWYnLCAnKiovKi5zdmcnLCAnKiovKi5tcDQnLCAnKiovKi53ZWJtJ11cbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLElBQU8sc0JBQVE7QUFBQSxFQUN0TyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQUEsSUFDbkIsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsZ0JBQU0sT0FBTyxVQUFVLEtBQUssTUFBTSxHQUFHO0FBQ3JDLGdCQUFNLE1BQU0sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUdoQyxjQUFJLFlBQVksS0FBSyxVQUFVLElBQUksR0FBRztBQUNwQyxtQkFBTyxVQUFVLEtBQUssQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUc7QUFBQSxVQUNsRDtBQUdBLGNBQUksWUFBWSxLQUFLLFVBQVUsSUFBSSxHQUFHO0FBQ3BDLG1CQUFPLFVBQVUsS0FBSyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRztBQUFBLFVBQ2xEO0FBR0EsY0FBSSxDQUFDLE9BQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsT0FBTyxNQUFNLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDckYsbUJBQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHO0FBQUEsVUFDbEQ7QUFFQSxpQkFBTyxVQUFVLEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRztBQUFBLFFBQ3hDO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUE7QUFBQSxFQUVYLGVBQWUsQ0FBQyxZQUFZLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxXQUFXO0FBQ3RHOyIsCiAgIm5hbWVzIjogW10KfQo=
