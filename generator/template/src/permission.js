import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
//import notification from "ant-design-vue/es/notification";
import store from "../store";
const loginPath = "/Login";
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(to);
  if (to.path === loginPath) {
    next();
  }
  if (store.getters.token) {
    if (store.getters.menuList.length === 0) {
      console.log(111);
    } else {
      next();
    }
  } else if (to.path !== loginPath) {
    next(loginPath);
  }
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
