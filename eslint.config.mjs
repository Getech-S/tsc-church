import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";


// 👇 This simple config tells ESLint to ignore every file in the project
export default [
  {
    ignores: ["**/*"],
  },
];