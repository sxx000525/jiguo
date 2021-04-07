/*
 * @Author: SXX
 * @Date: 2021-04-06 19:22:57
 * @LastEditors: SXX
 * @LastEditTime: 2021-04-06 19:46:16
 * @Description: file content
 * @FilePath: \极果\js\index.js
 */
{ // 申请时间剩余
    setInterval(days, 1000)

    function days() {
        let presentTime = new Date();
        let futureTense = new Date('2021-06-30');
        let seconds = (futureTense - presentTime) / 1000;
        let day = parseInt(seconds / 3600 / 24);
        let hours = parseInt(seconds / 3600 % 24);
        let minutes = parseInt(seconds / 60 % 60);
        let miao = parseInt(seconds % 60)
        let daojishi = (day + "天 " + hours + "小时 " + minutes + "分 " + miao + "秒");
        document.querySelector('#times').innerHTML = daojishi;
        // console.log(daojishi);
    }
    days();
};