import Request from "@/utils/request-util";

export class UserInfoApi {

    //获取用户登录信息
    static getUserInfo() {
        return Request.getAndLoadData('/sysUser/currentUserInfo')
    }
}