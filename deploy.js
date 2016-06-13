var child_process = require('child_process');

if (process.env.NODE_ENV === 'production') {
  // We basically just create a child process that will run
  // the production bundle command
  child_process.exec("npm install autoprefixer babel webpack html-webpack-plugin extract-text-webpack-plugin stats-webpack-plugin", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child_process.exec("webpack -p --config webpack.production.config.js", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}
