import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import { loadEnv } from "vite";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const env = loadEnv("mock", process.cwd(), "");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: env.VITE_BASENAME || "./",
  server: {
    port: 3000
  }
})
