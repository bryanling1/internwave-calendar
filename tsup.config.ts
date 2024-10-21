import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"], // Build for commonJS and ESmodules
  splitting: false,
  outDir: "G:/uni/uwwave/code/client/desktop/public/extensions/calendar",
  noExternal: [ /(.*)/ ],
  target: "node18"
});