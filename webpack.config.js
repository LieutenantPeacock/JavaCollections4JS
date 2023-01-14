const path = require('path');
const glob = require('glob');

const defaultLibOpts = {
  type: 'umd',
};

module.exports = {
  mode: 'production',
  entry: {
    'index': {
      import: './src/index.js',
      library: Object.assign({
        name: 'JavaCollections',
      }, defaultLibOpts)
    },
    ...Object.fromEntries(glob.sync('./src/**/*.js', {ignore: './src/index.js'}).map(file => {
      const p = path.parse(file);
      return [p.name, {
        import: file,
        library: Object.assign({
          name: p.name,
          export: 'default',
        }, defaultLibOpts)
      }];
    }))
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    globalObject: 'this',
  }
};