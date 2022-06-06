import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Root from './App.vue';
import urql from '@urql/vue';
import components from '@/components/UI/index.js'


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(urql, {
    url: 'http://localhost:8055/graphql',
  });
  
app.use(createPinia())
app.use(router)

components.forEach(component => {
  app.component(component.name, component)
});

app.mount('#app')
