<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>测评任务</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '530px' }"
    >
      <div v-if="spinning">
        <a-spin class="spin" :spinning="spinning"/>
      </div>
      <a-table sticky :dataSource="dataSource" :columns="columns" bordered v-if="!spinning">
        <template #title>我需要完成的测评任务<br/>
          <a-input-search
              v-model:value="value"
              placeholder="请输入关键字进行搜索"
              enter-button="搜索"
              @search="onSearch"
              style="width: 250px;margin-top: 15px"
          />
        </template>
        <template #bodyCell="{column}">
          <template v-if="column.dataIndex==='caozuo'">
            <a>
              <router-link to="/admin/PsychologyTest/startTest">
                开始测评
              </router-link>
            </a>
          </template>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "TestTask",
  setup() {
    const value = ''
    const onSearch = () => {
      console.log(1)
    }
    const dataSource = [
      {
        key: '1',
        renwu: '测评',
        riqi: '2022.6.30',
        liangbiao: '焦虑自评量表(SAS)',
      },
      {
        key: '2',
        renwu: '测评2',
        riqi: '2022.6.30',
        liangbiao: 'Barratt冲动量表',
      },
    ]
    const columns = [
      {
        title: '测评任务',
        dataIndex: 'renwu',
        key: 'renwu',
        align: 'center',
      },
      {
        title: '截止日期',
        dataIndex: 'riqi',
        key: 'riqi',
        align: 'center',
      },
      {
        title: '所用量表',
        dataIndex: 'liangbiao',
        key: 'liangbiao',
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: 'caozuo',
        key: 'caozuo',
        align: 'center',
      },
    ]

    const spinning = ref(true)
    setTimeout(function () {
          spinning.value = !spinning.value
        }, 500
    )

    return {
      dataSource,
      columns,
      value,
      onSearch,
      spinning,
    }
  }
}
</script>

<style scoped>

</style>