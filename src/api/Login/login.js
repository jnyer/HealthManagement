import Request from "@/utils/request-util";

export class LoginApi {

    /**
     * 登录接口
     * @param {String} params.account 账号
     * @param {String} params.password 密码
     */
    static login(params){
        return Request.post('/loginApi',params)
    }

    /**
     * 退出登录接口
     */
    static logout() {
        return Request.get('/logoutAction');
    }
}