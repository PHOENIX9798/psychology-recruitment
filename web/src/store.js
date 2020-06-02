import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: JSON.parse(localStorage.getItem("userName")) || '',
    userID: JSON.parse(localStorage.getItem("userID")) || '',
    component: JSON.parse(localStorage.getItem("component")) || 'box',
    quesionnaireId: ''
  },
  mutations: {
    getUserName(state,name){
      state.userName = name;
    },
    setuserInfo(state, v) {
      localStorage.setItem('userName', JSON.stringify(v));//将传递的数据先保存到localStorage中
      state.userName = v;// 之后才是修改state中的状态
    },
    setIDInfo(state, v) {
      localStorage.setItem('userID', JSON.stringify(v));//将传递的数据先保存到localStorage中
      state.userID = v;// 之后才是修改state中的状态
    },
    setComponent(state, v) {
      localStorage.setItem('component', JSON.stringify(v));//将传递的数据先保存到localStorage中
      state.component = v;// 之后才是修改state中的状态
    },
    getId(state,id){
      state.userID = id;
    },
    getQuestionnaireId(state,id){
      state.quesionnaireId = id;
    }

  },
  actions: {

  }
})
