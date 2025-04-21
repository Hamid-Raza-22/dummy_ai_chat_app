module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
    rules: {
     "valid-jsdoc": "off",
      "object-curly-spacing": "off",  // Ignore spaces after or before `{` and `}`
      "indent": "off",                // Ignore indentation errors
      "no-multi-spaces": "off",        // Allow multiple spaces in code
      "max-len": ["error", { "code": 120 }],  // Allow longer lines up to 120 characters
      "padded-blocks": "off",          // Ignore extra blank lines in blocks
      "no-restricted-globals": ["error", "name", "length"],
      "prefer-arrow-callback": "error",
      "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    },
};
