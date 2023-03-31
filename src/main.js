import { createApp } from 'vue'
import { createStore } from 'vuex';
import store from './store/store'; 


import App from './App.vue'
import router from './router'

import './assets/main.css'


const myStore = createStore({
    modules: {
      store
    }
});

const app = createApp(App)

app.use(myStore);

app.use(router)

app.mount('#app')
