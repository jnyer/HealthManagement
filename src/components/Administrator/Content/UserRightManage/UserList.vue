<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>后台用户管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <div v-if="spinning">
        <a-spin class="spin" :spinning="spinning"/>
      </div>
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered v-if="!spinning">
        <template #title>用户维护<br/>
          <a-input-group compact style="margin-top: 15px">
            <a-input v-model:value="value1" style="width: 15%" placeholder="请输入关键字进行搜索"/>
            <a-select v-model:value="value2" style="width: 15%" placeholder="请选择用户状态">
              <a-select-option value="Zhejiang">Zhejiang</a-select-option>
              <a-select-option value="Jiangsu">Jiangsu</a-select-option>
            </a-select>
            <a-select v-model:value="value3" style="width: 15%" placeholder="请选择用户角色">
              <a-select-option value="Zhejiang">Zhejiang</a-select-option>
              <a-select-option value="Jiangsu">Jiangsu</a-select-option>
            </a-select>
            <a-button type="primary" style="margin-left: 10px">搜索</a-button>
          </a-input-group>
          <!--          <a-input-search-->
          <!--              v-model:value="value"-->
          <!--              placeholder="请输入关键字进行搜索"-->
          <!--              enter-button="查询"-->
          <!--              @search="onSearch"-->
          <!--              style="width: 250px;margin-top: 15px"-->
          <!--          />-->
        </template>
        <template #bodyCell="{column}">
          <template v-if="column.dataIndex==='caozuo'">
            <a>修改</a>
            <a>&nbsp;&nbsp;禁用</a>
            <a>&nbsp;&nbsp;删除</a>
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
import {UserApi} from "@/api/Admin/UserRightManage/user";
import {ref} from "vue";
export default {
  name: "UserList",
  setup(){
    let responseData = []
    const dataSource=[]

    const spinning = ref(true)

    setTimeout(function () {
      spinning.value = !spinning.value
    },500)

    /**
     * 同步接口请求函数，并将后端返回的数据转为前端可以展示的类型
     */
    const getDataSource = ()=>{
      UserApi.getUser().then(response=>{
        console.log(response.data)
        responseData = response.data.rows
        responseData.forEach((item,key)=>{
          let current = {
            key : key,
            id: item.userId,
            zhanghao: item.account,
            mingcheng: item.realName,
            shouji: item.tel,
            zhuangtai: item.statusFlag===1?"可用":"不可用",
          }
          dataSource.push(current)
        })
      })
      return dataSource
    }

    getDataSource();
    const columns = [{
      title: '用户ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
      {
        title: '用户账号',
        dataIndex: 'zhanghao',
        key: 'zhanghao',
        align: 'center',
      },
      {
        title: '用户名称',
        dataIndex: 'mingcheng',
        key: 'mingcheng',
        align: 'center',
      },
      {
        title: '手机',
        dataIndex: 'shouji',
        key: 'shouji',
        align: 'center',
      },
      {
        title: '状态',
        dataIndex: 'zhuangtai',
        key: 'zhuangtai',
        align: 'center',
      },{
        title: '操作',
        dataIndex: 'caozuo',
        key: 'caozuo',
        align: 'center',
      },]
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')

    return {
      dataSource,
      columns,
      spinning,
      responseData,
      getDataSource,
      value1,
      value2,
      value3,
    }
  }
}
</script>

<style scoped>

</style>