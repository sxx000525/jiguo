/*
 * @Author: SXX
 * @Date: 2021-04-06 17:05:23
 * @LastEditors: SXX
 * @LastEditTime: 2021-04-06 17:34:50
 * @Description: file content
 * @FilePath: \极果\js\daogou.js
 */
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {
        console.log(result)
        let arr3 = result.slice(0, 4);
        let arr4 = [...arr3, ...arr3, ...arr3, ...arr3, ]
        var tmpText = doT.template(document.getElementById('li_tmpl-y').innerText);
        document.querySelector('#ul').innerHTML = tmpText(arr3);


    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {
        console.log(result)
        let arr5 = result.slice(5, 13);
        console.log(arr5)
        let arr6 = [...arr5, ...arr5, ...arr5, ...arr5, ]
        console.log(arr6)
        var tmpText = doT.template(document.getElementById('li_tmpl-y2').innerText);
        document.querySelector('#ul2').innerHTML = tmpText(arr5);
    }
})