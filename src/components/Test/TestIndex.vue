<template>
  <div>
    <a-layout>
      <a-layout-header class="header">
        <PageHeader></PageHeader>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <TestSider></TestSider>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <router-view></router-view>
          <PageFooter></PageFooter>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import TestSider from "@/components/Test/TestSider";
// import TestHeader from "@/components/Test/TestHeader";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";

export default {
  components: {PageHeader, TestSider, PageFooter},
}
</script>

<style scoped>


</style>