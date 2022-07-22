<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>心理测评</a-breadcrumb-item>
      <a-breadcrumb-item>xxxx量表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '530px' }"
    >
      <user-outlined/>&nbsp;&nbsp;&nbsp;您正在进行《中小学生心理健康诊断测验MHT》测评&nbsp;(剩余时间：<span style="color: red">{{ count }}</span>)
      <a-button type="primary" style="margin-left: 10px" @click="submit">提交测试</a-button>
      <a-modal v-model:visible="visible" title="提示" ok-text="确定" cancel-text="取消" @ok="handleOk">
        <p>您确定要交卷吗？</p>
      </a-modal>
      <a-carousel arrows :dots=isDots ref="switch">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-outlined/>
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-outlined/>
          </div>
        </template>
        <div v-for="(items,index) in questionData" :key="index">
          <h2>{{ items.key }}、{{ items.question }}</h2>
          <a-radio-group v-model:value="value[index]" :name="items.question">
            <a-radio :style="radioStyle" v-for="(item,radioIndex) in questionData[index].option" :key="radioIndex" :value="item.key">
              {{ item.description }}
            </a-radio>
          </a-radio-group>
        </div>
      </a-carousel>
      <div style="margin-left: 90px;margin-right: 90px">
        <a-button type="primary" shape="circle" size="large" v-for="(item,index) in questionData" :key="index" @click="goTo(index)" style="margin-left: 10px;margin-top: 5px">{{ item.key }}</a-button>
      </div>

    </a-layout-content>
  </div>
</template>
<script>
import {LeftOutlined, RightOutlined, UserOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref, reactive} from 'vue';
import router from "@/router";

export default defineComponent({
  name: "StartTest",
  components: {
    LeftOutlined,
    RightOutlined,
    UserOutlined,
  },
  setup() {
    const isDots = ref(false)
    const questionData = [
      {
        key: 1,
        question: "这是一道测试题",
        option: [
          {
            key: 1,
            description: "选项A"
          },
          {
            key: 2,
            description: "选项B"
          },
          {
            key: 3,
            description: "选项C"
          },
          {
            key: 4,
            description: "选项D"
          },
        ]
      },
      {
        key: 2,
        question: "这是一道测试题",
        option: [
          {
            key: 1,
            description: "选项A"
          },
          {
            key: 2,
            description: "选项C"
          },
          {
            key: 3,
            description: "选项C"
          },
          {
            key: 4,
            description: "选项D"
          },
        ]
      }
    ]
    const value = ref([1,2]);
    const questionIndex = ref(1);
    const radioStyle = reactive({
      display: 'flex',
      height: '40px',
      lineHeight: '10px',
      fontSize: '20px',
    });
    const submit = ()=>{
      visible.value = true;
    }
    const count = ref('')
    const second = 1800

    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      visible.value = false;
      router.replace('/admin/PsychologyTest/TestTask')
    };
    return {
      isDots,
      questionData,
      value,
      radioStyle,
      questionIndex,
      submit,
      count,
      second,
      visible,
      showModal,
      handleOk,
    }
  },

  mounted() {
    this.countDown()
    this.Time()
    console.log(1)
  },
  methods: {
    goTo: function (index) {
      this.$refs.switch.goTo(index)
    },
    countDown: function (){
      let m = parseInt(this.second / 60 % 60);
      m = m < 10 ? "0" + m : m
      let s = parseInt(this.second % 60);
      s = s < 10 ? "0" + s : s
      this.count = m + ':' + s
    },
    Time: function (){
      setInterval(()=>{
        this.second-=1
        this.countDown()
      },1000)
    }
  }
});
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  /*text-align: center;*/
  padding-left: 100px;
  height: 300px;
  line-height: 100px;
  background: white;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 40px;
  color: black;
  background-color: white;
  opacity: 0.3;
  z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h2) {
  color: black;
  font-weight: 600;
  font-size: 25px;
}
</style>