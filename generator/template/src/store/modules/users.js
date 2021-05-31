/*
 * @Author: yanjikun
 * @Date: 2020-10-12 11:33:39
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-05-31 15:47:17
 * @Description: file content
 */
// import { GetMenu } from "../../api/user";
// import { ListToTree } from "../../utils/getmenu";
const Users = {
  state: {
    // 初始化
    token:
      window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token")),
    menuList: [
      {
        key: "1",
        title: "首页",
        value: "首页",
        pagePath: "Main",
        iconUrl: "home"
      }
    ]
  },
  mutations: {
    // 这里把事件名统一抽离到constants.js统一管理，方便维护，避免重复。
    // 当然，你也可以不这么写。。
    // mutation事件接受的第一个参数是当前模块的state对象
    // 第二个参数是提交事件时传递的附加参数
    menuList(state, menuList) {
      state.menuList = [...menuList];
    },
    Token(state, token) {
      state.token = token;
    }
  },
  actions: {
    // setMenuList({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     GetMenu()
    //       .then(res => {
    //         if (res.data.code === -6) {
    //           reject();
    //         }
    //         console.log(res);
    //         const menuList = [];
    //         ListToTree(res.data.data, menuList, "100");
    //         commit("menuList", menuList);
    //         resolve(res);
    //       })
    //       .catch(err => {
    //         reject(err);
    //       });
    //   });
    //   //同上注释，num为要变化的形参
    // }
  },
  getters: {}
};

export default Users;
