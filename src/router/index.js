import { createRouter, createWebHistory } from "vue-router"
import PromotionView from '../view/pay/PromotionView.vue'

const routes = [
    {
        path: "/pay/promotion",
        name: "PayPromotion",
        component: PromotionView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router