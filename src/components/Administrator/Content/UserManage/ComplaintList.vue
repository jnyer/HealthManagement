<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>投诉建议管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="data" :columns="columns" bordered>
        <template #title>投诉建议管理<br/>
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
            <a>查看</a>
            <a>&nbsp;删除</a>
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "ComplaintManage",
  setup(){
    const dataSource=[
    ]
    const columns = [
      {
        title: '投诉标题',
        dataIndex: 'biaoti',
        key: 'biaoti',
        align: 'center',
      },
      {
        title: '投诉人',
        dataIndex: 'tousuren',
        key: 'tousuren',
        align: 'center',
      },
      {
        title: '投诉时间',
        dataIndex: 'shijian',
        key: 'shijian',
        align: 'center',
      },
     {
        title: '操作',
        dataIndex: 'caozuo',
        key: 'caozuo',
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