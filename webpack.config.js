const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["movies", "dramas", "contact", "premium"];
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
    dramas: path.resolve(__dirname, "src/js/dramas.js"),
    contact: path.resolve(__dirname, "src/js/contact.js"),
    premium: path.resolve(__dirname, "src/js/premium.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle[contenthash].js",
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
        use: ["style-loader", "css-loader", "sass-loader"],
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
  ].concat(multipleHtmlPages),
};
