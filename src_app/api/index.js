/* 
包含应用中所有接口请求函数的模块
*/
import jsonp from "jsonp";
import ajax from "./ajax";
import { message } from "antd";
/* 这里写死用的nba测试地址  http://nba.backend.prod.cbahooppark.cn/NewLeYunService*/
// const BASE = "http://localhost:3000";
const BASE = "";
// 登录

const url =
  "/goods/getCargoList?classId=&formatId=&gymId=1&pageIndex=1&pageSize=10&searchParam=&sortId=";

export const reqLogin = (username, password) =>
  ajax(BASE + url, { username, password }, "GET");
/* 
  json请求的接口请求函数
*/
export const reqWeather = city => {
  const url = "https://api.asilu.com/weather/";
  return new Promise((resolve, reject) => {
    //发送jsonp请求
    try {
      jsonp(url, { timeout: 1500000, param: "callback" }, (err, data) => {
        console.log("jsonp()", data);
          if (!err && data.weather) {
          console.log(data);
          const { temp, weather } = data.weather[0];
          console.log({ temp, weather });
          resolve({ temp, weather });
        } else {
          message.error("获取天气信息失败");
        }
      });
    } catch (error) {}
  });
};

// reqWeather("长沙");
