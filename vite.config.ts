import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Good-Chimney-Services/", // Set this to your repository name
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});