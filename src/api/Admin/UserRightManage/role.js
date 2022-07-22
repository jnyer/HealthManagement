import Request from "@/utils/request";

export class RoleApi{

    /**
     * 获取角色列表
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getRole(params = null){
        return Request.get('/sysRole/page',params)
    }

}