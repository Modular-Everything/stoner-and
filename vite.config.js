const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: [
          resolve(__dirname, 'circle.html'),
          resolve(__dirname, 'photography.html'),
        ],
      },
    },
  },
};
