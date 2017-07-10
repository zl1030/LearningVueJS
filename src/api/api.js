import axios from 'axios'

// 后台登录地址
let base = ''

// let serviceBase = 'http://192.168.1.124:8080/webtools-sas/query/v1/'

// 登录
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

export const requestOnline = params => {
  // var {beginDate, endDate, gameId, serverId, channelId} = params
  // return axios.post(`${serviceBase}/webtools-sas/query/v1/online/${beginDate},${endDate}/${gameId}/${serverId}/${channelId}/`).then(res => res.data)

  return axios.get(`${base}/online`, {params: {}}).then(res => res.data)
}

export const reqSaveUserProfile = params => { return axios.post(`${base}/user/profile`, params).then(res => res.data) }

export const reqGetUserList = params => { return axios.get(`${base}/user/list`, {params: params}) }

export const reqGetBookListPage = params => { return axios.get(`${base}/book/list`, {params: params}) }

export const reqDeleteBook = params => { return axios.get(`${base}/book/delete`, {params: params}) }

export const reqEditBook = params => { return axios.get(`${base}/book/edit`, {params: params}) }

export const reqBatchDeleteBook = params => { return axios.get(`${base}/book/batchdelete`, {params: params}) }

export const reqAddBook = params => { return axios.get(`${base}/book/add`, {params: params}) }
