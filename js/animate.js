/*
 * @Author: SXX
 * @Date: 2021-03-15 16:21:35
 * @LastEditors: SXX
 * @LastEditTime: 2021-03-15 17:09:09
 * @Description: file content
 * @FilePath: \JS\js-12\animate.js
 */
/**
 * @description: 缓动动画函数
 * @param {object} element 要操作的元素对象
 * @param {int} target 目标位置
 * @param {function} callback 动画完成之后自动调用的函数
 * @param {int} speed 动画执行速度
 * @Author: SXX
 * @Date: 2021-03-15 16:26:55
 * @Version: 1.0
 */
function animate(element, target, callback = null, speed = 20) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        let left = element.offsetLeft;
        let step = target - left > 0 ? Math.ceil((target - left) / 10) : Math.floor((target - left) / 10);
        if (left != target) {
            element.style.left = left + step + "px";
        } else {
            clearInterval(element.timer);
            callback && callback();
        }
    }, speed)
}