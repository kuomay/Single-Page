import 'vuetify/styles'
import './assets/main.css'
import './assets/index.css'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi-svg'

import App from './App.vue'
import router from './router'


const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // Set MDI as the default icon set
      sets: {
        mdi,
      },
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
