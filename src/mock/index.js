import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Users from './data/user'
// import { Books } from './data/book'
// let _Users = Users
// let _Books = Books

export default {

  init () {
    let mock = new MockAdapter(axios)

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 拦截登录请求
    mock.onPost('/login').reply(arg => {
      let {username, password} = JSON.parse(arg.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = Users.some(u => {
            if (u.username === username && u.password === password) {
              // 复制出一个User后，删除password属性后，返回给前端
              user = JSON.parse(JSON.stringify(u))
              delete user.password
              return true
            }
          })

          if (hasUser) {
            resolve([200, {code: 200, msg: '请求成功', user}])
          } else {
            resolve([200, {code: 500, msg: '账号或密码错误'}])
          }
        }, 1000)
      })
    })

    mock.onGet('/online').reply(arg => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            tableData: [
              {
                'online': 0,
                'logTime': '2017-06-29 10:00:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:01:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:02:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:03:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:04:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:05:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:06:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:07:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:08:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:09:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:10:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:11:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:12:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:13:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:14:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:15:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:16:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:17:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:18:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:19:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:20:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:21:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:22:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:23:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:24:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:25:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:26:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:27:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:28:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 10:29:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:30:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:31:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:32:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:33:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:34:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:35:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:36:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:37:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:38:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:39:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 10:40:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:41:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:42:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:43:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:44:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:45:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:46:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:47:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:48:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:49:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:50:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:51:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:52:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 10:53:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 10:54:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:55:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:56:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 10:57:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:58:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 10:59:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:00:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:01:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:02:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:03:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:04:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:05:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:06:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:07:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 11:08:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 11:09:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:10:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:11:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:12:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:13:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:14:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:15:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:16:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:17:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:18:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:19:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:20:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:21:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:22:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:23:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:24:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:25:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:26:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:27:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:28:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:29:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:30:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:31:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:32:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:33:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:34:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:35:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:36:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:37:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 11:38:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 11:39:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:40:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 11:41:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 11:42:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:43:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:44:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:45:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:46:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:47:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:48:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:49:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:50:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:51:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:52:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:53:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:54:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:55:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:56:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:57:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:58:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 11:59:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 12:00:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 12:01:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 12:02:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:03:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:04:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:05:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:06:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:07:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:08:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:09:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:10:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:11:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:12:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:13:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:14:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:15:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:16:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:17:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:18:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:19:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:20:00'
              },
              {
                'online': 0,
                'logTime': '2017-06-29 12:21:00'
              },
              {
                'online': 26,
                'logTime': '2017-06-29 12:45:00'
              },
              {
                'online': 33,
                'logTime': '2017-06-29 12:46:00'
              },
              {
                'online': 54,
                'logTime': '2017-06-29 12:47:00'
              },
              {
                'online': 54,
                'logTime': '2017-06-29 12:48:00'
              },
              {
                'online': 54,
                'logTime': '2017-06-29 12:49:00'
              },
              {
                'online': 45,
                'logTime': '2017-06-29 12:50:00'
              },
              {
                'online': 45,
                'logTime': '2017-06-29 12:51:00'
              },
              {
                'online': 45,
                'logTime': '2017-06-29 12:52:00'
              },
              {
                'online': 42,
                'logTime': '2017-06-29 12:53:00'
              },
              {
                'online': 40,
                'logTime': '2017-06-29 12:54:00'
              },
              {
                'online': 38,
                'logTime': '2017-06-29 12:55:00'
              },
              {
                'online': 37,
                'logTime': '2017-06-29 12:56:00'
              },
              {
                'online': 36,
                'logTime': '2017-06-29 12:57:00'
              },
              {
                'online': 38,
                'logTime': '2017-06-29 12:58:00'
              },
              {
                'online': 33,
                'logTime': '2017-06-29 12:59:00'
              },
              {
                'online': 36,
                'logTime': '2017-06-29 13:00:00'
              },
              {
                'online': 31,
                'logTime': '2017-06-29 13:01:00'
              },
              {
                'online': 33,
                'logTime': '2017-06-29 13:02:00'
              },
              {
                'online': 31,
                'logTime': '2017-06-29 13:03:00'
              },
              {
                'online': 30,
                'logTime': '2017-06-29 13:04:00'
              },
              {
                'online': 28,
                'logTime': '2017-06-29 13:05:00'
              },
              {
                'online': 31,
                'logTime': '2017-06-29 13:06:00'
              },
              {
                'online': 31,
                'logTime': '2017-06-29 13:07:00'
              },
              {
                'online': 29,
                'logTime': '2017-06-29 13:08:00'
              },
              {
                'online': 30,
                'logTime': '2017-06-29 13:09:00'
              },
              {
                'online': 28,
                'logTime': '2017-06-29 13:10:00'
              },
              {
                'online': 27,
                'logTime': '2017-06-29 13:11:00'
              },
              {
                'online': 26,
                'logTime': '2017-06-29 13:12:00'
              },
              {
                'online': 28,
                'logTime': '2017-06-29 13:13:00'
              },
              {
                'online': 26,
                'logTime': '2017-06-29 13:14:00'
              },
              {
                'online': 26,
                'logTime': '2017-06-29 13:15:00'
              },
              {
                'online': 23,
                'logTime': '2017-06-29 13:16:00'
              },
              {
                'online': 22,
                'logTime': '2017-06-29 13:17:00'
              },
              {
                'online': 25,
                'logTime': '2017-06-29 13:18:00'
              },
              {
                'online': 27,
                'logTime': '2017-06-29 13:19:00'
              },
              {
                'online': 28,
                'logTime': '2017-06-29 13:20:00'
              },
              {
                'online': 26,
                'logTime': '2017-06-29 13:21:00'
              },
              {
                'online': 22,
                'logTime': '2017-06-29 13:22:00'
              },
              {
                'online': 29,
                'logTime': '2017-06-29 13:23:00'
              },
              {
                'online': 28,
                'logTime': '2017-06-29 13:24:00'
              },
              {
                'online': 27,
                'logTime': '2017-06-29 13:25:00'
              },
              {
                'online': 25,
                'logTime': '2017-06-29 13:26:00'
              },
              {
                'online': 24,
                'logTime': '2017-06-29 13:27:00'
              },
              {
                'online': 27,
                'logTime': '2017-06-29 13:28:00'
              },
              {
                'online': 27,
                'logTime': '2017-06-29 13:29:00'
              },
              {
                'online': 24,
                'logTime': '2017-06-29 13:30:00'
              },
              {
                'online': 29,
                'logTime': '2017-06-29 13:31:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 13:32:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 13:33:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 13:34:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 13:35:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 13:36:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 13:37:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 13:38:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 13:39:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 13:40:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 13:41:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 13:42:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 13:43:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 13:44:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 13:45:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 13:46:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 13:47:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 13:48:00'
              },
              {
                'online': 1,
                'logTime': '2017-06-29 13:49:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 13:50:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 13:51:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 13:52:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 13:53:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 13:54:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 13:55:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 13:56:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 13:57:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 13:58:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 13:59:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 14:00:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 14:01:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 14:02:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 14:03:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 14:04:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 14:05:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 14:06:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 14:07:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 14:08:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 14:09:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 14:10:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 14:11:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 14:12:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 14:13:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 14:14:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 14:15:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 14:16:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 14:17:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 14:18:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 14:19:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:20:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:21:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:22:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:23:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:24:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:25:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:26:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:27:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:28:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:29:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:30:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:31:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:32:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:33:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:34:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:35:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:36:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:37:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:38:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:39:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:40:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:41:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:42:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 14:43:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:44:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:45:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:46:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:47:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 14:48:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:49:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:50:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:51:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:52:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:53:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:54:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:55:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:56:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:57:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:58:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 14:59:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:00:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:01:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:02:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:03:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:04:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:05:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:06:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:07:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:08:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:09:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:10:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:11:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:12:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:13:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:14:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:15:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:16:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:17:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:18:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:19:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:20:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:21:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:22:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 15:23:00'
              },
              {
                'online': 2,
                'logTime': '2017-06-29 15:24:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:25:00'
              },
              {
                'online': 3,
                'logTime': '2017-06-29 15:26:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:27:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:28:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:29:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:30:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:31:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:32:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:33:00'
              },
              {
                'online': 4,
                'logTime': '2017-06-29 15:34:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:35:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:36:00'
              },
              {
                'online': 5,
                'logTime': '2017-06-29 15:37:00'
              },
              {
                'online': 6,
                'logTime': '2017-06-29 15:38:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 15:39:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 15:40:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 15:41:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 15:42:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 15:43:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 15:44:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 15:45:00'
              },
              {
                'online': 7,
                'logTime': '2017-06-29 15:46:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 15:47:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 15:48:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 15:49:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 15:50:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 15:51:00'
              },
              {
                'online': 9,
                'logTime': '2017-06-29 15:52:00'
              },
              {
                'online': 8,
                'logTime': '2017-06-29 15:53:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 15:54:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 15:55:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 15:56:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 15:57:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 15:58:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 15:59:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:00:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 16:01:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 16:02:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:03:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:04:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:05:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:06:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:07:00'
              },
              {
                'online': 13,
                'logTime': '2017-06-29 16:08:00'
              },
              {
                'online': 13,
                'logTime': '2017-06-29 16:09:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:10:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:11:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:12:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:13:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:14:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:15:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:16:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:17:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:18:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:19:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:20:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:21:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:22:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:23:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:24:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:25:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:26:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:27:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:28:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:29:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:30:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:31:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:32:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:33:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:34:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:35:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:36:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:37:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:38:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:39:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:40:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:41:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:42:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:43:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:44:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:45:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:46:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:47:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:48:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:49:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:50:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:51:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:52:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:53:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:54:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:55:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:56:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 16:57:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:58:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 16:59:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:00:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:01:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:02:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:03:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:04:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:05:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:06:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:07:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:08:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:09:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:10:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:11:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:12:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:13:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:14:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:15:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:16:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:17:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:18:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:19:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:20:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:21:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:22:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:23:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:24:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:25:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:26:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:27:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:28:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:29:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:30:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:31:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 17:32:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 17:33:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:34:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:35:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:36:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:37:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:38:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:39:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:40:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:41:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:42:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:43:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:44:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:45:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:46:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:47:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:48:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:49:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:50:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:51:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:52:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:53:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:54:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:55:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:56:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:57:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:58:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 17:59:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:00:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:01:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:02:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:03:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:04:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:05:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:06:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:07:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:08:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:09:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:10:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:11:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:12:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:13:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:14:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:15:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:16:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 18:17:00'
              },
              {
                'online': 10,
                'logTime': '2017-06-29 18:18:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:19:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:20:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:21:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:22:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:23:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:24:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:25:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:26:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:27:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:28:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:29:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:30:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:31:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:32:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:33:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:34:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:35:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:36:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:37:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:38:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:39:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:40:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:41:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:42:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:43:00'
              },
              {
                'online': 13,
                'logTime': '2017-06-29 18:44:00'
              },
              {
                'online': 13,
                'logTime': '2017-06-29 18:45:00'
              },
              {
                'online': 13,
                'logTime': '2017-06-29 18:46:00'
              },
              {
                'online': 13,
                'logTime': '2017-06-29 18:47:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:48:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:49:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:50:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:51:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:52:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:53:00'
              },
              {
                'online': 11,
                'logTime': '2017-06-29 18:54:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:55:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:56:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:57:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:58:00'
              },
              {
                'online': 12,
                'logTime': '2017-06-29 18:59:00'
              }
            ]
          }])
        }, 1000)
      })
    })

    // mock.onPost('/user/profile').reply(function (arg) {
    //   let {name, email} = JSON.parse(arg.data)
    //   return new Promise((resolve, reject) => {
    //     let user = LoginUsers[0]
    //     user.name = name
    //     user.email = email
    //     resolve([200, {code: 200, msg: '请求成功', user}])
    //   })
    // })
    //
    // // 获取用户列表
    // mock.onGet('/user/list').reply(Config => {
    //   let {name} = Config.params
    //   let mockUsers = _Users.filter(user => {
    //     if (name && user.name.indexOf(name) === -1) return false
    //     return true
    //   })
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         users: mockUsers
    //       }])
    //     }, 500)
    //   })
    // })
    //
    // // 获取用户列表（分页）
    // mock.onGet('/book/list').reply(Config => {
    //   let {page, name} = Config.params
    //   let mockBooks = _Books.filter(book => {
    //     if (name && book.name.indexOf(name) === -1) return false
    //     return true
    //   })
    //   let total = mockBooks.length
    //   mockBooks = mockBooks.filter((u, index) => index < 10 * page && index >= 10 * (page - 1))
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         total: total,
    //         books: mockBooks
    //       }])
    //     }, 500)
    //   })
    // })
    //
    // // 删除用户
    // mock.onGet('/book/delete').reply(Config => {
    //   let {id} = Config.params
    //   _Books = _Books.filter(b => b.id !== id)
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '删除成功'
    //       }])
    //     }, 500)
    //   })
    // })
    //
    // // 编辑图书
    // mock.onGet('/book/edit').reply(Config => {
    //   let {id, name, author, description, publishAt} = Config.params
    //   _Books.some(u => {
    //     if (u.id === id) {
    //       u.name = name
    //       u.author = author
    //       u.description = description
    //       u.publishAt = publishAt
    //       return true
    //     }
    //   })
    //
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '编辑成功'
    //       }])
    //     }, 500)
    //   })
    // })
    //
    // // 批量删除图书
    // mock.onGet('/book/batchdelete').reply(Config => {
    //   let {ids} = Config.params
    //   ids = ids.split(',')
    //   _Books = _Books.filter(u => !ids.includes(u.id))
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '删除成功'
    //       }])
    //     }, 500)
    //   })
    // })
    //
    // // 新增图书
    // mock.onGet('/book/add').reply(Config => {
    //   let {name, author, description, publishAt} = Config.params
    //   _Books.push({
    //     name: name,
    //     author: author,
    //     description: description,
    //     publishAt: publishAt
    //   })
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '新增成功'
    //       }])
    //     }, 500)
    //   })
    // })
  }

}
