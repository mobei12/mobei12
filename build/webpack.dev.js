const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.base');
const { merge } = require('webpack-merge');
const PORT = 8080; // 你的 devServer 端口号
const URL = `http://localhost:${PORT}/#/home`; // 要打开的 URL
const defConfig = merge(config, {
	mode: 'development',
	devtool: 'source-map',//开启sourceMap，方便调试
	devServer: {
		proxy: [
			{
				context: ['/api', '/aa'],//代理
				target: process.env.TEST_SERVER_URL,//在dev.env中配置
				changeOrigin: true,
				pathRewrite: { '^/api': '/api' },//根据自己后台配置
			},
		],
	},
});
// 创建 webpack compiler
const compiler = webpack(defConfig);
// 创建 devServer
const devServerOptions = Object.assign({}, defConfig?.devServer, {
	/*open: true, // 打开浏览器
	 hot: true,*/
});
const server = new WebpackDevServer(devServerOptions, compiler);
// 启动 devServer
server.start().then(() => {
	console.log(`dev server listening on port ${PORT}`);

	// 打开指定路由
	const { exec } = require('child_process');
	exec(`start ${URL}`); // 在 Windows 上打开 URL
}).catch((err) => {
	console.error(err);
});
