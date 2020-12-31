// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
// 触发保存菜单栏的路径方法
export const savePath = ({ commit }, payload) => {
  commit('savePath', payload);
};

export const addCourse = ({commit}, course) =>{
   commit('addCourse', course)
}

export const editCourse = ({ commit }, course) => {
  commit('updateCourse', course)
}


// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)
