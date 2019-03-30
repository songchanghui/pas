/**
 * Created by songchanghui on 2019/3/28.
 */
var dataURL="json/unusual_transation_aggregate.json";
var serviceDataURL="json/unusual_transation_region.json";
/** @namespace unusual */
/** @namespace data.overview */
/** @namespace data.service */
/** @namespace data.tradeType */
$(function() {
    $.getJSON(dataURL, function (data) {
        setData(data);
    });
    $.getJSON(serviceDataURL, function (data) {
        setServiceMap(data);
        //设置异常交易-地区信息
        setRegionInformation(data.region);
        //设置交易金额top5
        setCategoryAmount(data.region);
        //设置交易笔数top5
        setCategoryNum(data.region);
    });
    var setData = function(data){
        //设置异常交易概况
        setOverview(data.overview);
        //设置异常类型占比
        setPieUnusualTransacionType(data.type);
        //设置异常交易类型占比
        setPieUnusualTransacionTransType(data.tradeType);


    }
});