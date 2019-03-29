/**
 * Created by songchanghui on 2019/3/28.
 */
var  dataURL="json/unusual_transation_aggregate_province.json";
$(function() {
    $.getJSON(dataURL, function (dataJson) {
        setData(dataJson);
    });
    var setData = function(dataJson){
        //异常交易-金额(万元)
        var unusualTotalAmount = dataJson.unusual.totalAmount;
        //异常交易-笔数(笔)
        var unusualTotalNum = dataJson.unusual.totalNum;
        //异常交易-服务点数(个)
        var unusualTotalShopNum = dataJson.unusual.totalShopNum;
        //异常类型占比
        var unusualType = dataJson.unusual.type;
        //异常交易类型占比
        var unusualTransType = dataJson.unusual.tradeType;
        //异常交易区域数组
        var unusualTransRegion = dataJson.unusual.region;
        var unusualTransRegionSortAmount = unusualTransRegion.sort(function(a,b){
            if (a.totalAmount > b.totalAmount){
                return -1;
            }else{
                return 1;
            }
        }).slice(0,5).sort(function(a,b) {
                if (a.totalAmount > b.totalAmount) {
                    return 1;
                } else {
                    return -1;
                }
            }
        );
        var unusualTransRegionSortAmountyAxisData = [];
        var unusualTransRegionSortAmountSeriesData = [];
        unusualTransRegionSortAmount.forEach(function (item,i) {
            if(i<5){
                unusualTransRegionSortAmountyAxisData.push(item.name);
                unusualTransRegionSortAmountSeriesData.push(item.totalAmount);
            }
        });
        //异常交易笔数排名
        var unusualTransRegionSortNum = unusualTransRegion.sort(function(a,b){
            if (a.totalNum > b.totalNum){
                return -1;
            }else{
                return 1;
            }
        }).slice(0,5).sort(function(a,b) {
                if (a.totalNum > b.totalNum) {
                    return 1;
                } else {
                    return -1;
                }
            }
        );
        var unusualTransRegionSortNumyAxisData = [];
        var unusualTransRegionSortNumSeriesData = [];
        unusualTransRegionSortNum.forEach(function (item,i) {
            if(i<5){
                unusualTransRegionSortNumyAxisData.push(item.name);
                unusualTransRegionSortNumSeriesData.push(item.totalNum);
            }
        });
        //设置异常概况
        $('#num1').animateNumber({ number: unusualTotalAmount});
        $('#num2').animateNumber({ number: unusualTotalNum });
        $('#num3').animateNumber({ number: unusualTotalShopNum });
        //设置异常类型占比
        var PercentMainChart = echarts.init(document.getElementById('PercentMain'));
        unusual_transacion_type_option.series[0].data = unusualType;
        PercentMainChart.setOption(unusual_transacion_type_option);

        //设置异常类型占比
        var PercentMainChart = echarts.init(document.getElementById('PercentMain'));
        unusual_transacion_type_option.series[0].data = unusualType;
        PercentMainChart.setOption(unusual_transacion_type_option);

        //设置异常交易类型占比
        var PercentMainChart02 = echarts.init(document.getElementById('PercentMain02'));
        unusual_transacion_transtype_option.series[0].data = unusualTransType;
        PercentMainChart02.setOption(unusual_transacion_transtype_option);

        //设置异常交易-市交易金额top5
        var FdivContentChart02 = echarts.init(document.getElementById('f-div-content'));
        unusual_transaction_amount_option.yAxis[0].data = unusualTransRegionSortAmountyAxisData;
        unusual_transaction_amount_option.series[0].data = unusualTransRegionSortAmountSeriesData;
        FdivContentChart02.setOption(unusual_transaction_amount_option);

        //设置异常交易-市交易笔数top5
        var TdivContentChart02 = echarts.init(document.getElementById('t-div-content'));
        unusual_transaction_num_option.yAxis[0].data = unusualTransRegionSortNumyAxisData;
        unusual_transaction_num_option.series[0].data = unusualTransRegionSortNumSeriesData;
        TdivContentChart02.setOption(unusual_transaction_num_option);


        //设置市异常信息列表
        var templateTr = $("#template0").clone();
        templateTr.find("#region").text("gggg");
        templateTr.find("#region").css("display","");
        templateTr.find("#region-amount").text("00000");
        templateTr.find("#region-amount-percent0").text("40%");
        templateTr.find("#region-amount-percent1").css("width","40%");
        templateTr.id =


        templateTr.find("#region-num").text("00000");
        templateTr.find("#region-num-percent0").text("40%");
        templateTr.find("#region-num-percent1").css("width","40%");

        templateTr.find("#region-service-num").text("00000");
        templateTr.find("#region-service-num-percent0").text("40%");
        templateTr.find("#region-service-num-percent1").css("width","40%");

        templateTr.appendTo("#list");
    }
});