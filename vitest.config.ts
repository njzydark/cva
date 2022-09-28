import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: resolve(__dirname),
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    outputTruncateLength: 1000,
    coverage: {
      reporter: ["text", "json-summary", "json", "html"],
    },
  },
});
