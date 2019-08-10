const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        blog: [path.resolve(__dirname) + '/src/blog.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname) + '/blog/static/'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ]
                    },
                }],
            },
            {
                test: /\.vue$/,
                use: [{loader: 'vue-loader'}]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};