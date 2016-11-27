var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./Script/Callbacks",
  resolve: {
    modulesDirectories: ['Script', 'node_modules'],
    alias: {
      jquery: "jquery/dist/jquery.min",
    	d3: "d3/d3.min",
  		c3: "c3/c3.min",
      React: "react/dist/react.min",
      ReactDOM: "react-dom/dist/react-dom.min",

  		//Moola modules
  		Date: 'Model/Date',
  		Cost: 'Model/Cost',
  		Flow: 'Model/Flow',
  		PaymentMethod: 'Model/PaymentMethod',
  		Item: 'Model/Item',
  		Tags: 'Model/Tags',
  		Entity: 'Model/Entity',
  		Parser: 'Model/Parser',
  		Collections: 'Model/Collections',
  		Constants: 'Model/Constants',
  		Visualizer: 'Model/Visualizer',
  		EntityManager: 'Controller/EntityManager',
  		"../Controller/EntityManager" : 'Controller/EntityManager',
  		BarChart: 'Model/BarChart',
  		Callbacks: 'Callbacks',
  		HtmlElement: 'Model/HtmlElement',
  		MonthlyFinanceEntity: 'Model/MonthlyFinanceEntity',

      JumbotronTile: 'Controls/JumbotronTile/JumbotronTile',
      SnippetTile: 'Controls/SnippetTile/SnippetTile',
      ISnippetTile: 'Controls/SnippetTile/ISnippetTile',

      StartDashboard: 'View/StartDashboard',
      IStartDashboard: 'View/Interfaces/IStartDashboard'
    },
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/Script",
    filename: "modules.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        'global': {}, // bizarre lodash(?) webpack workaround
        'global.GENTLY': false // superagent client fix
    })
  ],
};