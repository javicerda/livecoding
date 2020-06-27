import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Firebase
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

let app= ''
Firebase.auth().onAuthStateChanged(()=>{
 if(!app){
  app = new Vue({
   BootstrapVue,  
   router,
   store,
   render: h => h(App)
  }).$mount('#app')
 } 
})
