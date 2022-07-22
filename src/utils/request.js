import axios from "axios";
import {getToken, setToken} from './token-util';
import {TOKEN_HEADER_NAME} from '@/config/setting';
import router from '@/router';
import {Modal,message} from 'ant-design-vue';
import {unref} from "vue";
import {logout} from "@/utils/page-util";
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
});

/**
 * 处理错误响应
 */
const processErrorResponse = function (response) {
    // 如果是非B0301，则提示错误信息
    if (response.data.code !== 'B0301') {
        if(response.data.code === 'A0304'||response.data.code === 'A1871'){
            message.error("账号或密码错误")
        }else {
            Modal.destroyAll();
            Modal.info({
                title: '系统提示',
                content: response.data.message,
                okText: '重新登录',
                onOk: () => {
                    logout();
                }
            })
        }
    } else {
        const currentPath = unref(router.currentRoute).path;
        if (currentPath === '/login') {
            logout();
        } else {
            Modal.destroyAll();
            Modal.info({
                title: '系统提示',
                content: '登录状态已过期, 请退出重新登录!',
                okText: '重新登录',
                onOk: () => {
                    logout();
                }
            });
        }
    }

    return Promise.reject(response.data);
};
/**
 * 添加请求拦截器
 */
service.interceptors.request.use(
    config => {
        // 添加 token 到 header
        const token = getToken();
        // console.log(token)
        if (token && config.headers) {
            config.headers.common[TOKEN_HEADER_NAME] = token;
        }
        // console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 添加响应拦截器
 */
service.interceptors.response.use(
    res => {
        console.log(res)
        console.log(getToken())
        // 请求成功，token自动续期
        if (res.data?.code === '00000') {
            // console.log(res.headers)
            const token = res.headers[TOKEN_HEADER_NAME.toLowerCase()];
            if (token) {
                setToken(token);
            }
            return res;
        }

        // 处理响应错误，请求异常自动提示错误信息，如果是B0301就跳转到登录界面
        return processErrorResponse(res);
    },
    error => {
        // 处理响应错误
        return processErrorResponse(error.response);
    }
);
export default service