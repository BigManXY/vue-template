var URL = 'http://op.juhe.cn/onebox/' // 测试环境
let path = window.document.location.href
if (path.indexOf('http://localhost:8080') === -1) {
  URL = path.split('/')[0] + '//' + path.split('/')[2] + '/'// 动态获取路径
}
export const WEATHER = URL + 'weather/query'// 发送短信验证码接口
