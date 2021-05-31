/*
 * @Author: yanjikun
 * @Date: 2021-03-25 13:51:59
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-25 15:34:01
 * @Description: 建筑管理api
 */
import { axios } from '@/utils/request';
import api from './index';
export function allBuilds(parameter) {
  return axios({
    url: api.allbuilds,
    method: 'get',
    params: parameter
  });
}
