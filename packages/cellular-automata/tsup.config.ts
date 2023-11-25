import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    dts: true,
    bundle: true,
    format: ["esm"],
    splitting: true,
    outDir: 'lib',
    minify: !options.watch,
    clean: !options.watch,
}))
