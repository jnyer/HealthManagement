import Request from "@/utils/request-util";

export class UserApi{

    /**
     * 获取用户
     * @param params
     * @returns {Promise<any>}
     */
    static getUser(params= null){
        return Request.get('/sysUser/page',params)
    }
}