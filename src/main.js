import './assets/main.css'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/taptap.css'
import './assets/css/star.sass'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JS
import "./assets/css/styles.css" 
 

// // import "./assets/js/bootstrap.min.js"
// import "./assets/js/swiper.min.js"
import"./assets/js/scripts.js"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './assets/js/createStore'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
