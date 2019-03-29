/**
 * 设置交易信息概况
 * @param data
 */
var setOverview = function(data){
    //异常交易-金额(万元)
    var unusualTotalAmount = data.totalAmount.value;
    //异常交易-笔数(笔)
    var unusualTotalNum = data.totalNum.value;
    //异常交易-服务点数(个)
    var unusualTotalShopNum = data.totalShopNum.value;

    //设置异常概况
    $('#num1').animateNumber({ number: unusualTotalAmount});
    $('#num2').animateNumber({ number: unusualTotalNum });
    $('#num3').animateNumber({ number: unusualTotalShopNum });
}