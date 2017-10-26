import path from 'path'
import {babelLoader} from "./webpack/webpack.babelLoader"
import {styleLoader, extractStyleCSS} from "./webpack/webpack.styleLoader"
import {fontLoader, svgLoader} from "./webpack/webpack.fontLoader"
import {imageLoader} from "./webpack/webpack.imageLoader"
import {htmlLoader, extractIndexHTML} from "./webpack/webpack.htmlLoader"
import {definePluginProduction, uglifyJS, copyWebpackDist} from "./webpack/webpack.plugins"

let webpackConfig = {
    entry: {
        'index.html': [
            './src/index.html',
        ],
        'css/style.css': [
            './src/sass/app.scss',
        ],
        'js/app.js': [
            './src/js/app.js'
        ],
    },
    output: {
        path: __dirname + '/',
        filename: '[name]'
    },
    module: {
        rules: [
            htmlLoader,
            babelLoader,
            fontLoader,
            svgLoader,
            styleLoader,
            imageLoader,
        ]
    },
    resolve: {
        alias: {
            'styles': path.resolve(__dirname, 'src/sass/'),
            'scripts': path.resolve(__dirname, 'src/js/'),
        },
    },
    plugins: [
        extractStyleCSS,
        extractIndexHTML
    ]
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([definePluginProduction, uglifyJS])
}

if (process.env.NODE_ENV === 'dist') {
    webpackConfig.entry = {
        'src/js/_emptyIgnore.js': [
            './src/js/_empty.js'
        ]
    };

    webpackConfig.module = {};
    webpackConfig.plugins = [copyWebpackDist];
}

module.exports = webpackConfig;