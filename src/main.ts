import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
