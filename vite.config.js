const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        circle: resolve(__dirname, 'circle.html'),
        photography: resolve(__dirname, 'photography.html'),
      },
    },
  },
};
