/*
 * @Author: yanjikun
 * @Date: 2021-03-25 13:45:13
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-25 15:47:23
 * @Description: 数组的操作方法
 */
/**
 * @description: 将list格式化成树状json
 * @param {*} list:需要格式化的数组
 * @param {*} tree:格式化后的数组
 * @param {*} parentId:第一层的parentId
 * @return {*}
 * @author: yanjikun
 */
export const ListToTree = (list, tree, parentId) => {
  list.forEach(item => {
    if (item.parent === parentId) {
      const child = {
        ...item,
        key: item.id,
        children: [],
        title: item.name,
        scopedSlots: { title: 'title' }
      };
      ListToTree(list, child.children, item.id);
      if (child.children.length <= 0) {
        delete child.children;
      }
      tree.push(child);
    }
  });
};
export const setMenuTree = list => {
  list.forEach(item => {
    item.key = item.id;
    item.title = item.name;
    item.value = item.id;
    item.children.length === 0
      ? (item.slots = {
          icon: 'file'
        })
      : (item.scopedSlots = {
          icon: 'folder-open'
        });
    if (item.children.length !== 0) {
      setMenuTree(item.children);
    }
  });
};
