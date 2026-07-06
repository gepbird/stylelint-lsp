import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import prettierRecommended from "eslint-plugin-prettier/recommended"
import jest from "eslint-plugin-jest"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  {
    files: ["**/*.js?(x)"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.es2015,
        ...globals.node,
      },
    },
    extends: [js.configs.recommended, prettierRecommended],
  },
  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.es2017,
        ...globals.node,
      },
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierRecommended,
    ],
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { accessibility: "no-public" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["**/*.test.ts?(x)"],
    extends: [jest.configs["flat/recommended"]],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  }
)
