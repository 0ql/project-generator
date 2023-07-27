import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
// import { presetScrollbar } from 'unocss-preset-scrollbar'
import { fileURLToPath, URL } from 'node:url'
import { sveltekit } from '@sveltejs/kit/vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [sveltekit(), Unocss({
		extractors: [extractorSvelte],
		presets: [presetUno(), presetIcons()]
	}), ViteYaml()],
	resolve: {
		alias: {
			'src': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
