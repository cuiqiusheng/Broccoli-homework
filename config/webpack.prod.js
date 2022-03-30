const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

const prodConfig = {
    mode: 'production',
    output: {
        filename: 'assets/js/[name].[hash].js',
    },
}

module.exports = merge(
    commonConfig,
    prodConfig,
)
