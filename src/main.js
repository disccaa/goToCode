import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Root from './App.vue';
import urql from '@urql/vue';


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(urql, {
    url: 'http://localhost:8055/graphql',
  });
  
app.use(createPinia())
app.use(router)

app.mount('#app')
