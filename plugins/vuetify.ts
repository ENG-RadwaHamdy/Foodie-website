// plugins/vuetify.ts

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { md3 } from 'vuetify/blueprints'
import type { ThemeDefinition } from 'vuetify'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

// 🎨 Define a custom theme with primary/secondary colors
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#2F2F2F', 
    secondary: '#5CBBF6', 
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    blueprint: md3,
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    ssr: true,
  })

  nuxtApp.vueApp.use(vuetify)
})
