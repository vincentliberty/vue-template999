import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {   
    proxy: {   
        '/api': {    //这里的/api表示的意思是以/api开头的才生效 ->刷下面的重点
            target: "http://localhost:8088",
            changeOrigin: true,   //如果接口跨域这里就要这个参数配置
        }
   }
  }
})
