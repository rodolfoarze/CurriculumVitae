const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {

    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve:{
        extensions:['.js','.jsx']
    },

    module:{
        rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
            loader: "babel-loader"
        }
        },

         {
             test: /\.html$/,
             use:[
                 {
                     loader: "html-loader"
                 }
             ]
         }

        ]
    },

    plugins:[
        new htmlWebPackPlugin({
        template: "./public/index.html",
        file: "./index.html"

    }),

    new FaviconsWebpackPlugin('./public/icon.png'),
    ]
}