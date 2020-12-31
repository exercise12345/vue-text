<template >
<!-- style="overflow:auto;height: 100%;" ref="scroll" -->
  <div style="height: 720px;">
    <div class="bg-centre" v-for="(course,index) in dataShow" :key="course.id" >
        <div class="headline">
          <div class="headline-state-sale" 
          @click.stop="editState(index)"
          v-if="course.courseState==1">在售</div>
          <div class="headline-state-stopsale" 
          @click.stop="editState(index)"
          v-if="course.courseState!=1">停售</div>
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
        // 总页数
        pageNum:1,
        // 每页显示的个数
        pageSize:7,
        // 当前页
        currentPage:0,
        // 总数据
        totalPage:[],
        // 当前显示的数据
        dataShow:[]
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
    },
    editState(id){
       let courseState=(this.$store.getters.courses)[id].courseState
      if(courseState==1){
        this.courses[id].courseState='0'
      }else{
        this.courses[id].courseState='1'
      }
    },
    //滚动方法
    handleScroll(){
        let that = this
        let sh = document.documentElement.scrollHeight; // 滚动条高度
        let st = document.documentElement.scrollTop // 滚动条距离顶部的距离
        let ch = document.documentElement.clientHeight // 滚动条外容器的高度
        console.log('sh='+sh)
        console.log('st='+st)
        console.log('ch='+ch)
        if (sh - st == ch) {
            //滚动到下下一页
            if (that.currentPage == that.pageNum - 1) return;
            else{
              that.dataShow = that.totalPage[++that.currentPage]
            }
        }
        if( st==0){
          if (that.currentPage == 0) return;
            that.dataShow = that.totalPage[--that.currentPage]
        }
        
    },
  },
   mounted() {
        //添加滚动事件
        window.addEventListener('scroll', this.handleScroll, false);
        // let scroll = this.$refs.scroll
        // console.log(scroll)
        // scroll.addEventListener('scroll',this.test,false)
      },

  created: function(){
      console.log(this.courses)
      // 总页数
      this.pageNum = Math.ceil(this.courses.length / this.pageSize) || 1 ;
      // 分组
      for (var i = 0; i<this.pageNum; i++) {
          this.totalPage[i] = this.courses.slice(this.pageSize * i, this.pageSize * (i + 1))
      }
      // 取值
      this.dataShow = this.totalPage[this.currentPage];
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
