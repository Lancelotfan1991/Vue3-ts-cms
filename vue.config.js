const path = require('path');

module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        components: 'src/components'
      }
    }
  }
};
