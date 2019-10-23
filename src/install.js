/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = async api => {
	//

	const devDependencies = {
		'ts-loader': '6.2.0',
		typescript: '3.6.3',
		'vue-class-component': '7.1.0',
		'vue-property-decorator': '8.2.2'
	};

	api.extendPackageJson({
		devDependencies
	});

	api.render('./templates/shim');

	api.extendJsonFile('tsconfig.json', {
		compilerOptions: {
			sourceMap: true,
			target: 'es5',
			strict: true,
			experimentalDecorators: true,
			module: 'es2015',
			moduleResolution: 'node'
		},
		include: ['src/**/*'],
		files: ['./shim-vue.d.ts'],
		exclude: ['node_modules']
	});
};
