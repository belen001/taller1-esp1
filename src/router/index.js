import { createRouter, createWebHistory } from 'vue-router';
import PromotionView from '../view/pay/PromotionView.vue';
import HomePage from '../view/HomePage.vue';
import SearchResults from "../view/SearchResults.vue";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/pay/promotion',
    name: 'PayPromotion',
    component: PromotionView,
  },
  {
    path: '/SearchResults',
    name: 'SearchResults',
    component: SearchResults,
    props: (route) => ({ query: route.query.q })
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
