import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

console.log(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
	resolve: {
		alias: [
			{ find: "@adapter", replacement: resolve(__dirname, "/src/adapter") },
			{ find: "@domain", replacement: resolve(__dirname, "/src/domain") },
			{ find: "@components", replacement: resolve(__dirname, "/src/view/components") },
			{ find: "@di", replacement: resolve(__dirname, "/src/di") },
      		{ find: "@hooks", replacement: resolve(__dirname, "/src/view/hooks") },
			{ find: "@vm", replacement: resolve(__dirname, "/src/view/vm") },
		]
	}
});
