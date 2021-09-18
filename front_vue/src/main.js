import { createApp }  from 'vue'
import App from './App.vue'
import routes from './routes.js'
import store from './store'
import axios from 'axios'

const app = createApp(App)
app.use(routes)
app.use(store)
app.mount('#app')

const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}