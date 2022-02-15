/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import axios from 'axios'; // 引入axios
import QueryString from 'qs';

import { Message } from 'element-ui';

const apiAddress = process.env.VUE_APP_BASE_API;
axios.defaults.timeout = 180000;
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
const service = axios.create({
  baseURL: '/api',
  timeout: 180000,
  withCredentials: true,
});

axios.interceptors.request.use(
  // eslint-disable-next-line arrow-body-style
  config => {
    // 表示在配置中的设置头消息的字段Authorization为从本地获取的token值
    // config.headers.Authorization = (`Bearer${window.sessionStorage.getItem('token')}`);
    return config;
  },
  // eslint-disable-next-line arrow-body-style
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  // eslint-disable-next-line arrow-body-style
  response => {
    return response;
  },
  error => {
    console.log(error);
    if (error.message.includes('timeout')) {
      Message({
        message: '网络超时',
        type: 'error',
      });
      return Promise.reject(error);
    }
    Message({
      message: '服务器错误',
      type: 'error',
    });
    return Promise.reject(error);
  },
);

export function get(url, params = {}) {
  let str = '';
  Object.keys(params).forEach((key) => {
    if (params[key] != null && params[key] !== '') {
      str = `${str}&${key}=${params[key]}`;
    }
  });
  if (str) {
    // eslint-disable-next-line prefer-template
    str = '?' + str.slice(1);
  }
  str = url + str;
  // eslint-disable-next-line no-use-before-define
  return ajax('get', encodeURI(str), {});
}
export function gets(url, params) {
  let str = '';
  if (params) {
    // eslint-disable-next-line prefer-template
    str = '?' + params;
  }
  str = url + str;
  return ajax('get', encodeURI(str), {});
}
export function post(url, params) {
  return ajax('post', url, params);
}
export function put(url, params) {
  return ajax('put', url, params);
}
export function deletefn(url, params) {
  return ajax('delete', url + params);
}

function ajax(type = 'get', url = '', params = {}) {
  return new Promise((resolve, reject) => {
    let isMessage = true;
    if (params.isMessage != null) {
      isMessage = params.isMessage;
      delete params.isMessage;
    }
    axios[type](apiAddress + url, params)
      .then(res => {
        if (res && res.data && res.data.code === -401) {
          window.sessionStorage.clear();
          window.localStorage.clear();
          // eslint-disable-next-line no-restricted-globals
          location.href = location.origin + '/#/login';
        } else if (res && res.data && res.data.code !== 0) {
          /* Message({
            message: res.data.msg,
            type: 'error',
          });
          reject(res.data); */
        } else {
          // 做了增删改后前端提示
          if (isMessage) {
            // prompt(type, url);
          }
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

function prompt(type, url) {
  if (type === 'post' && url === '/api/v1/auth/') {
    Message({
      message: '登录成功',
      type: 'success',
    });
    // eslint-disable-next-line no-useless-return
    return;
  }
  if (type === 'delete') {
    Message({
      message: '删除成功',
      type: 'success',
    });
    return;
  }
  if (type === 'post') {
    Message({
      message: '提交成功',
      type: 'success',
    });
  }
  if (type === 'put') {
    Message({
      message: '修改成功',
      type: 'success',
    });
    // eslint-disable-next-line no-useless-return
    return;
  }
}
