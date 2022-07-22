<template>
  <div class="background">
    <a-card style="width: 25%;margin: 150px auto auto;">
      <h2 style="text-align: center">用户登录</h2>
      <a-form
          :model="formState"
          name="basic"
          @finish="onFinish"
          style="width: 90%;margin: auto"
      >
        <a-form-item
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
            style="margin: auto"
        >
          <a-input v-model:value="formState.username" size="large" style="margin-top: 15px">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
            name="password"
            :rules="[{ required: true, message: '请输入密码！' }]"
            style="margin: auto"
        >
          <a-input-password v-model:value="formState.password" size="large" style="margin-top: 15px">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"/>
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" style="width: 100%;margin-top: 35px" :size="size">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import {LoginApi} from "@/api/Login/login";
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {setToken} from "@/utils/token-util";
import {setUserName} from "@/utils/user-info";
import {goHomeRoute} from "@/utils/page-util";
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const size = ref('large')
    const formState = reactive({
      username: '',
      password: '',
    });

    const onFinish = () => {
      // console.log('Success:', values);
      // console.log(formState.password)

      let data = {
        account: formState.username,
        password: formState.password,
      }
      LoginApi.login(data).then(function (response) {
        console.log(response);
        setToken(response.data.token)
        setUserName(response.data.loginUser.account)
        goHomeRoute(response.data.loginUser.simpleRoleInfoList[0].roleCode)
      })
    };

    // const onFinishFailed = errorInfo => {
    //   console.log('Failed:', errorInfo);
    // };

    return {
      size,
      formState,
      onFinish,
      // onFinishFailed,
    };
  },
});
</script>

<style>
.background {
  background: url("../../assets/bg-login.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>