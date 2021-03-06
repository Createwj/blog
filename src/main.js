import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'

async function bootstrap() {
  const app = createApp(App)
  app.mount('#app')
}
bootstrap()
