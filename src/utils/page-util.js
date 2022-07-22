import {removeToken} from "@/utils/token-util";
import router from "@/router";
import {removeUserName} from "@/utils/user-info";

/**
 * 注销账户
 */
export async function logout() {
    removeToken();
    removeUserName();
    // 这样跳转避免再次登录重复注册动态路由
    location.replace('/login');
}

/**
 * 登陆成功后跳转首页
 * @param 登录用户角色
 */
export function goHomeRoute(role){
    if(role==="normal") {
        router.replace('/test')
    }else if(role==="superAdmin"){
        router.replace('/admin')
    }
}

