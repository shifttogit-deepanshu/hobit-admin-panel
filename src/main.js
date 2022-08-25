import Vue from 'vue'
import { Button, FormModel, Input, Icon, Layout, Menu, Form, Spin, notification} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEqeDYGJQOrzEKOs-Xtme63q2H9bg7gRE",
  authDomain: "hobitapp-22cb6.firebaseapp.com",
  databaseURL:
    "https://hobitapp-22cb6-ffa28.asia-southeast1.firebasedatabase.app/",
  projectId: "hobitapp-22cb6",
  storageBucket: "hobitapp-22cb6.appspot.com",
  messagingSenderId: "337979726950",
  appId: "1:337979726950:web:4df575178e050511eea1a7",
  measurementId: "G-SQWFY7RP7K",
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);



Vue.component(Button.name, Button);

Vue.use(FormModel);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Spin);
Vue.use(VueAxios, axios);
Vue.use(VueMoment, {moment});
Vue.use(notification)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  firebaseAuth,
  render: h => h(App)
}).$mount('#app')
