import Vue from 'vue'
import { Button, FormModel, Input, Icon} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component(Button.name, Button);
// Vue.component(FormModel);

Vue.use(FormModel);
Vue.use(Input);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
