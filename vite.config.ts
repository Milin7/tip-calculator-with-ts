import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/Milin7/tip-calculator-with-ts/",
})
