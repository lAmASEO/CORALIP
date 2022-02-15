import {
  // eslint-disable-next-line no-unused-vars
  gets, get, post, put, deletefn,
} from './http';

export const postLogin = res => post('/api/v1/auth/login', res); // 登录
export const getInitEnum = res => get('/api/v1/init/enum', res); // 获取枚举数据

// 管理员
// 管理员 无法添加如何角色 只能修改用户角色 代理商有使用记录 无法修改角色 单手机号对应单账号
// 用户管理页面

export const getAdminUser = res => get('/api/v1/r3/user/', res); // 查询用户个人信息
export const getAdminUserQuery = res => get('/api/v1/r3/user/query', res); // 查询用户列表
export const putAdminUserPassword = res => put('/api/v1/r3/user/password', res); // 修改用户密码
export const putAdminUserRole = res => put('/api/v1/r3/user/role', res); // 修改用户角色
export const putAdminUserStatus = res => put('/api/v1/r3/user/status', res); // 修改用户状态

// 套餐页面
export const getAdminComboDynamicQuery = res => get('/api/v1/r3/comboDynamic/query', res); // 获取动态代理套餐
export const postAdminComboDynamic = res => post('/api/v1/r3/comboDynamic/', res); // 添加 动态代理 套餐
export const putAdminComboDynamicPriority = res => put('/api/v1/r3/comboDynamic/priority', res); // 修改 动态代理套餐 优先级
export const putAdminComboDynamicAvailable = res => put('/api/v1/r3/comboDynamic/available', res); // 修改可用性
export const putAdminComboDynamicShow = res => put('/api/v1/r3/comboDynamic/show', res); // 修改显示

// 动态代理 白名单 页面
export const getAdminDynamicWhiteListQuery = res => get('/api/v1/r3/dynamicWhiteList/query', res); // 查询动态代理 白名单
export const postAdminDynamicWhiteList = res => post('/api/v1/r3/dynamicWhiteList/', res); // 添加 动态代理 白名单
export const delAdminDynamicWhiteList = res => deletefn('/api/v1/r3/dynamicWhiteList/', res); // 删除 动态代理 白名单
// 查询代理账号 页面
export const getAdminDynamicAccount = res => get('/api/v1/r3/dynamicAccount/query', res); // 查询代理账号 - 动态代理
// 查询代理商分配记录 页面
export const getAdminAgentAssignRecordDynamicIP = res => get('/api/v1/r3/agentAssignRecordDynamicIP/query', res); // 查询代理商分配记录 - 动态代理套餐
// 查询流量记录 页面
export const getAdminDynamicFlowRecord = res => get('/api/v1/r3/dynamicFlowRecord/query', res); // 查询流量记录 - 动态代理
// 查询订单 页面
export const getAdminOrder = res => get('/api/v1/r3/order/query', res); // 查询订单

//
//
// 普通用户角色页面
export const getUserUser = res => get('/api/v1/r0/user/', res); // 查询用户个人信息
export const putUserPassword = res => put('/api/v1/r0/user/password', res); // 修改密码
// 用户角色 IP白名单
export const getUserdynamicWhiteList = res => get('/api/v1/r0/dynamicWhiteList/query', res); // 查询动态代理 白名单
export const postUserDynamicWhiteList = res => post('/api/v1/r0/dynamicWhiteList/', res); // 添加 动态代理 白名单
export const delUserDynamicWhiteList = res => deletefn('/api/v1/r0/dynamicWhiteList/', res); // 删除 动态代理 白名单
// 查询流量记录 页面
export const getUserdynamicFlowRecord = res => get('/api/v1/r0/dynamicFlowRecord/query', res); // 查询代理账号 - 动态代理
// 查询代理账号 页面
export const getUserDynamicAccount = res => get('/api/v1/r0/dynamicAccount/query', res); // 查询代理账号 - 动态代理
// 查询订单 页面
export const getUserOrder = res => get('/api/v1/r0/order/query', res); // 查询订单

//
//
// 代理商角色页面
// 用户管理页面
export const getAgentUser = res => get('/api/v1/r2/user/', res); // 查询用户个人信息
export const getAgentUserQuery = res => get('/api/v1/r2/user/query', res); // 查询用户列表
export const putAgentUserPassword = res => put('/api/v1/r2/user/password', res); // 修改用户密码
export const putAgentUserStatus = res => put('/api/v1/r2/user/status', res); // 修改用户状态

// 动态代理 白名单 页面
export const getAgentDynamicWhiteListQuery = res => get('/api/v1/r2/dynamicWhiteList/query', res); // 查询动态代理 白名单
export const postAgentDynamicWhiteList = res => post('/api/v1/r2/dynamicWhiteList/', res); // 添加 动态代理 白名单
export const delAgentDynamicWhiteList = res => deletefn('/api/v1/r2/dynamicWhiteList/', res); // 删除 动态代理 白名单
// 查询代理账号 页面
export const getAgentDynamicAccount = res => get('/api/v1/r2/dynamicAccount/query', res); // 查询代理账号 - 动态代理
// 查询代理商分配记录 页面
export const getAgentAgentAssignRecordDynamicIP = res => get('/api/v1/r2/agentAssignRecordDynamicIP/query', res); // 查询代理商分配记录 - 动态代理套餐
// 查询流量记录 页面
export const getAgentDynamicFlowRecord = res => get('/api/v1/r2/dynamicFlowRecord/query', res); // 查询流量记录 - 动态代理

//
//
// 代理商-用户角色页面 没有接口暂时无法对接数据
export const getAgentUserUser = res => get('/api/v1/r1/user/', res); // 查询用户个人信息
export const putAgentUserUserPassword = res => put('/api/v1/r1/user/password', res); // 修改密码
// 用户角色 IP白名单
export const getAgentUserDynamicWhiteList = res => get('/api/v1/r1/dynamicWhiteList/query', res); // 查询动态代理 白名单
export const postAgentUserDynamicWhiteList = res => post('/api/v1/r1/dynamicWhiteList/', res); // 添加 动态代理 白名单
export const delAgentUserDynamicWhiteList = res => deletefn('/api/v1/r1/dynamicWhiteList/', res); // 删除 动态代理 白名单
// 查询流量记录 页面
export const getAgentUserDynamicFlowRecord = res => get('/api/v1/r1/dynamicFlowRecord/query', res); // 查询代理账号 - 动态代理
// 查询代理账号 页面
export const getAgentUserDynamicAccount = res => get('/api/v1/r1/dynamicAccount/query', res); // 查询代理账号 - 动态代理
// 查询订单 页面
export const getAgentUserOrder = res => get('/api/v1/r0/order/query', res); // 查询订单

// 官网
export const comboDynamicQuery = res => get('/api/v1/comboDynamic/query', res); // 获取套餐
export const comboeRgister = res => post('/api/v1/auth/register', res); // 注册
export const getApip = res => get('/api/v1/getIP', res); // 获取ip
