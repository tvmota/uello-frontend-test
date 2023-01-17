/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-airbnb",
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    "vue/script-indent": ["error", 2, { baseIndent: 1 }],
    "vue/singleline-html-element-content-newline": ["error", {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
    }],
  },
  overrides: [{
    files: ["*.vue"],
    rules: { indent: "off" },
  }],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
