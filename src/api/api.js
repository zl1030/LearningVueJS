import axios from 'axios'

// 后台登录地址
let base = ''

// 正式数据接口地址
let serviceBase = 'http://192.168.1.124:8080/webtools-sas/query/v1/'
// let serviceBase = 'http://192.168.1.124:8080/webtools-sas/query/v1/online/2017-07-01,2017-7-10/1000/1/20/'

// 接口: 登录
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

// 接口：查在线人数
export const requestOnline = params => {
  // 按数据接口协议拼请求地址
  var {beginDate, endDate, gameId, serverId, channelId} = params
  var url = `${serviceBase}online/${beginDate},${endDate}/${gameId}/${channelId}/${serverId}/`
  console.log('url:' + url)
  return axios.get(url).then(function (res) {
    return {status: 200, data: res.data}
  }).catch(function (error) {
    if (error.response) {
      console.log('error:' + error.response.status)
      return {status: error.response.status, data: null}
    }
  })

  // return axios.get(`${base}/online`, {params: {}}).then(res => res.data)
}

export const reqSaveUserProfile = params => { return axios.post(`${base}/user/profile`, params).then(res => res.data) }

export const reqGetUserList = params => { return axios.get(`${base}/user/list`, {params: params}) }

export const reqGetBookListPage = params => { return axios.get(`${base}/book/list`, {params: params}) }

export const reqDeleteBook = params => { return axios.get(`${base}/book/delete`, {params: params}) }

export const reqEditBook = params => { return axios.get(`${base}/book/edit`, {params: params}) }

export const reqBatchDeleteBook = params => { return axios.get(`${base}/book/batchdelete`, {params: params}) }

export const reqAddBook = params => { return axios.get(`${base}/book/add`, {params: params}) }
