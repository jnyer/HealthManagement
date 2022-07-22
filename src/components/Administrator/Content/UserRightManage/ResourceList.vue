<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>资源添加</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ padding: '0', margin: 0, minHeight: '570px'}"
    >
      <a-row>
        <a-col :span="4" style="background-color: white;padding: 10px;min-height: 570px">
          <a-tree
              :show-line="showLine"
              :default-expanded-keys="['0-0']"
              :tree-data="treeData"
              @select="onSelect"
              style="font-size: 12px"
          >
            <template #icon>
              <carry-out-outlined/>
            </template>

          </a-tree>
        </a-col>
        <a-col :span="19" style="margin-left: 10px;background-color: white;padding: 20px">
          <a-table sticky :dataSource="dataSource" :columns="columns" bordered style="font-size: 12px">
            <template #title>系统内所有学校<br/>
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
                <a>编辑</a>
                <a>&nbsp;禁用</a>
                <a>&nbsp;删除</a>
              </template>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {CarryOutOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  name: "ResourceList",
  components: {
    CarryOutOutlined,
  },
  setup() {
    const showLine = ref(true);
    const treeData = [{
      title: '系统管理',
      key: '0-0',
    },
      {
        title: '用户管理',
        key: '0-1',

      }, {
        title: '新闻管理',
        key: '0-2',

      }, {
        title: '用户权限管理',
        key: '0-3',

      }];
    const dataSource = [
    ]
    const columns = [
      {
        title: '资源名称',
        dataIndex: 'mingcheng',
        key: 'mingcheng',
        align: 'center',
      },
      {
        title: '路径',
        dataIndex: 'lujing',
        key: 'lujing',
        align: 'center',
      },
      {
        title: '添加日期',
        dataIndex: 'riqi',
        key: 'riqi',
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
      showLine,
      treeData,
      dataSource,
      columns,
    };
  },

});
</script>

<style scoped>

</style>