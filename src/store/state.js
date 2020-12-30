import { courses } from "./getters";

// 首先声明一个需要全局维护的状态 state
export default {
  pathName: '', // 路由名称.
  courses: [
    {
      id:'0',
      courseState: '1',
      name: '大学课程',
      courseRates: [
        {
          cid: 1,
          cname: '数学课本',
          hour: '1',
          price: '6'
        },
        {
          cid:2,
          cname: '语文课本',
          hour: '1',
          price: '6'
        }
      ]
      
    },
    {
      id:'1',
      courseState: '0',
      name: '大学课程',
      courseRates: [
        {
          cid:1,
          cname: '数学课本',
          hour: '1',
          price: '6'
        },
        {
          cid:2,
          cname: '语文课本',
          hour: '1',
          price: '6'
        }
      ]
      
    }
  ],
  courseId: courses.length,
};