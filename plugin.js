const { readFileSync } = require('fs');

function parseEnvString(envString) {
	const lines = envString.split('\n');
	const keyValuePairs = {};

	lines.forEach((line) => {
		// 忽略空行和注释行
		if (!line.trim() || line.trim().startsWith('#')) {
			return;
		}

		const [key, value] = line.split('=');
		const trimmedKey = key.trim();
		const trimmedValue = value ? value.trim() : undefined; // 如果没有值，则为 undefined

		// 将键值对添加到对象中
		keyValuePairs[trimmedKey] = trimmedValue;
	});

	return keyValuePairs;
}
class FileListPlugin {
	static defaultOptions = { outputFileName: 'fileList.md', url: '', fileName: 'dev.env' };

	constructor(options) {
		this.options = { ...FileListPlugin.defaultOptions, ...options };
	}

	apply(compiler) {
		const pluginName = FileListPlugin.name;
		const { hooks, webpack } = compiler;
		const { environment } = hooks;
		const { DefinePlugin } = webpack;
		environment.tap(pluginName, async () => {
			const configContent = await readFileSync(`${process.cwd()}/${this.options.fileName}`, 'utf-8');
			new DefinePlugin(parseEnvString(configContent)).apply(compiler);
		});
	}
}

module.exports = FileListPlugin
