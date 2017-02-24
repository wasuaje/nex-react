var path = require("path");

module.exports = {
  entry: {
    app: ["./js/Root.js"]
  },
  output: {      
    path: path.resolve(__dirname, "./"),
    publicPath : "js/",
    filename: "nexreact.js"
  },
  devServer:{
    inline: true,
    port: 8000,
    headers: {  "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization" }
  },
    module : {
    loaders : [
      {
        test : /\.js$/,        
        exclude : /node_modules/,
        loader : 'babel',
        query:{
          presets: ['es2015','react']
        }
      }
    ]
  }
};