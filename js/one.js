/*
 * @Author: 徐松博
 * @Date: 2021-04-06 17:00:02
 * @LastEditTime: 2021-04-06 17:31:36
 */

// {

//     ajax({
//         type: 'get',
//         url: 'http://192.168.31.254:3000/guid/hot',
//         success: function (v) {
//             console.log(v);
//             let arr3 = v.slice(4, 8);
//             // let arr4 = [...arr3, ...arr3, ...arr3, ...arr3,]
//             var tmpText1 = doT.template(document.querySelector("#three").innerText);
//             console.log(tmpText1(arr3));
//             document.querySelector(".index_guide>.w>ul").innerHTML = tmpText1(arr3)
//         }
//     })



// }

//  发现酷玩
{

    ajax({
        type: 'get',
        url: 'http://192.168.31.254:3000/report/hot',
        success: function (result) {
            console.log(result);
            let arr1 = result.slice(4, 8);
            // let arr2 = [...arr1, ...arr1, ...arr1, ...arr1,]
            var tmpText = doT.template(document.querySelector("#five").innerText);
            document.querySelector(".three1").innerHTML = tmpText(arr1)

            // console.log(document.querySelector(".main-l-box"));
        }
    })

}

// 导购精选
{

    ajax({
        type: 'get',
        url: 'http://192.168.31.254:3000/report/new',
        success: function (result) {
            console.log(result);
            let arr1 = result.slice(4, 8);
            // let arr2 = [...arr1, ...arr1, ...arr1, ...arr1,]
            let tmpText = doT.template(document.querySelector("#three").innerText);
            document.querySelector(".index_guide>.w>ul").innerHTML = tmpText(arr1)

            // console.log(document.querySelector(".main-l-box"));
        }
    })

}