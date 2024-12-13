import { defineConfig } from "tsup";

export default defineConfig({
    format: ["cjs"],
    entry: ["./src",],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    outDir: "dist"
});