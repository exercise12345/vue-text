<template>
  <div >
      <div style="padding: 0 15px;">
        <div class="course-title">
          <img @click="returnShow()" src="../assets/img/1.png" class="title-boult" alt="返回" >
          <div class="title-tag">创建课程</div>
          <div class="title-save" @click="trunToShow()">保存</div>
        </div>
        <input class="course-name" placeholder="课程名称" onfocus="this.placeholder=``" v-model="course.name">
      </div>
      <!-- 分界内容 -->
       <div style="background: rgb(247, 247, 247);
       height:10px;"></div>
      <div class="course-sates">
        <div class="sates sates-tag">按课时收费</div>
        <!-- 遍历标签 -->
        <div v-for="(rates, index) in  course.courseRates" :key="rates">
          <div class="sates sates-count">
            <span>收费标准({{index+1}})</span>
            <div class="delete-charge" @click=deleteCharge(index)>删除</div>
          </div>
          <div class="sates sates-name">
            <span>收费名称</span>
            <input type="text" placeholder="最多20字" onfocus="this.placeholder=``" v-model="course.courseRates[index].cname">
          </div>
          <div class="sates sates-hour" v-bind:class="{ active: isActive[0] }">
            <span>课时数</span>
            <div class="hour-symbol" @click="reduceHour(index)">-</div>
            <div style="width: 50px;text-align: center;" >{{course.courseRates[index].hour}}</div>
            <div class="hour-symbol" @click="addHour(index)">+</div>
          </div>
          <div class="sates sates-price" v-bind:class="{ active: isActive[1] }">
            <span>金额</span>
            <input type="number" placeholder="0" onfocus="this.placeholder=``" v-model="course.courseRates[index].price" @change="inspect(index)">
            <span>元</span>
          </div>
        </div>
      </div>
      <button class="add-charge" @click="addCharge">添加收费项({{course.courseRates.length}}/10)</button>
    </div>
</template>
<script>


export default {
  name: 'Add',
  data () {
    return {
      /* eslint-disable */
      isActive: [],
      course: {
        courseState: '',
        name: '',
        courseRates: [
          {
            cname: '',
            hour: '1',
            price: ''
          }
        ]
      }
    }
  },
  methods: {
    trunToShow () {
      //  import { mapActions } from 'vuex';
      // ...mapActions( // 语法糖
      //     ['modifyBName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
      // ),this.modifyBName
      
      
      this.$store.dispatch('addCourse', this.course);
      this.$router.push({path: '/Show'}) // 路由跳转到Show展示页面
    },
    addCharge () {
      this.course.courseRates.push({
        cname: '',
        hour: '1',
        price: ''
      })
      this.isActive = []
      if (this.course.courseRates.length >= 10) {
        alert('最多添加10项')
      }
    },
    deleteCharge (i) {
      console.log(this.course.courseRates)
      this.course.courseRates.splice(i, 1)

      console.log(this.course.courseRates)
    },
    reduceHour (num) {
      if (this.course.courseRates[num].hour > 0) {
        this.course.courseRates[num].hour--
      } else {
        this.isActive[0] = true
        alert('总课时必须>0')
      }
    },
    addHour (num) {
      this.course.courseRates[num].hour++
    },

    inspect (num) {
      if (this.course.courseRates[num].price > 0) {
      } else {
        this.isActive[1] = true
        alert('总金额必须>0')
      }
    }
  }
}
</script>
<style>
@import '../assets/css/add.css'
</style>