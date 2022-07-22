/**
 * user-name 操作封装
 */
import {USER_NAME} from "@/config/setting";

/**
 * 获取缓存的的 user-name
 */
export function getUserName(){
    return localStorage.getItem(USER_NAME)
}

/**
 * 缓存 user-name
 * @param userName userName
 */
export function setUserName(userName){
    removeUserName();
    localStorage.setItem(USER_NAME, userName);
}

/**
 * 移除 user-name
 */
export function removeUserName(){
    localStorage.removeItem(USER_NAME);
}