// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUdvPLAKPPVPC745xAFiUropnkcXkJ-Xs",
    authDomain: "market-7374f.firebaseapp.com",
    databaseURL: "https://market-7374f.firebaseio.com",
    projectId: "market-7374f",
    storageBucket: "",
    messagingSenderId: "856990471512"
  };
  firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
