/**
 * Created by Takamichi on 2/13/16.
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    watch: true
}).listen(3000, '0.0.0.0', function(err, result) {
    if (err) {
        console.error(err);
    }

    console.log('Listening at 0.0.0.0:3000')
});
