<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>网站日志</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
    >
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered>
        <template #title>浏览日志维护<br/>
          <a-input-search
              v-model:value="value"
              placeholder="请输入关键字进行搜索"
              enter-button="查询"
              @search="onSearch"
              style="width: 250px;margin-top: 15px"
          />
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "LogList",
  setup() {
    let index = 0
    const dataSource = [
      {
        key: '1',
        yonghu: 'huaqiao',
        yonghuleixing: '前台',
        caozuo: '登陆成功',
        liulanqi: 'Chrome',
        shijian: '2022-06-02 08:17',
        caozuoneirong: 'dhsdsadnaskjdnaskj',
      },
      {
        key: '2',
        yonghu: 'huaqiao',
        yonghuleixing: '后台',
        caozuo: '登陆失败',
        liulanqi: 'Edge',
        shijian: '2022-06-02 08:18',
        caozuoneirong: 'dhsdsadnfudhkjdnaskj',
      },
    ]
    const columns = [
      {
        title: '用户',
        dataIndex: 'yonghu',
        key: 'yonghu',
        align: 'center',
      },
      {
        title: '用户类型',
        dataIndex: 'yonghuleixing',
        key: 'yonghuleixing',
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: 'caozuo',
        key: 'caozuo',
        align: 'center',
      },
      {
        title: '浏览器',
        dataIndex: 'liulanqi',
        key: 'liulanqi',
        align: 'center',
      }, {
        title: '时间',
        dataIndex: 'shijian',
        key: 'shijian',
        align: 'center',
      }, {
        title: '操作内容',
        dataIndex: 'caozuoneirong',
        key: 'caozuoneirong',
        align: 'center',
      },
    ]
    return {
      index,
      dataSource,
      columns,
    }
  }
}
</script>

<style scoped>

</style>