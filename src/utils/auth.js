import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'; const LoginInfoKey = 'loginInfo'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 7 }) // Cookie过期时间为7天
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function saveLoginInfo(userInfo) {
  return Cookies.set(LoginInfoKey, userInfo, { expires: 7 })
}

export function getLoginInfo() {
  return Cookies.get(LoginInfoKey)
}
