import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
// TODO: sandman: Do we need this? If so, change it to use standard JS.
//$("form").submit(false);

