import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './', // Especifica la ruta base para el proyecto
  plugins: [vue()],
  build: {
    outDir: 'dist', // Especifica el directorio de salida
    rollupOptions: {
      output: {
        // Configuración personalizada para dividir chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Divide los módulos de node_modules en chunks separados
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Aumenta el límite de tamaño de chunk para advertencias (en KB)
  }
});
