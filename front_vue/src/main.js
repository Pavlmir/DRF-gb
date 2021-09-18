import { createApp }  from 'vue'
import App from './App.vue'
import routes from "./router/routes.js"

createApp(App).use(routes).mount('#app')
