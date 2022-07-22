<template>
<div>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item>测评记录</a-breadcrumb-item>
  </a-breadcrumb>
  <a-layout-content
      :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '570px' }"
  >
    <a-table sticky :dataSource="dataSource" :columns="columns" bordered>
      <template #title>我参与过的心理测评<br/>
        <a-space>
          <a-select
              ref="select"
              v-model:value="value1"
              style="width: 120px;margin-top: 15px"
              @change="handleChange"
          >
            <a-select-option value="SAS">焦虑自评量表(SAS)</a-select-option>
            <a-select-option value="Barratt">Barratt冲动量表</a-select-option>
          </a-select>
        <a-input-search
            v-model:value="value2"
            placeholder="请输入关键字进行搜索"
            enter-button="搜索"
            @search="onSearch"
            style="width: 250px;margin-top: 15px"
        />

        </a-space>
      </template>
      <template #bodyCell="{column}">
        <template v-if="column.dataIndex==='caozuo'">
          <a>重新测评</a>
        </template>
      </template>
    </a-table>
  </a-layout-content>
</div>
</template>

<script>
import {ref} from 'vue'
import {onMounted} from "vue";
import {TaskApi} from "@/api/Test/task";
export default {
  name: "TestRecord",
  setup(){
    onMounted(()=>{
      TaskApi.getTodoTask()
    })
    const value1=ref('')
    const handleChange=()=>{console.log(1)}
    const value2=ref('')
    const onSearch=()=>{console.log(1)}
    const dataSource=[
      {
        key: '1',
        renwu: '测评',
        liangbiao: '焦虑自评量表(SAS)',
        shijian: '2022.6.22',
      },
      {
        key: '2',
        renwu: '测评2',
        liangbiao: 'Barratt冲动量表',
        shijian: '2022.6.24',
      },
    ]
    const columns=[
      {
        title: '测评任务',
        dataIndex: 'renwu',
        key: 'renwu',
        align: 'center',
      },
      {
        title: '所用量表',
        dataIndex: 'liangbiao',
        key: 'liangbiap',
        align: 'center',
      },
      {
        title: '测评时间',
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
      value1,
      value2,
      onSearch,
      handleChange,
      dataSource,
      columns,
    }
  }
}
</script>

<style scoped>

</style>