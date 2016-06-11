const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;

if (process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.config');
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(port, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:/' + port);
  });
} else {
  const express = require('express');
  const app = express();
  app.use(express.static(__dirname + '/public'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}
