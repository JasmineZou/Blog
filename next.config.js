var path= require('path');
module.exports = {
  webpack: (config, { dev }) => {
    // config.module.rules.push({
    //   test: /\.(js|jsx)$/,
    //   include: [path.resolve(__dirname, "src")],
    //   use: 'babel-loader'
    // },
    // { 
    //   test: /\.css$/, 
    //   loader: 'style-loader!css-loader', //?modules&localIdentName=[name]__[local]-[hash:base64:5]
    //   // loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
    //   exclude: /node_modules/
    // },{
    //     test: /\.css$/, 
    //     loader: 'style-loader!css-loader'
    //     // loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),

    // },
    // {
    //   test: /\.less$/,
    //   use: ['style-loader','css-loader',"less-loader"]
    // },{
    //   test: /\.(png|jpg|jpeg|gif|PNG)$/,
    //   use:[
    //       {
    //           loader:'url-loader',
    //           options:{
    //               limit:5000,
    //               name:'../images/[name].[ext]'
    //           }
    //       }
    //   ]
    // },{
    //   test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
    //   use:[{
    //       loader:'file-loader',
    //       options:{
    //           name:'../fonts/[name].[ext]'
    //       }
    //   }]
    // })
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        use: ['babel-loader', 'raw-loader', 'less-loader']
      }
    );
    return config;
  }
}
