<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo"></div>
      <div class="main-title">DEMO</div>
      <div class="header-userinfo">
        <a-dropdown>
          <div class="userinfo">
            <a-avatar style="color: #fff; backgroundcolor: #1890ff">{{
              name
            }}</a-avatar
            ><span class="administrator">{{ name }}</span>
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a href="javascript:void(0)" @click="loginout"
                ><a-icon type="logout" /><span style="margin-left: 10px"
                  >退出登录</span
                >
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <!-- <nav-menu :menulist="systemlist"></nav-menu> -->
    </a-layout-header>
    <a-layout class="content">
      <my-menu></my-menu>
      <a-layout style="padding: 8px">
        <!-- <div class="breadcrumb-header">
          <a-breadcrumb :routes="routes">
            <template slot="itemRender" slot-scope="{ route, routes }">
              <span v-if="routes.indexOf(route) === routes.length - 1" style="color:#253ed6">
                {{ route.breadcrumbName }}
              </span>
              <router-link v-else :to="route.path">
                {{ route.breadcrumbName }}
              </router-link>
            </template>
          </a-breadcrumb>
        </div> -->
        <router-view />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "./Menu.vue";
import { mapMutations } from "vuex";
// import Navmenu from "./Navmenu.vue";
//import { ListToTree } from "./menulist";
export default {
  components: {
    "my-menu": Menu
    // "nav-menu": Navmenu
  },
  data() {
    return {
      collapsed: true,
      treelist: [],
      systemlist: [],
      // name: JSON.parse(window.localStorage.getItem("userInfo")).name.substring(
      //   JSON.parse(window.localStorage.getItem("userInfo")).name.length - 3
      // )，
      name: "管理员"
    };
  },
  computed: {
    title() {
      console.log(this.$route);
      return this.$route.meta.title;
    },
    routes() {
      const routes = [];
      this.$route.matched.forEach(item => {
        if (item.path) {
          routes.push({
            path: item.path,
            breadcrumbName: item.meta.title
          });
        }
      });
      console.log(routes);
      return routes;
    }
  },
  methods: {
    handleMenuClick() {},
    ...mapMutations({
      setToken: "Token"
    }),
    ...mapMutations({
      setmenuLIst: "menuList"
    }),
    loginout() {
      let _this = this;
      this.$confirm({
        title: "提示",
        content: "真的要注销登录吗",
        cancelText: "取消",
        okText: "确定",
        onOk() {
          localStorage.removeItem("token");
          _this.setToken({});
          _this.setmenuLIst([]);
          window.location.href = "/";
          return new Promise((resolve, reject) => {
            setTimeout(reject, 1000);
          }).catch(() => console.log("Oops errors!"));
        },
        onCancel() {},
        class: "test"
      });
    }
  },
  created() {
    // getMenuList().then(res => {
    //   console.log(res);
    //   ListToTree(res.result, this.treelist, "100");
    //   ListToTree(res.result, this.systemlist, "100101");
    // });
  },
  mounted() {
    // ListToTree(this.list, this.treelist, "100");
  }
};
</script>

<style lang="less">
#components-layout-demo-top-side-2 {
  height: 100%;
  .logo {
    width: 80px;
    height: 64px;
    //background-image: url("../../assets/img/rydLogo.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    // margin: 16px 28px 16px 0;
    float: left;
  }
  .header {
    padding: 0;
    background-color: #fff;
  }
  .content {
    min-height: 836px;
    height: 100%;
  }
  .main-title {
    float: left;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 5px;
    padding-left: 30px;
    color: rgba(37, 62, 214, 1);
    line-height: 64px;
  }
  .header-userinfo {
    float: right;
    margin-right: 50px;
    .userinfo {
      width: 120px;
      height: 64px;
      line-height: 64px;
      padding: 0 10px;
      cursor: pointer;
      .administrator {
        margin-left: 10px;
      }
    }
  }
  .header-userinfo:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
  .breadcrumb-header {
    height: 52px;
    background-color: #fff;
    margin-bottom: 10px;
    padding-left: 15px;
    /deep/.ant-breadcrumb {
      line-height: 52px;
    }
  }
}
</style>
