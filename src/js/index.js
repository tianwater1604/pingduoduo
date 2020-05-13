// 获取文具类型的商品
function getWenJu(){
    $.get("./php/getGoodsListNew.php",{
        "typeId":"001",
        "count":"4"
    },function(datas){
        let htmlStr="";
        let count = 0;
        datas.forEach(goods => {
            count++;
            if(count%4==1){
                htmlStr+=`
                    <li >
                       <a href="goodsdetail.html?goodsId=${goods.goodsId}"> <img src="${goods.goodsImg}"></a>
                    </li>
                `
            }else{
                htmlStr+=`
                    <li>
                    <a href="goodsdetail.html?goodsId=${goods.goodsId}"> <img src="${goods.goodsImg}"></a>
                    </li>
                `
            }
        });
        $("#wenju-box ul").html(htmlStr);
    },"json");
}

$(function(){
    getWenJu();
})