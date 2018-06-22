const path = require('path')


module.exports = {
    mode: 'development',
    target: 'electron-main',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
        library: '',
    },
    externals: {
        atom: 'atom',
        react: 'react',
        'react-dom': 'react-dom',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            }
        ],
    }
}
