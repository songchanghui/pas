/**
 * Created by songchanghui on 2019/3/28.
 */
var dataURL="json/unusual_transation_aggregate_province.json";
var serviceDataURL="json/service.json";
/** @namespace dataJson.unusual */
/** @namespace dataJson.unusual.tradeType */
$(function() {
    $.getJSON(serviceDataURL, function (data) {
        console.log(data.service);
        setServiceMap(data.service);
    });
    $.getJSON(dataURL, function (dataJson) {
        setData(dataJson);
    });

    var setData = function(dataJson){
        //设置异常交易概况
        setOverview(dataJson.unusual);
        //设置异常类型占比
        setPieUnusualTransacionType(dataJson.unusual);
        //设置异常交易类型占比
        setPieUnusualTransacionTransType(dataJson.unusual);
        //设置交易金额top5
        setCategoryAmount(dataJson.unusual);
        //设置交易笔数top5
        setCategoryNum(dataJson.unusual);
        //设置异常交易-地区信息
        setRegionInformation(dataJson.unusual.region)
    }
});