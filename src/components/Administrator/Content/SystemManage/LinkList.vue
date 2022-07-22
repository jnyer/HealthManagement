<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>友情链接管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="data" :columns="columns" bordered>
        <template #title>友情链接管理<br/>
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
            <a>修改</a>
            <a>&nbsp;删除</a>
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "LinkList",
  setup(){
    const dataSource=[
      {
        key: '1',
        shijian: '2022/6/20 11:11:11',
        neirong: 'xxxxxxxx',
        jieshouzhe: '黄冈',
        haoma:'2023923923209',
        fasongren: '00'
      },
      {
        key: '2',
        shijian: '2022/6/20 11:11:12',
        neirong: 'xxxxxxxx',
        jieshouzhe: '武汉',
        haoma:'2023923923209',
        fasongren: '00'
      },
    ]
    const columns = [
      {
        title: '友情链接名称',
        dataIndex: 'mingcheng',
        key: 'mingcheng',
        align: 'center',
      },
      {
        title: '友情链接地址',
        dataIndex: 'dizhi',
        key: 'dizhi',
        align: 'center',
      },
      {
        title: '添加时间',
        dataIndex: 'shijian',
        key: 'shijian',
        align: 'center',
      },
      {
        title: '备注',
        dataIndex: 'beizhu',
        key: 'beizhu',
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