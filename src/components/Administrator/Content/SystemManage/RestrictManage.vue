<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>行政区域管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ padding: '0', margin: 0, minHeight: '570px'}"
    >
      <a-row>
        <a-col :span="4" style="background-color: white;padding: 10px;min-height: 570px">
          <a-input-search v-model:value="searchValue" style="margin-bottom: 8px" placeholder="输入要查找的节点" />
          <a-tree
              :show-line="showLine"
              :default-expanded-keys="['0-0-0']"
              :tree-data="treeData"
              @select="onSelect"
              style="font-size: 12px"
          >
            <template #icon><carry-out-outlined /></template>

          </a-tree>
        </a-col>
        <a-col :span="19" style="margin-left: 10px;background-color: white;padding: 20px" >
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
import { CarryOutOutlined} from '@ant-design/icons-vue';
export default defineComponent({
  name: "RestrictManage",
  components: {
    CarryOutOutlined,
  },
  setup() {
    const showLine = ref(true);
    const onSelect = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
    };
    const treeData = [{
      title: '武汉市',
      key: '0-0',
      children: [{
        title: '江岸区',
        key: '0-0-0',
        children: [{
          title: '江岸城区',
          key: '0-0-0-0',
          children: [{
            title: '江岸区花桥小学',
            key: '0-0-0-0-0',
            children: [{
              title: '一年级',
              key: '0-0-0-0-0-0',
              isLeaf: true,
            }]
          }]
        }]
      }, {
        title: '江汉区',
        key: '0-0-1',
        children: [{

        }]
      }, {
        title: '洪山区',
        key: '0-0-2',
        children: [{

        }]
      }, {
        title: '青山区',
        key: '0-0-3',
        children: [{

        }]
      }, {
        title: '汉阳区',
        key: '0-0-4',
        children: [{

        }]
      }],
    }, {
      title: 'parent 1',
      key: '0-1',
      children: [{
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true,
      }, {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      }],
    }];
    const dataSource = [
      {
        key: '1',
        mingcheng: '水果湖第一小学',
        leixing: '初中',
        fuzeren: '南北',
        renshu: '114514',
        zhanghao: '2313231312313',
        zhuangtai: '启用',
      },
      {
        key: '2',
        mingcheng: '水果湖第一小学',
        leixing: '高中',
        fuzeren: '南北',
        renshu: '1919',
        zhanghao: '23132313156313',
        zhuangtai: '启用',
      },
    ]
    const columns = [
      {
        title: '学校名称',
        dataIndex: 'mingcheng',
        key: 'mingcheng',
        align: 'center',
      },
      {
        title: '学校类型',
        dataIndex: 'leixing',
        key: 'leixing',
        align: 'center',
      },
      {
        title: '学校负责人',
        dataIndex: 'fuzeren',
        key: 'fuzeren',
        align: 'center',
      },
      {
        title: '学生人数',
        dataIndex: 'renshu',
        key: 'renshu',
        align: 'center',
      }, {
        title: '学校账号',
        dataIndex: 'zhanghao',
        key: 'zhanghao',
        align: 'center',
      }, {
        title: '状态',
        dataIndex: 'zhuangtai',
        key: 'zhuangtai',
        align: 'center',
      }, {
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
      onSelect,
    };
  },

});
</script>

<style scoped>

</style>