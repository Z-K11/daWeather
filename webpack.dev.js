import { merge } from 'webpack-merge';
import common from './webpack.common.js';
export default merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    allowedHosts: 'all',
    watchFiles: ['./src/template.html'],
    open: {
      app: {
        name: 'chromium',
      },
    },
  },
});
