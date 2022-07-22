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
      <a-menu-item key="1" @click="clicked">
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
          当前用户: {{userName}}
        </template>
        <a-menu-item key="2">修改信息</a-menu-item>
        <a-menu-item key="3" @click="logoutb">注销</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import {ref,defineComponent} from 'vue'
import {UserOutlined,BellOutlined} from '@ant-design/icons-vue'
import {LoginApi} from "@/api/Login/login";
import {logout} from "@/utils/page-util";
import {getUserName} from "@/utils/user-info";
import {UserInfoApi} from "@/api/UserInfo/UserInfoApi";

export default defineComponent({
  components: {UserOutlined, BellOutlined},
  name: "PageHeader",
  setup() {
    UserInfoApi.getUserInfo()
    const selectedKeys1 = ref([''])
    const collapsed = ref(false)
    const openKeys = ref([''])
    const logoutb = async () => {
      await LoginApi.logout()
      await logout()
    }

    const userName = getUserName()

    const clicked = () => {
      console.log(1)
    }
    return {
      selectedKeys1,
      collapsed,
      openKeys,
      logoutb,
      userName,
      clicked,
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