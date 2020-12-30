<template >
  <div>
    <div class="bg-centre" v-for="(course,index) in courses" :key="index">
        <div class="headline">
          <div class="headline-state-sale">在售</div>
          <div class="headline-name">{{course.name}}</div>
          <div class="headline-more">...</div>
        </div>
        <div class="content">
          <table>
            <tr>
              <th>收费名称</th>
              <th>课时数</th>
              <th>价格</th>
            </tr>
            <div  v-for="(rates,index) in course.courseRates"  :key="index">
            <tr v-if="index<2">
              <td class="content-name"><nobr>{{rates.cname}}</nobr></td>
              <td >{{rates.hour}}</td>
              <td>￥{{rates.price}}</td>
            </tr>
            </div>
          </table>
        </div>
      </div>
    <div class="add" @click="trunToAdd()">+</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Show',
  data () {
    return {
      // courses: [
      //   {sates: '1',
      //     name: '大学课程',
      //     courseRates: [
      //       {
      //         cname: '数学课本',
      //         hour: '1',
      //         price: '6'
      //       },
      //       {
      //         cname: '语文课本',
      //         hour: '1',
      //         price: '6'
      //       }
      //     ]
      //   }
      // ]
    }
  },
  methods: {
    trunToAdd () {
      this.$router.push({path: '/Add'}) // 路由跳转到Show展示页面
    }
  },
  Created(){
    console.log(this.$store)
  },
 computed: {
   
    ...mapGetters(['courses']), // 动态计算属性，相当于this.$store.getters.courses
  },
  
}
</script>
<style>
  @import '../assets/css/show.css'
</style>
