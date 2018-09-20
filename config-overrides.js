const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: { 
      "@primary-color": "#50E3C2",
      "@link-color": "#9B9B9B",
      "@warning-color": "#F5A623",
      "@text-color": "#9B9B9B",
      "@text-color-secondary": "#E7EBEF",
      "@font-family"  : `"Roboto", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif,
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};