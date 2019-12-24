const proxy = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    '/ajax',
    proxy({
      target: 'http://m.maoyan.com',
      changeOrigin: true
    })
  );

};
