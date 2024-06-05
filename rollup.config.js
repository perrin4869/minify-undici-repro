import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import minify from "rollup-plugin-tdewolff-minify";

export default {
    output: { format: "esm", sourcemap: false }, // keep the resulting module minimal
    plugins: [
        resolve({
            preferBuiltins: true,
            exportConditions: ["node"], // uuid
        }),
        commonjs({ include: /node_modules/ }),
        // minify(),
    ],
};
