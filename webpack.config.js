const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const pages = ["movies", "tvshows", "documentaries", "contact"];
const multipleHtmlPages = pages.map((page) => {
  return new HtmlWebpackPlugin({
    template: `src/pages/${page}.html`,
    filename: `${page}.html`,
    chunks: [`${page}`],
    favicon: "src/assets/icons/favicon.ico",
  });
});

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    movies: path.resolve(__dirname, "src/js/movies.js"),
    tvshows: path.resolve(__dirname, "src/js/tvshows.js"),
    documentaries: path.resolve(__dirname, "src/js/documentaries.js"),
    contact: path.resolve(__dirname, "src/js/contact.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Replace 'style-loader' with 'MiniCssExtractPlugin.loader'
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "A-Movie",
      filename: "index.html",
      template: "src/pages/home.html",
      chunks: ["index"],
      favicon: "src/assets/icons/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Extract CSS into separate file
    }),
  ].concat(multipleHtmlPages),
};
