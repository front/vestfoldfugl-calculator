
// const sass = require('@stencil/sass');

exports.config = {
  namespace: 'vf-calc',
  outputTargets:[
    {
      type: 'dist',
      serviceWorker: false
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  // plugins: [
  //   sass({
  //     injectGlobalPaths: [
  //       'src/globals/variables.scss',
  //     ]
  //   })
  // ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
