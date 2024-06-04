// router Guarders
import router from './router'
import store from './store'

// set whiteList
const whiteList = ['/login']
/* 
全局路由守卫
 */

router.beforeEach(async (to, from, next) => {
  // token 存在,准许进入
  console.log('token', store.getters.token)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // token 不存在,进入白名单
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
