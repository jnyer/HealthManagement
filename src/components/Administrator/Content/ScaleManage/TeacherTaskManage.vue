<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>教师测评任务管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered>
        <template #title>教师测评任务管理<br/>
          <a-input-search
              v-model:value="value"
              placeholder="请输入关键字进行搜索"
              enter-button="查询"
              @search="onSearch"
              style="width: 250px;margin-top: 15px"
          />
        </template>
        <template #bodyCell="{column}">
          <template v-if="column.dataIndex==='caozuo'">
            <a>操作</a>
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "TeacherTaskManage",
  setup(){
    const dataSource=[
    ]
    const columns = [
      {
        title: '学校',
        dataIndex: 'xuexiao',
        key: 'xuexiao',
        align: 'center',
      },
      {
        title: '任务名称',
        dataIndex: 'renwumingcheng',
        key: 'renwumingcheng',
        align: 'center',
      },
      {
        title: '创建时间',
        dataIndex: 'chuangjianshijian',
        key: 'chuangjianshijian',
        align: 'center',
      },
      {
        title: '开放时间段',
        dataIndex: 'kaifangshijianduan',
        key: 'kaifangshijianduan',
        align: 'center',
      },{
        title: '开放年级',
        dataIndex: 'kaifangnianji',
        key: 'kaifangnianji',
        align: 'center',
      },{
        title: '使用量表',
        dataIndex: 'liangbiao',
        key: 'liangbiao',
        align: 'center',
      },{
        title: '备注',
        dataIndex: 'beizhu',
        key: 'beizhu',
        align: 'center',
      },{
        title: '完成进度',
        dataIndex: 'jindu',
        key: 'jindu',
        align: 'center',
      },{
        title: '状态',
        dataIndex: 'zhuangtai',
        key: 'zhuangtai',
        align: 'center',
      },
    ]
    return {
      dataSource,
      columns,
    }
  }
}
</script>

<style scoped>

</style>