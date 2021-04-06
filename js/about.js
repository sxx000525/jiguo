/*
 * @Author: 徐松博
 * @Date: 2021-04-06 09:12:01
 * @LastEditTime: 2021-04-06 09:13:52
 */

let teamwork = document.querySelector('.section>.teamwork');
let free = document.querySelector(".free");
let teamwork_t  =document.querySelector('dl>.teamwork_t');
let free_f =document.querySelector('.free_f');


// console.log(teamwork);
// console.log(teamwork);










teamwork_t.onclick = function(){
    // console.log(2);
    teamwork.style.display = 'block';
    free.style.display = 'none'
}
free_f.onclick = function(){
    // console.log(1);
    free.style.display = 'block';
    teamwork.style.display = 'none';
}


