<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item><home-outlined/>&nbsp;系统首页</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{padding: '24px', margin: '-25px', minHeight: '570px'}">
      <img src="../../../assets/button.jpg" style="width: 100%"/>
      <p style="text-align: center;color: gray;font-size: 12px">欢迎登录 心理健康服务管理系统</p>
    </a-layout-content>
  </div>
</template>

<script>
import {defineComponent, onMounted} from "vue";
import {HomeOutlined} from "@ant-design/icons-vue";
import router from "@/router";

export default defineComponent({
  name: "AdminHome",
  components:{HomeOutlined},
  setup(){
    onMounted(()=>{
      //TODO:这里需要做查找路由函数，找到当前路径最底层
      // const path = router.currentRoute.value.matched[0].path
      console.log(router.currentRoute.value.matched[0].path)
    })
  }
})
</script>

<style scoped>

</style>