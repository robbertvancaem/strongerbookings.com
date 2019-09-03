module.exports = {
  target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf|mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static',
          outputPath: 'static',
        },
      },
    });

    return config;
  },
};
