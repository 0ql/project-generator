import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { extractorSvelte } from '@unocss/core'
import { resolve } from "path"
import UnoCss from "unocss/vite"
import ViteYaml from '@modyfi/vite-plugin-yaml';

/** @type {import('@sveltejs/kit').Config} */ const config = {
  preprocess: preprocess(),
  kit: {
    prerender: {
      default: true
    },
    vite: {
      resolve: {
        alias: {
          src: resolve('./src')
        }
      },
      plugins: [
        ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
        UnoCss({
          extractors: [extractorSvelte],
          presets: [
            presetUno(),
            presetIcons(),
          ],
        }),
      ],
    },
    adapter: adapter()
  }
};

export default config;
