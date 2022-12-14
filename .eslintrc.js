module.exports = {
	"env": {
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		// "no-unused-vars": "off",
		// "@typescript-eslint/no-unused-vars": "off",
		"no-case-declarations": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"indent": [
			"warn",
			"tab",
			{"SwitchCase": 1}
		],
		"semi": [
			"error",
			"always"
		],
		"@typescript-eslint/no-empty-function": "off",
	}
}
