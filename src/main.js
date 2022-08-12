import Vue from 'vue'
import { Button, FormModel, Input, Icon, Layout, Menu, Form} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.component(Button.name, Button);


Vue.use(FormModel);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(VueAxios, axios);
Vue.use(VueMoment, {moment});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
