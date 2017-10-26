import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractIndexHTMLConst = new ExtractTextPlugin('index.html');

let htmlLoaderLet = {
    test: /\.html$/,
    use: extractIndexHTMLConst.extract({
        loader: 'html-loader',
        options: {
            minimize: false,
            removeComments: false,
            collapseWhitespace: false,
            conservativeCollapse: false
        }
    })
};

if (process.env.NODE_ENV === 'production') {
    htmlLoaderLet = {
        test: /\.html$/,
        use: extractIndexHTMLConst.extract({
            loader: 'html-loader',
            options: {
                minimize: true,
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        })
    };
}

export const htmlLoader = htmlLoaderLet;
export const extractIndexHTML = extractIndexHTMLConst;