import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Index from "./components/main_no_sign_in.vue";
import IndexUser from "./components/main_sign_in.vue";
import Explore from "./components/explore.vue";
import Subscription from "./components/subscription.vue";
import Library from "./components/library.vue";
import History from "./components/history.vue";
import Your_video from "./components/your_video.vue";
import Watch_later from "./components/watch_later.vue";
import playlist from "./components/playlist.vue";
import addPlaylist from "./components/addPlaylist.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("user-token")) {
    next();
    return;
  }
  router.push({
    name: "Index",
    params: {
      returnTo: to.path,
      query: to.query,
    },
  });
};

const routes = [
  {
    name: "Index",
    path: "/",
    component: Index,
  },
  {
    name: "IndexUser",
    path: "/home",
    component: IndexUser,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "explore",
    path: "/explore",
    component: Explore,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "subscription",
    path: "/subscription",
    component: Subscription,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "library",
    path: "/library",
    component: Library,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "history",
    path: "/history",
    component: History,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "your_video",
    path: "/yourvideo",
    component: Your_video,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "watch_later",
    path: "/watchlater",
    component: Watch_later,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "playlist",
    path: "/playlist",
    component: playlist,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "addPlaylist",
    path: "/addPlaylist",
    component: addPlaylist,
    beforeEnter: ifAuthenticated,
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue({
  //init router
  router,
  render: (h) => h(App),
}).$mount("#app");
