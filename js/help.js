/*
 * @Author: 徐松博
 * @Date: 2021-04-02 14:08:42
 * @LastEditTime: 2021-04-06 09:20:20
 */

{
    // 1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    //2、建立连接
    // ajax_.open('get','./demo.txt',true);
    ajax_.open('get', 'http://192.168.31.254:3000/useing/master', true);

    //3、发送请求
    ajax_.send();

    //4、接收服务器数据
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var json_ = ajax_.responseText;
                json_ = eval('(' + json_ + ')');
                console.log(json_)
                render_html(json_)
            } else {
                console.log('获取连接失败');
            }
        }

        function render_html(v) {
            var str = '';
            for (var i = 0; i < v.length; i++) {
                str += '<li>';
                str += '<img src=' + v[i].img + '>'
                str += '<p>' + v[i].text + '</p>'
                str += '<img src="' + v[i].imgurl + '" alt="">'
                str += '<div>' + v[i].note + '</div>'
                str += '<span class="firstIssue">' + v[i].info_ty + '</span>'
                str += '</li>';
                var list_ = document.querySelector('.nav_shop_all>ul');
                list_.innerHTML = str;
            }
            for (var i = 0; i < v.length; i++) {
                str += '<li>';
                str += '<img src=' + v[i].img + '>'
                str += '<p>' + v[i].text + '</p>'
                str += '<img src="' + v[i].imgurl + '" alt="">'
                str += '<div>' + v[i].note + '</div>'
                str += '<span class="firstIssue">' + v[i].info_ty + '</span>'
                str += '</li>';
                var list_ = document.querySelector('.nav_shop_apply>ul');
                list_.innerHTML = str;
            }
        }

    }
}

// {
//     // 1、创建对象
//     var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
//     //2、建立连接
//     // ajax_.open('get','./demo.txt',true);
//     ajax_.open('get', 'http://192.168.31.254:3000/useing/report', true);

//     //3、发送请求
//     ajax_.send();

//     //4、接收服务器数据
//     ajax_.onreadystatechange = function () {
//         if (ajax_.readyState == 4) {
//             if (ajax_.status == 200) {
//                 var json_ = ajax_.responseText;
//                 json_ = eval('(' + json_ + ')');
//                 console.log(json_)
//                 render_html(json_)
//             } else {
//                 console.log('获取连接失败');
//             }
//         }

//         function render_html(v) {
//             var str = '';
//             for (var i = 0; i < v.length; i++) {
//                 str += '<li>';
//                 str += '<img src=' + v[i].img + '>'
//                 str += '<p>' + v[i].text + '</p>'
//                 str += '<img src="' + v[i].imgurl + '" alt="">'
//                 str += '<div>' + v[i].note + '</div>'
//                 str += '<span class="firstIssue">' + v[i].info_ty + '</span>'
//                 str += '</li>';
//                 var list_ = document.querySelector('.nav_shop_all>ul');
//                 list_.innerHTML = str;
//             }
//             for (var i = 0; i < v.length; i++) {
//                 str += '<li>';
//                 str += '<img src=' + v[i].img + '>'
//                 str += '<p>' + v[i].text + '</p>'
//                 str += '<img src="' + v[i].imgurl + '" alt="">'
//                 str += '<div>' + v[i].note + '</div>'
//                 str += '<span class="firstIssue">' + v[i].info_ty + '</span>'
//                 str += '</li>';
//                 var list_ = document.querySelector('.exclusive_shop_all>ul');
//                 list_.innerHTML = str;
//             }
//         }

//     }
// }


let dazhong = document.querySelector('.dazhong'); //大众试用
let tiyan = document.querySelector('.tiyan'); //体验师专享
let quanbu = document.querySelector('.quanbu'); //全部
let shenqing = document.querySelector('.shenqing'); //申请
let shiyong = document.querySelector('.shiyong'); //试用中
let jieshu = document.querySelector('.jieshu'); //已结束
let nav_shop_all = document.querySelector('.nav_shop_all'); //大众试用 商品 全部
let nav_shop_apply = document.querySelector('.nav_shop_apply'); // 大众试用商品申请中
let exclusive_shop_all = document.querySelector('.exclusive_shop_all');

dazhong.onclick = function () {
    dazhong.className = 'active';
    tiyan.className = '';
    nav_shop_all.style.display = 'block';
    exclusive_shop_all.style.display = 'none';
    // console.log(22222);

    quanbu.addEventListener('click', function () {
        quanbu.className = 'active';
        shenqing.className = '';
        nav_shop_apply.style.display = 'none'
        nav_shop_all.style.display = 'block'

    })
    shenqing.addEventListener('click', function () {
        quanbu.className = '';
        shenqing.className = 'active';
        nav_shop_apply.style.display = 'block'
        nav_shop_all.style.c = 'none'

    })
}


tiyan.onclick = function () {
    dazhong.className = '';
    tiyan.className = 'active';
    exclusive_shop_all.style.display = 'block';
    nav_shop_all.style.display = 'none';
    // console.log(1111);
}