import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  esbuild: {
    target: 'es2020', // Set the target to ES2020
    jsxFactory: 'React.createElement', // Specify React's JSX factory function
    jsxFragment: 'React.Fragment' // Specify React's JSX fragment syntax
  }
});
