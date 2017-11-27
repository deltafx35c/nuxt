import Vue from 'vue'
import VueCookie from 'vue-cookie'
import Settings from '../settings'

// 一级域名
const COOKIE_DOMAIN = Settings.cookieDomain

// 封装localStorage，兼容无痕模式/隐私模式
let storage = {
  // 是否支持cookie
  isSupportCookie : navigator.cookieEnabled,
  // 是否支持localStorage
  isSupportLocalStorage : (function(){
    try {
        localStorage.setItem('localStorageTestValue', 'localStorageTestValue')
        localStorage.removeItem('localStorageTestValue')
    } catch (e) {
        return false
    }
    return true
  }()),
  // 设置localStorage
  setItem : function(name,value){
    this.isSupportLocalStorage ? window.localStorage.setItem(name,value) : VueCookie.set(name,value,{domain: COOKIE_DOMAIN})
  },
  // 获取localStorage
  getItem: function(name){
    return this.isSupportLocalStorage ? window.localStorage.getItem(name) : VueCookie.get(name)
  },
  // 删除localStorage
  removeItem: function(name){
    this.isSupportLocalStorage ? window.localStorage.removeItem(name) : VueCookie.delete(name,{domain: COOKIE_DOMAIN})
  }
}

Vue.prototype.$localStorage = storage