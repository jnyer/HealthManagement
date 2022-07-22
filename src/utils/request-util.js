import request from "@/utils/request";

export default class RequestUtil {
    //get请求
    static async get(url, params) {
        if (params === undefined) {
            params = {};
        }
        let result = await request.get(url, { params });
        return result.data;
    }

    //get请求并获取数据
    static async getAndLoadData(url, params) {
        let result = await this.get(url, params);
        return result.data;
    }

    //post请求
    static async post(url, params) {
        if (params === undefined) {
            params = {};
        }
        let result = await request.post(url, params);
        return result.data;
    }

    //post请求并获取数据
    static async postAndLoadData(url, params) {
        let result = await this.post(url, params);
        return result.data;
    }
}