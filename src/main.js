import Vue from 'vue'
import { Button, FormModel, Input, Icon, Layout, Menu} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component(Button.name, Button);

Vue.use(FormModel);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
