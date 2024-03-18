const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.base');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const devEnv = dotenv.config({ path: 'dev.env', override: true });
const port = process.env.CUSTOMIZE_PORT || 8081; // 你的 devServer 端口号
const defConfig = merge(config, {
	mode: 'development',
	//devtool: 'source-map',//开启sourceMap，方便调试
	devServer: {
		proxy: [
			{
				context: ['/api', '/aa'],//代理
				target: process.env.CUSTOMIZE_TEST_SERVER_URL,//在dev.env中配置
				changeOrigin: true,
				pathRewrite: { '^/api': '/api' },//根据自己后台配置
			},
		],
		port,
	},
	plugins: [
		new webpack.DefinePlugin(devEnv?.parsed),
	],
});
/*创建 webpack compiler*/
const compiler = webpack(defConfig);
// 创建 devServer
const devServerOptions = Object.assign({}, defConfig?.devServer);
const server = new WebpackDevServer(devServerOptions, compiler);
// 启动 devServer
server.start().then(() => {
	console.log(`dev server listening on port ${port}`);
	// 打开指定路由
	const { exec } = require('child_process');
	exec(`start http://localhost:${port}/#/home`); // 在 Windows 上打开 URL
}).catch((err) => {
	console.error(err);
});
