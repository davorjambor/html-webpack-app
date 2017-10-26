import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export const definePluginProduction =
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }
);

export const uglifyJS =
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false
        }
    }
);

let ignoredFiles = [
    {
        dot: true,
        glob: 'node_modules/**/*'
    },
    {
        dot: true,
        glob: 'dist/**/*'
    },
    {
        dot: true,
        glob: 'src/**/*'
    },
    {
        dot: true,
        glob: '.git/**/*'
    },
    {
        dot: true,
        glob: 'webpack/**/*'
    },
    '.babelrc',
    '.htaccess',
    '.gitignore',
    'bitbucket-pipelines.yml',
    'npm-debug.log',
    'package.json',
    'README.md',
    'webpack.config.babel.js',
];

export const copyWebpackDist =
    new CopyWebpackPlugin(
        [{ from: './', to: './dist/' }],
        {
            ignore: ignoredFiles,
        }
);