/**
 * Created by songchanghui on 2019/3/28.
 */
/** @namespace item.totalAmount */
/** @namespace item.totalNum */
/** @namespace item.totalShopNum */
/** @param data   [{"name":"云浮市","totalAmount":38122.52135,"totalNum":668109,"totalShopNum":0},{"name":"揭阳市","totalAmount":8325.66144,"totalNum":76357,"totalShopNum":0}]*/
var setRegionInformation = function(data){
    data.forEach(function(item,i){
        var regionName = item.name;
        var totalAmount = item.totalAmount;
        var totalNum = item.totalNum;
        var totalShopNum = item.totalShopNum;

        var templateTr = $("#template").clone();
        templateTr.attr("id","region"+i);
        templateTr.css("display","block");
        templateTr.find("#region").text(regionName);
        templateTr.find("#region-amount").text(totalAmount);
        templateTr.find("#region-amount-percent0").text("40%");
        templateTr.find("#region-amount-percent1").css("width","40%");

        templateTr.find("#region-num").text(totalNum);
        templateTr.find("#region-num-percent0").text("40%");
        templateTr.find("#region-num-percent1").css("width","40%");

        templateTr.find("#region-service-num").text(totalShopNum);
        templateTr.find("#region-service-num-percent0").text("40%");
        templateTr.find("#region-service-num-percent1").css("width","40%");

        templateTr.appendTo("#list");
    });
}
