var path = require('path');
var fs = require('fs');
const { override, babelInclude, fixBabelImports } = require('customize-cra');
// 由於 cra 將 webpack 和 babel 進行封裝 因此要做額外的配置要透過 react-app-rewired(config-overrides.js) 來擴充
module.exports = function(config, env) {
  // config 為 cra 原本 webpack 的配置
  return Object.assign(
    config,
    override(
      /*Make sure Babel compiles the stuff in the common folder*/
      babelInclude([
        path.resolve('src'), // don't forget this
        fs.realpathSync('../../node_modules/@iso/components'),
        fs.realpathSync('../../node_modules/@iso/lib'),
        fs.realpathSync('../../node_modules/@iso/ui'),
        fs.realpathSync('../../node_modules/@iso/redux'),
        fs.realpathSync('../../node_modules/@iso/containers'),
        fs.realpathSync('../../node_modules/@iso/config'),
        fs.realpathSync('../../node_modules/@iso/assets'),
      ]),
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css', // 可以搭配 addLessLoader 來進行配色 modifyVars: { '@primary-color': '#1DA57A' } 但這裡要改成 true 
      })
    )(config, env)
  );
};
