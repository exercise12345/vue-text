<template>
    <div class="wrap">
        <div @click="hello()">我是Father组件</div>
        <Son
          str="我是字符串"
          :num=5
          :obj="{cont:'我是一个对象'}"
          :func="()=>{this.hello()}"
          :arr="arr"></Son>
    </div>
</template>
<script>
    import Son from './Son'
    export default {
        name: "Father",
        data(){
            return{
                arr:[1,2,3]
            }
        },
        methods:{
            hello(){
                console.log("hello world!")
            }
        },
        components:{  Son  }
    }
</script>