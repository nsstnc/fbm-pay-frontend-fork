// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "_redirects",
          dest: "",
        },
      ],
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://fbm-pay.com",
        changeOrigin: true,
      },
    },
  },
})
