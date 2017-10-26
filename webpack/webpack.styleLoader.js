import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

let extractStyleCSSLet = new ExtractTextPlugin('css/app.css');

let styleLoaderLet = {
    test: /\.(s?)css$/,
    use: extractStyleCSSLet.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {importLoaders: 1}
            },
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: () => [autoprefixer({browsers: ['last 3 versions']})]
                }
            },
            'sass-loader'
        ],
    })
};

if (process.env.NODE_ENV === 'production') {
    styleLoaderLet = {
        test: /\.(s?)css$/,
        use: extractStyleCSSLet.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {minimize: true, importLoaders: 1}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer({browsers: ['last 3 versions']})]
                    }
                },
                'sass-loader'
            ],
        })
    }
}

export const styleLoader = styleLoaderLet;
export const extractStyleCSS = extractStyleCSSLet;