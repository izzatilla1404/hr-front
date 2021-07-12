// const path = require('path');

module.exports = {
    devServer: {
        // contentBase: path.join(__dirname, 'dist/static/main'),
        // contentBasePublicPath: '/',
        // clientLogLevel: 'debug',
        // compress: true,
        // port: 9000,
        proxy: {
            '/main/': {
                target: 'http://127.0.0.1:8000',
                secure: false,
                changeOrigin: true
            }
        }
    }
}