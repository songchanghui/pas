/**
 * Created by songchanghui on 2019/3/28.
 */
/** @namespace item.totalAmount */
/** @namespace item.totalNum */
/** @namespace item.totalShopNum */
/** @namespace item.totalAmountRate */
/** @namespace item.totalNumRate */
/** @namespace item.totalShopNumRate */
/** @param data   [{"name":"云浮市","totalAmount":38122.52135,"totalNum":668109,"totalShopNum":0},{"name":"揭阳市","totalAmount":8325.66144,"totalNum":76357,"totalShopNum":0}]*/
var setRegionInformation = function(data){
    data.forEach(function(item,i){
        var regionName = item.name;
        var totalAmount = item.totalAmount;
        var totalNum = item.totalNum;
        var totalShopNum = item.totalShopNum;
        var totalAmountRate = item.totalAmountRate;
        var totalNumRate = item.totalNumRate;
        var totalShopNumRate = item.totalShopNumRate;

        var templateTr = $("#template").clone();
        templateTr.attr("id","region"+i);
        templateTr.attr("name","region");
        templateTr.find("#region").text(regionName);
        templateTr.find("#region-amount").text(totalAmount);
        templateTr.find("#region-amount-rate0").text(totalAmountRate);
        templateTr.find("#region-amount-rate1").css("width",totalAmountRate);

        templateTr.find("#region-num").text(totalNum);
        templateTr.find("#region-num-rate0").text(totalNumRate);
        templateTr.find("#region-num-rate1").css("width",totalNumRate);

        templateTr.find("#region-service-num").text(totalShopNum);
        templateTr.find("#region-service-num-rate0").text(totalShopNumRate);
        templateTr.find("#region-service-num-rate1").css("width",totalShopNumRate);

        templateTr.appendTo("#list");
    });
    setTimeout(function () {
        var allObj=$('[name=region]');
        allObj.show();
    },1000);
}
