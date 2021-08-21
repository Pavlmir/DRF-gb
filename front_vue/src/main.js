import { createApp }  from 'vue'
import App from './App.vue'
import routes from './routes.js'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App)
app.use(routes)
app.use(store)
app.mount('#app')

