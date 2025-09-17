import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Assuming you have this from Vite setup; add if missing
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});