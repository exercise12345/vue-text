import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import * as Getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as Actions from './actions'
import * as Mutations from './mutations'

Vue.use(Vuex)

// 注册上面引入的各大模块
const store = new Vuex.Store({
  State, // 共同维护的一个状态，state里面可以是很多个全局状态
  Getters, // 获取数据并渲染
  Actions, // 数据的异步操作
  Mutations // 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store // 导出store并在 main.js中引用注册。