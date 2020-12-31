<template>
    <div @click="aaa()">我是Son组件</div>
</template>
<script>
    export default {
        name: "Son",
        props:{//props列表
            arr:Array,//定义参数类型
            num:Number,
            str:String,
            str2:{
                type:String,
                default:"我是默认字符串"//定义参数默认值
            },
            func:{
                // type:Function,
                // required:false//定义参数是否必须值
            },
            obj:{
                type: Object,
                required:false
            }
            
        },
        data() {
          return {

          }
        },
        methods:{
          aaa() {
            this.func();
          }
        },
        created() {
            console.log(this.str);//我是字符串
            console.log(this.str2);//我是默认字符串
            console.log(this.num);//5
            console.log(this.func);//hello(){console.log("hello world!");}
            console.log(this.arr);//[1,2,3]
            console.log(this.obj);//{cont:'我是一个对象'}
            this.func();//hello world!
        }
    }
</script>