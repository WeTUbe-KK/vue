import Vue from 'vue'
import VueRouter from 'vue-router'


import App from './App.vue'
import Index from './components/main_no_sign_in.vue'
import IndexUser from './components/main_sign_in.vue'
import Explore from './components/explore.vue'
import Subscription from './components/subscription.vue'
import Library from './components/library.vue'
import History from './components/history.vue'
import Your_video from './components/your_video.vue'
import Watch_later from './components/watch_later.vue'
import playlist from './components/playlist.vue'
import signIn from './components/signIn.vue'
import signUp from './components/signUp.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'IndexUser',
    path: '/home',
    component: IndexUser
  },
  {
    name: 'explore',
    path: '/explore',
    component: Explore
  },
  {
    name: 'subscription',
    path: '/subscription',
    component: Subscription
  },
  {
    name: 'library',
    path: '/library',
    component: Library
  },
  {
    name: 'history',
    path: '/history',
    component: History
  },
  {
    name: 'your_video',
    path: '/yourvideo',
    component: Your_video
  },
  {
    name: 'watch_later',
    path: '/watchlater',
    component: Watch_later
  },
  {
    name: 'playlist',
    path: '/playlist',
    component: playlist
  },
  {
    name: 'signIn',
    path: '/signin',
    component: signIn
  },
  {
    name: 'signUp',
    path: '/signup',
    component: signUp
  },
];

const router = new VueRouter({ mode: 'history', routes: routes })


new Vue({
  //init router
  router,
  render: h => h(App),
}).$mount('#app')
