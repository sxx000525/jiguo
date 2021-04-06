/*
 * @Author: SXX
 * @Date: 2021-04-02 14:41:41
 * @LastEditors: SXX
 * @LastEditTime: 2021-04-02 14:58:07
 * @Description: file content
 * @FilePath: \极果\js\report.js
 */
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");
btn1.onclick = function() {
    section3.style.display = "none";
    section2.style.display = "block";
    this.className = "active";
    btn2.className = "";

}
btn2.onclick = function() {
    section2.style.display = "none";
    section3.style.display = "block";
    this.className = "active";
    btn1.className = "";
}