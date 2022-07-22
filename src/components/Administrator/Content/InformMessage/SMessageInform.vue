<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>短信通知记录</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="data" :columns="columns" bordered>
        <template #title>短信通知记录<br/>
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
  name: "SMessageInform",
  setup(){
    let index = 0
    const data=[]
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
    for(let i =0;i<dataSource.length;i++){
      data.push({
        bianhao:i+1,
        shijian:dataSource[i].shijian,
        neirong:dataSource[i].neirong,
        jieshouzhe:dataSource[i].jieshouzhe,
        haoma:dataSource[i].haoma,
        fasongren:dataSource[i].fasongren,
      })
    }
    const columns = [
          {
            title: '编号',
            dataIndex: 'bianhao',
            key: 'bianhao',
            align: 'center',
          },
          {
            title: '时间',
            dataIndex: 'shijian',
            key: 'shijian',
            align: 'center',
          },
          {
            title: '内容',
            dataIndex: 'neirong',
            key: 'neirong',
            align: 'center',
          },
          {
            title: '接收者',
            dataIndex: 'jieshouzhe',
            key: 'jieshouzhe',
            align: 'center',
          },{
            title: '接收号码',
            dataIndex: 'haoma',
            key: 'haoma',
            align: 'center',
          },{
            title: '发送人',
            dataIndex: 'fasongren',
            key: 'fasongren',
            align: 'center',
          },{
            title: '操作',
            dataIndex: 'caozuo',
            key: 'caozuo',
            align: 'center',
          },
        ]
    return {
      index,
      dataSource,
      data,
      columns,
    }
  }
}
</script>

<style scoped>

</style>