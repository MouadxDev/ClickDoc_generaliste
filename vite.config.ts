import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	preview: {
		port: 42079,
	  },
	server: {
		port: 42080,
	  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ]
})
