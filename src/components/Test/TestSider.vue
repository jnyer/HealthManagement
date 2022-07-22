<template>
  <div>
    <a-menu
        v-model:selectedKeys="selectedKeys2"
        v-model:openKeys="openKeys"
        mode="inline"
        :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="1" @click="homeClicked">
        <template #icon>
          <home-outlined/>
        </template>
        <router-link :to=paths[0]>
          首页
        </router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          心理测评
        </template>
        <a-menu-item key="2">
          <router-link :to=paths[1]>开始心理测评</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to=paths[2]>我的测评记录</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import {defineComponent,reactive, toRefs} from 'vue'
import {HomeOutlined, UnorderedListOutlined} from '@ant-design/icons-vue'
import {SubMenu,Menu}from 'ant-design-vue'
import router from "@/router"

export default defineComponent({
  components: {
    HomeOutlined,
    UnorderedListOutlined,
    ASubMenu:SubMenu,
    AMenu: Menu,
  },
  name: "TestSider",
  setup() {
    const fullPath = router.currentRoute.value.fullPath
    const paths = ["/test/home", "/test/task", "/test/record"]
    const subPath={"/test/task":"sub1","/test/record":"sub1"}
    const state = reactive({
      openKeys:[subPath[fullPath]],
      selectedKeys2:[(paths.indexOf(fullPath)+1).toString()],
    })

    const homeClicked = () => {
      // console.log(1)
      state.openKeys = ['']
    }
    // onBeforeMount(async () => {
    //   //dom 挂载前
    //   console.log("*******onMounted******")
    //   // let index = paths.indexOf(test.fullPath)
    //   console.log(router.currentRoute.value)
    // })

    return {
      ...toRefs(state),
      paths,
      homeClicked,
      fullPath,
    }
  }
})
</script>

<style scoped>

</style>