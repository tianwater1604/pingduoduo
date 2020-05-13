//根据商品编号 获取商品详情，
function getDetail(goodsId){
    $.get("./php/getGoodsInfo.php",{
        "goodsId":goodsId,
    },function(data){
        let htmlStr=`
            <h1>${data.goodsName}商品的详情</h1>
            <p><img src="${data.goodsImg}"></p>
            <p>名称：${data.goodsName}</p>
            <p>价格：${data.goodsPrice}</p>
        `;
        $("#box").html(htmlStr);
    },"json");
}

//把指定商品 添加到购物车
function addShoppingCar(goodsId){    
    $.post("./php/addShoppingCart.php",{
        "vipName":"宋超波",
        "goodsId":goodsId,
        "goodsCount":$("#count").val()
    },(data)=>{
        if(data==="0"){
            alert("添加失败");
        }else{
            alert("添加成功");
        }
    });
}

$(function(){
    let goodsId = location.search.split("=")[1];
    getDetail(goodsId);
    $("#btnAddShoppingCar").click(function(){
        addShoppingCar(goodsId);
    });
    $("#btnAdd").click(function(){
        let count = parseInt($("#count").val()) ;
        count++;
        $("#count").val(count);       
    });
    $("#btnReduce").click(function(){
        let count = parseInt($("#count").val()) ;
        count--;
        $("#count").val(count);       
    });

    $("#btnShoppingCar").click(function(){
        location.href="shoppingCar.html";
    });
})