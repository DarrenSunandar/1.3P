import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

const app = createApp(App)

// Use Vue Router
app.use(router)

app.mount('#app')
