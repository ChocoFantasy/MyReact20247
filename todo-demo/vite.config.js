import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 建立一個開發中的路徑
  // process.env.NODE.ENV => 取得 Node.
  bass: process.env NODE_EW ==='production' ? '/myTodoProject':'/',
  plugins: [react()],
})
