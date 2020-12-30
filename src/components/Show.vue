<template >
  <div>
    <div class="bg-centre" v-for="(course,index) in courses" :key="course.id">
        <div class="headline">
          <div class="headline-state-sale" v-if="course.courseState==1">在售</div>
          <div class="headline-state-stopsale" v-if="course.courseState!=1">停售</div>
          <div class="headline-name">{{course.name}}</div>
          <div class="headline-more" @click="edit(index)">...</div>
        </div>
        <div class="content">
          <table>
            <tr>
              <th>收费名称</th>
              <th>课时数</th>
              <th>价格</th>
            </tr>
            <div v-for="(rates,index) in course.courseRates" :key="index">
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
      isActive:true,
    }
  },
  methods: {
    trunToAdd () {
      this.$router.push({path: '/Add'}) // 路由跳转到Show展示页面
    },
    edit (id) {
      this.$router.push({
        path: '/Add',
        query:{
          id:id
        }
      })
    }
  },
  Created(){
    console.log(this.$store)
  },
 computed: {
    ...mapGetters(['courses']),//动态计算属性，相当于this.$store.getters.courses
  },
  // mounted(){
  //   this.courses = this.$store.getters.courses
  //   console.log(this.courses)
  // }

}
</script>
<style>
  @import '../assets/css/show.css';
</style>
