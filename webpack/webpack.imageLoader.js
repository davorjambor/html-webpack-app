export const imageLoader ={
    test: /\.(gif|png|jpe?g)$/i,
    loaders: [
        'file-loader?name=img/[name].[ext]',
        {
            loader: 'image-webpack-loader',
            query: {
                mozjpeg: {
                    progressive: true,
                },
                gifsicle: {
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 4,
                },
                pngquant: {
                    quality: '75-90',
                    speed: 3,
                },
            },
        }
    ]
};