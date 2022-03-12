var path = require('path');

module.exports = {
    entry: './src/main/js/App.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx']
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                //test: /\.jsx?$/,
                //exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                            ["@babel/plugin-transform-class-properties", {"loose": true}]
                        ]
                    }
                }]
            }
        ]
    }
};