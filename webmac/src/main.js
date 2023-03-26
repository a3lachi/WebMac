import { createApp } from 'vue'
import { createStore } from 'vuex';
import module from './store/module'; 


import App from './App.vue'
import router from './router'

import './assets/main.css'


const store = createStore({
    modules: {
      module
    }
});

const app = createApp(App)

app.use(store);

app.use(router)

app.mount('#app')
