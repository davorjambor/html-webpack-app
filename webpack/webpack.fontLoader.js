export const fontLoader = {
    test: /\.(eot|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
        name: 'font/[name].[ext]',
    }
};

export const svgLoader = {
    test: /\.(svg)$/,
    loader: 'file-loader',
    options: {
        name: 'svg/[name].[ext]',
    }
};