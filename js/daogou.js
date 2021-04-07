/*
 * @Author: SXX
 * @Date: 2021-04-06 17:05:23
 * @LastEditors: SXX
 * @LastEditTime: 2021-04-07 09:22:25
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
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {
        console.log(result);
        let arr7 = result.slice(0, 16);
        let arr8 = [...arr7, ...arr7, ...arr7, ...arr7, ]
        var tmpText = doT.template(document.querySelector("#li_tmpl-lb").innerText);
        document.querySelector(".index_kuwan>.w>ul").innerHTML = tmpText(arr7)
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {
        console.log(result);
        let arr9 = result.slice(0, 16);

        let arr10 = [...arr9, ...arr9, ...arr9, ...arr9, ]
        var tmpText = doT.template(document.querySelector("#li_tmpl-y3").innerText);
        document.querySelector("#ul3").innerHTML = tmpText(arr9)
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {
        console.log(result);
        let arr11 = result.slice(0, 16);

        let arr12 = [...arr11, ...arr11, ...arr11, ...arr11, ]
        var tmpText = doT.template(document.querySelector("#li_tmpl-y4").innerText);
        document.querySelector("#ul4").innerHTML = tmpText(arr11)
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/guid/new',
    success: function(result) {
        console.log(result);
        let arr13 = result.slice(0, 15);
        let arr14 = [...arr13, ...arr13, ...arr13, ...arr13, ]
        var tmpText = doT.template(document.querySelector("#li_tmpl-y5").innerText);
        document.querySelector("#ul5").innerHTML = tmpText(arr13)
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function(result) {
        console.log(result);
        let arr15 = result.slice(0, 12);
        let arr16 = [...arr15, ...arr15, ...arr15, ...arr15, ]
        var tmpText = doT.template(document.querySelector("#li_tmpl-y6").innerText);
        document.querySelector("#ul6").innerHTML = tmpText(arr15)
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/master',
    success: function(result) {
        console.log(result);
        let arr17 = result.slice(0, 12);
        let arr18 = [...arr17, ...arr17, ...arr17, ...arr17, ]
        var tmpText = doT.template(document.querySelector("#li_tmpl-y7").innerText);
        document.querySelector("#ul7").innerHTML = tmpText(arr17)
    }
})