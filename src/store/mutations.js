// 提交 mutations是更改Vuex状态的唯一合法方法
// 保存当前菜单栏的路径
export const savePath = (state, pathName) => {
  state.pathName = pathName;
};


export const addCourse = (state, course) => {
  state.courses.push(course)
}
