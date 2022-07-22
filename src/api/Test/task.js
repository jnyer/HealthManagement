import Request from "@/utils/request-util";

export class TaskApi {
    /**
     * 获取未完成的任务
     * @returns {Promise<any>}
     */
    static getTodoTask() {
        return Request.get('/user/getTask');
    }
}