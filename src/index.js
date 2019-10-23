/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

module.exports = function(api) {
	//
	api.extendWebpack(cfg => {
		// add/remove/change cfg (Webpack configuration Object)
		cfg.resolve.extensions.push('.ts');
		cfg.module.rules.push({
			test: /\.ts$/,
			loader: 'ts-loader',
			exclude: /node_modules/,
			// if you want to quickly a feature without taking care of type you can add transpileOnly: true in the options object
			options: { appendTsSuffixTo: [/\.vue$/] }
		});
	});
};
