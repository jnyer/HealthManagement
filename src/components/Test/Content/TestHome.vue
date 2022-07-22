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
import {HomeOutlined} from "@ant-design/icons-vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "TestHome",
  components:{HomeOutlined}
})
</script>

<style scoped>

</style>