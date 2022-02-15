module.exports = {
// 选项...
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9808',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
