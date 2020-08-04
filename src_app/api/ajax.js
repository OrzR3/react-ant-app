import axios from "axios";
import { message } from "antd"
/* 
能发送ajax请求的函数模块
封装axios库
函数的返回值是promise对象
1.优化：统一处理请求异常
*/
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise
    // 1.执行异步ajax请求
    if (type === "GET") {
      promise = axios.get(url, {//配置对象
        params: data
      });
    } else {
      promise = axios.post(url, data);
    }
    promise.then(response => {
      resolve(response.data);
    }).catch(error => {
      console.log(error);
      console.log(error.message);
      message.error("请求出错了"+error);
    })
    // 2.成功，调用resolve

    // 3.失败，不调用reject，而是提示异常信息
  })
}


