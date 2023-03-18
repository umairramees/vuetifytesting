/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// StoreS
import store from './store'

const app = createApp(App)

registerPlugins(app)

app.use(store).mount('#app')
