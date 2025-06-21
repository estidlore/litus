import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

const tsconfig = "tsconfig.build.json";

const output = {
  generatedCode: {
    constBindings: true
  },
  preserveModules: false,
  sourcemap: true,
  strict: true
};

export default [
  // dts
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es"
    },
    plugins: [dts({ tsconfig })]
  },
  // esm
  {
    input: "src/index.ts",
    output: {
      ...output,
      file: "dist/index.esm.js",
      format: "esm"
    },
    plugins: [typescript({ tsconfig })]
  },
  // cjs
  {
    input: "src/index.ts",
    output: {
      ...output,
      file: "dist/index.cjs.js",
      format: "cjs"
    },
    plugins: [typescript({ tsconfig })]
  }
];
