<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>红色预警</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered>
        <template #title>心理测评量表列表<br/>
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
  name: "RedAlarm",
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
        title: '年级班级',
        dataIndex: 'nianjibanji',
        key: 'nianjibanji',
        align: 'center',
      },
      {
        title: '姓名',
        dataIndex: 'xingming',
        key: 'xingming',
        align: 'center',
      },
      {
        title: '任务名称',
        dataIndex: 'renwu',
        key: 'renwu',
        align: 'center',
      },{
        title: '所用量表',
        dataIndex: 'liangbiao',
        key: 'liangbiao',
        align: 'center',
      },{
        title: '测评时间',
        dataIndex: 'shijian',
        key: 'shijian',
        align: 'center',
      },{
        title: '风险等级',
        dataIndex: 'fengxiandengji',
        key: 'fengxianfengji',
        align: 'center',
      },{
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