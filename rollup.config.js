import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'process.env.AUTHOR': JSON.stringify(process.env.AUTHOR),
				'process.env.COMPANY': JSON.stringify(process.env.COMPANY),
				'process.env.PHONE': JSON.stringify(process.env.PHONE),
				'process.env.CITIES': JSON.stringify(process.env.CITIES),
				'process.env.EMAIL': JSON.stringify(process.env.EMAIL),
				'process.env.INSTAGURL': JSON.stringify(process.env.INSTAGURL),
				'process.env.GOOGLEURL': JSON.stringify(process.env.GOOGLEURL),
				'process.env.PRICE': JSON.stringify(process.env.PRICE),
				'process.env.EXCHANGERATE': JSON.stringify(process.env.EXCHANGERATE)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			json(),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'process.env.AUTHOR': JSON.stringify(process.env.AUTHOR),
				'process.env.COMPANY': JSON.stringify(process.env.COMPANY),
				'process.env.PHONE': JSON.stringify(process.env.PHONE),
				'process.env.CITIES': JSON.stringify(process.env.CITIES),
				'process.env.EMAIL': JSON.stringify(process.env.EMAIL),
				'process.env.INSTAGURL': JSON.stringify(process.env.INSTAGURL),
				'process.env.GOOGLEURL': JSON.stringify(process.env.GOOGLEURL),
				'process.env.PRICE': JSON.stringify(process.env.PRICE),
				'process.env.EXCHANGERATE': JSON.stringify(process.env.EXCHANGERATE)
			}),
			svelte({
				generate: 'ssr',
				hydratable: true,
				dev
			}),
			resolve({
				dedupe: ['svelte']
			}),
			json(),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			json(),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
