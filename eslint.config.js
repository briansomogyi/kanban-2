import globals from "globals"
import pluginJs from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import pluginPrettier from "eslint-config-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-alert": "error",
      "vue/attribute-hyphenation": "off"
    }
  },
  pluginPrettier
]
