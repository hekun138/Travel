import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

fastclick.attach(document.body)

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
