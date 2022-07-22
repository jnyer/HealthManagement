<template>
  <div>
    <a-menu
        v-model:selectedKeys="selectedKeys"
        :openKeys="openKeys"
        mode="inline"
        :style="{ height: '100%', borderRight: 0 }"
        @openChange="onOpenChange"
    >
      <a-menu-item key="1" @click="homeClicked">
        <template #icon>
          <home-outlined/>
        </template>
        <router-link :to=paths[0]>
          首页</router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          通知提醒
        </template>
        <a-menu-item key="2"><router-link :to=paths[1]>短信通知</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          学校档案管理
        </template>
        <a-menu-item key="3"><router-link :to=paths[2]>教职工管理</router-link></a-menu-item>
        <a-menu-item key="4"><router-link :to=paths[3]>学校管理</router-link></a-menu-item>
        <a-menu-item key="5"><router-link :to=paths[4]>学生信息管理</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          心理测评
        </template>
        <a-menu-item key="6"><router-link :to=paths[5]>开始心理测评</router-link></a-menu-item>
        <a-menu-item key="7"><router-link :to=paths[6]>我的测评记录</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          量表管理
        </template>
        <a-menu-item key="8"><router-link :to=paths[7]>测评明细记录</router-link></a-menu-item>
        <a-menu-item key="9"><router-link :to=paths[8]>学生测评任务管理</router-link></a-menu-item>
        <a-menu-item key="10"><router-link :to=paths[9]>红色预警</router-link></a-menu-item>
        <a-menu-item key="11"><router-link :to=paths[10]>黄色预警</router-link></a-menu-item>
        <a-menu-item key="12"><router-link :to=paths[11]>教师测评任务管理</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          用户权限管理
        </template>
        <a-menu-item key="13"><router-link :to=paths[12]>后台用户管理</router-link></a-menu-item>
        <a-menu-item key="14"><router-link :to=paths[13]>网站日志</router-link></a-menu-item>
        <a-menu-item key="15"><router-link :to=paths[14]>角色管理</router-link></a-menu-item>
        <a-menu-item key="16"><router-link :to=paths[15]>资源分类</router-link></a-menu-item>
        <a-menu-item key="17"><router-link :to=paths[16]>资源添加</router-link></a-menu-item>
        <a-menu-item key="18"><router-link :to=paths[17]>权限配置</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub6">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          系统管理
        </template>
        <a-menu-item key="19"><router-link :to=paths[18]>行政区域管理</router-link></a-menu-item>
        <a-menu-item key="20"><router-link :to=paths[19]>网站设置</router-link></a-menu-item>
        <a-menu-item key="21"><router-link :to=paths[20]>友情链接管理</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub7">
        <template #icon>
          <unordered-list-outlined/>
        </template>
        <template #title>
          用户管理
        </template>
        <a-menu-item key="22"><router-link :to=paths[21]>会员管理</router-link></a-menu-item>
        <a-menu-item key="23"><router-link :to=paths[22]>投诉意见管理</router-link></a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'
import {HomeOutlined, UnorderedListOutlined} from '@ant-design/icons-vue'
import {SubMenu,Menu}from 'ant-design-vue'
import router from "@/router";
export default defineComponent({
  components: {
    HomeOutlined,
    UnorderedListOutlined,
    ASubMenu:SubMenu,
    AMenu: Menu,
  },
  name: "AdminSider",
  setup() {
    const fullPath = router.currentRoute.value.fullPath
    //MenuItem跳转路径，按顺序
    const paths=['/admin/home',
      '/admin/Inform/SMInform',
      '/admin/Manage/TeacherUserList',
      '/admin/Manage/SchoolList',
      '/admin/Manage/StudentUserList',
      '/admin/PsychologyTest/TestTask',
      '/admin/PsychologyTest/TestRecord',
      '/admin/ScaleManage/ScaleRecord',
      '/admin/ScaleManage/StudentTaskManage',
      '/admin/ScaleManage/RedAlarm',
      '/admin/ScaleManage/YellowAlarm',
      '/admin/ScaleManage/TeacherTaskManage',
      '/admin/UserRightManage/UserList',
      '/admin/UserRightManage/LogList',
      '/admin/UserRightManage/RoleList',
      '/admin/UserRightManage/ResourceGroupList',
      '/admin/UserRightManage/ResourceList',
      '/admin/UserRightManage/RightSet',
      '/admin/SystemManage/RestrictManage',
      '/admin/SystemManage/WebSet',
      '/admin/SystemManage/LinkList',
      '/admin/UserManage/UserManage',
      '/admin/UserManage/ComplaintList',
    ]

    const subPath={
      '/admin/Inform/SMInform':'sub1',
      '/admin/Manage/TeacherUserList':'sub2',
      '/admin/Manage/SchoolList':'sub2',
      '/admin/Manage/StudentUserList':'sub2',
      '/admin/PsychologyTest/TestTask':'sub3',
      '/admin/PsychologyTest/TestRecord':'sub3',
      '/admin/ScaleManage/ScaleRecord':'sub4',
      '/admin/ScaleManage/StudentTaskManage':'sub4',
      '/admin/ScaleManage/RedAlarm':'sub4',
      '/admin/ScaleManage/YellowAlarm':'sub4',
      '/admin/ScaleManage/TeacherTaskManage':'sub4',
      '/admin/UserRightManage/UserList':'sub5',
      '/admin/UserRightManage/LogList':'sub5',
      '/admin/UserRightManage/RoleList':'sub5',
      '/admin/UserRightManage/ResourceGroupList':'sub5',
      '/admin/UserRightManage/ResourceList':'sub5',
      '/admin/UserRightManage/RightSet':'sub5',
      '/admin/SystemManage/RestrictManage':'sub6',
      '/admin/SystemManage/WebSet':'sub6',
      '/admin/SystemManage/LinkList':'sub6',
      '/admin/UserManage/UserManage':'sub7',
      '/admin/UserManage/ComplaintList':'sub7',
    }
    //记录当前打开菜单项等信息
    const state = reactive({
      rootSubmenuKeys:['sub1','sub2','sub3','sub4','sub5','sub6','sub7'],
      openKeys:[subPath[fullPath]],
      selectedKeys:[(paths.indexOf(fullPath)+1).toString()],
    })
    //控制只打开当前父菜单
    const onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);

      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
    const homeClicked = () => {
      // console.log(1)
      state.openKeys = ['']
    }
    return {
      // selectedKeys2: ref(['1']),
      // collapsed: ref(false),
      // openKeys: ref(['']),
      ...toRefs(state),
      onOpenChange,
      paths,
      homeClicked,
    }
  }
})
</script>

<style scoped>

</style>