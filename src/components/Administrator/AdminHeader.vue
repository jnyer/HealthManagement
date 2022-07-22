<template>
  <div>
    <div class="logo"></div>
    <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        style="float: right"
    >
      <a-menu-item key="1">
        <template #icon>
          <bell-outlined/>
        </template>
        通知
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <user-outlined/>
        </template>
        <template #title>
          当前用户
        </template>
        <a-menu-item key="2">修改信息</a-menu-item>
        <a-menu-item key="3">注销</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import {ref,defineComponent} from 'vue'
import {UserOutlined,BellOutlined} from '@ant-design/icons-vue'
export default defineComponent({
  components:{UserOutlined,BellOutlined},
  name: "AdminHeader",
  setup() {
    return {
      selectedKeys1: ref(['']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
    }
  }
})
</script>

<style scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px -10px;
  background: rgba(255, 255, 255, 0.3);
}
</style>