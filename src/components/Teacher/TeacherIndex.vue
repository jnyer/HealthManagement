<template>
  <div>
    <a-layout>
      <a-layout-header class="header">
        <AdminHeader></AdminHeader>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <AdminSider></AdminSider>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <router-view></router-view>
          <!--          <a-layout-footer style="margin: auto;height: 35px;">2022 © 心理健康服务系统</a-layout-footer>-->
          <PageFooter></PageFooter>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import AdminSider from "@/components/Administrator/AdminSider";
import AdminHeader from "@/components/Administrator/AdminHeader";
import PageFooter from "@/components/PageFooter";
export default {
  components: {AdminSider,AdminHeader,PageFooter},
}
</script>

<style scoped>

</style>