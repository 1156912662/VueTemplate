/*
 * @Author: yanjikun
 * @Date: 2020-10-12 11:26:43
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-24 17:33:05
 * @Description: file content
 */
import Vue from 'vue';
import {
  Button,
  Col,
  Row,
  Form,
  Input,
  Icon,
  Layout,
  Menu,
  notification,
  message,
  Spin,
  Dropdown,
  Avatar,
  Space,
  Table,
  Modal,
  ConfigProvider,
  Pagination,
  Divider,
  Descriptions,
  Timeline,
  Collapse,
  Select,
  Tag,
  Upload,
  Tooltip,
  PageHeader,
  Breadcrumb,
  InputNumber,
  Cascader,
  Switch,
  DatePicker,
  Tree
} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Spin);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Space);
Vue.use(Table);
Vue.use(Modal);
Vue.use(ConfigProvider);
Vue.use(Pagination);
Vue.use(Divider);
Vue.use(Descriptions);
Vue.use(Timeline);
Vue.use(Collapse);
Vue.use(Select);
Vue.use(Tag);
Vue.use(Upload);
Vue.use(Tooltip);
Vue.use(PageHeader);
Vue.use(Breadcrumb)
  .use(InputNumber)
  .use(Cascader)
  .use(Switch)
  .use(DatePicker)
  .use(Tree);
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
