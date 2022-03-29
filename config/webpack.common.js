const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const aliasPath = require('../tsconfig.json').compilerOptions.paths

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: { resources: path.resolve(__dirname, '../src/styles/vars.scss') },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/logo.png'),
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: Object.keys(aliasPath).reduce((alias, key) => {
            alias[key] = path.resolve(aliasPath[key][0]) + ''
            return alias
        }, {})
    },
}
