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
        <div v-for="(rates,index) in  course.courseRates" :key="index">
          <div class="sates-count">
            <span>收费标准({{index+1}})</span>
            <div class="delete-charge" @click="deleteCharge(index)">删除</div>
          </div>
          <div class="sates sates-name">
            <span>收费名称</span>
            <input type="text" placeholder="最多20字" onfocus="this.placeholder=``" v-model="rates.cname">
          </div>
          <div class="sates sates-hour" 
          :class="{ active: rates.hour <= 0 }">
            <span>课时数</span>
            <div class="hour-symbol" @click="reduceHour(index)">-</div>
            <div style="width: 50px;text-align: center;" >{{rates.hour}}</div>
            <div class="hour-symbol" @click="addHour(index)">+</div>
          </div>
          <div class="sates sates-price" 
            :class="{ active: rates.price < 0 }">
            <span>金额</span>
            <input type="number" placeholder="0" onfocus="this.placeholder=``" v-model="rates.price" @change="inspect(index)">
            <span>元</span>
          </div>
        </div>
      </div>
      <button class="add-charge" @click="addCharge()">添加收费项({{course.courseRates.length}}/10)</button>
    </div>
</template>
<script>


export default {
  name: 'Add',
  data () {
    return {
      /* eslint-disable */

      course: {
        id:'',
        courseState: 1,
        name: '',
        courseRates: [
          {
            cid:1,
            cname: '',
            hour: 1,
            price: ''
          }
        ]
      }

    }
  },
  methods: {
    returnShow:function(){
        this.$router.push({path: '/Show'})
      },
    trunToShow () {
      //  import { mapActions } from 'vuex';
      // ...mapActions( // 语法糖
      //     ['modifyBName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
      // ),this.modifyBName
      let id=(this.$route.query.id)
      if(id==undefined){
        this.course.id=(this.$store.getters.courses.length);
        if(this.course.name!=''&&this.course.courseRates[0].cname!==''){
          this.$store.dispatch('addCourse', this.course);
          this.$router.push({path: '/Show'}) // 路由跳转到Show展示页面
       }else{
          return alert("输入不能为空")
        }
      }
      else{
        if(this.course.name!=''&&this.course.courseRates[0].cname!==''){
          this.$router.push({path: '/Show'}) // 路由跳转到Show展示页面
        }else{
          return alert("输入不能为空")
        }
      }
       
    },
    addCharge () {
      if (this.course.courseRates.length < 10) {
        let i=1;
        this.course.courseRates.push({
          cid:++i,
          cname: '',
          hour: '1',
          price: ''
        })
      }else{
        alert('最多添加10项')
      }
    },
    deleteCharge (i) {
      this.course.courseRates.splice(i, 1)
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
  },
  beforeMount(){
    let id=(this.$route.query.id)
    
    if(id!=undefined){
      let editCourse=(this.$store.getters.courses)
      this.course= editCourse[id]
    }
  }

}
</script>
<style>
@import '../assets/css/add.css'
</style>