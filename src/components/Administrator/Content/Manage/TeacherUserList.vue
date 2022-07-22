<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>教职工管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered>
        <template #title>教职工管理<br/>
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
export default {
  name: "TeacherUserList",
  setup(){
    let index = 0
    const dataSource=[
      {
        key: '1',
        zhanghao: '112233445566',
        mingcheng: 'jack',
        shouji: '1009876566',
        juese: '班主任',
        xuexiao: 'xx小学',
        bumen: '教学部门',
        zhiwu: '班主任',
        zhuangtai: '可用',
      },
      {
        key: '2',
        zhanghao: '112233445568',
        mingcheng: 'rose',
        shouji: '1009876566',
        juese: '班主任',
        xuexiao: 'xx小学',
        bumen: '教学部门',
        zhiwu: '班主任',
        zhuangtai: '可用',
      },
    ]
    return {
      index,
      dataSource,
      columns: [
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
          title: '所属角色',
          dataIndex: 'juese',
          key: 'juese',
          align: 'center',
        },{
          title: '学校',
          dataIndex: 'xuexiao',
          key: 'xuexiao',
          align: 'center',
        },{
          title: '部门',
          dataIndex: 'bumen',
          key: 'bumen',
          align: 'center',
        },{
          title: '职务/任课课程',
          dataIndex: 'zhiwu',
          key: 'zhiwu',
          align: 'center',
        },{
          title: '状态',
          dataIndex: 'zhuangtai',
          key: 'zhuangtai',
          align: 'center',
        },{
          title: '操作',
          dataIndex: 'caozuo',
          key: 'caozuo',
          align: 'center',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>