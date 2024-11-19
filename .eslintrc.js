module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:prettier/recommended', 'eslint:recommended'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		// 添加你的ESLint规则
		'prettier/prettier': 'off', // 将Prettier规则设为error级别，以便在不符合Prettier标准时报错
		'no-unused-vars': 'warn',
		'no-undef': 'warn',
	},
};
