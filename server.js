/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.get('application.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/css/application.css'));
  res.end();
});

app.get('/data.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify([{id: 1, date: '04-01', fromTime: '08:00', toTime: '16:00'},
    {id: 2, date: '04-01', fromTime: '08:00', toTime: '16:00'},
    {id: 3, date: '04-01', fromTime: '08:00', toTime: '16:00'},
    {id: 4, date: '04-01', fromTime: '08:00', toTime: '16:00', note: 'almost last'},
    {id: 5, date: '04-01', fromTime: '08:00', toTime: '16:00'}]));
  res.end();
});

app.get('*', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('404 Not Found');
  res.end();
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
