import VueRouter from 'vue-router'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

// 定义路由映射规则
const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

// 生成一个路由的实例
export const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})
