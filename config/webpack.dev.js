const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js' // can use array of seperate files and webpack will conact
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "js/"
  },
  devServer: {
    contentBase: "dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            }
        ]
    },
    ]
  }
}