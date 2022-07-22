<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>资源分类维护</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered>
        <template #title>资源分类维护<br/>
          <a-input-group compact style="margin-top: 15px">
            <a-input v-model:value="value1" style="width: 15%" placeholder="请输入关键字进行搜索"/>
            <a-select v-model:value="value2" style="width: 15%" placeholder="请选择分类状态">
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
            <a>&nbsp;&nbsp;删除</a>
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "ResourceGroupList",
  setup(){
    const dataSource=[
      {
        key: '1',
        mingcheng: '量表管理',
        shijian: '2022/6/30 11:11:11',
        zhuangtai: '可用',
      },
      {
        key: '2',
        mingcheng: '心理测评',
        shijian: '2022/6/30 11:11:11',
        zhuangtai: '可用',
      },
      {
        key: '3',
        mingcheng: '学校档案管理',
        shijian: '2022/6/30 11:11:11',
        zhuangtai: '可用',
      },
    ]
    return {
      dataSource,
      columns: [
        {
          title: '资源分类名称',
          dataIndex: 'mingcheng',
          key: 'mingcheng',
          align: 'center',
        },
        {
          title: '添加时间',
          dataIndex: 'shijian',
          key: 'shijian',
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
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>