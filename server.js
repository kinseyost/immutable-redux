var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var app = express();

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;
if (process.env.NODE_ENV !== 'production') {
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
  app.use(express.static(__dirname + '/public'));

  app.get('/', function(request, response) {
    response.render('src/index');
  });

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}
