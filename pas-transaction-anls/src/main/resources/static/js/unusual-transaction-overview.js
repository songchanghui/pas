/** @namespace data.totalAmount.rate */
/**
 * 设置交易信息概况
 * @param data
 */
var setOverview = function(data){
    //异常交易-金额(万元)
    var unusualTotalAmount = data.totalAmount.value;
    var unusualTotalAmountRate = data.totalAmount.rate;
    //异常交易-笔数(笔)
    var unusualTotalNum = data.totalNum.value;
    var unusualTotalNumRate = data.totalNum.rate;
    //异常交易-服务点数(个)
    var unusualTotalShopNum = data.totalShopNum.value;
    var unusualTotalShopNumRate = data.totalShopNum.rate;

    //设置异常概况
    $('#num1').animateNumber({ number: unusualTotalAmount});
    $('#num1-rate0').text(unusualTotalAmountRate);
    $('#num1-rate1').css("width",unusualTotalAmountRate);
    $('#num2').animateNumber({ number: unusualTotalNum });
    $('#num2-rate0').text(unusualTotalNumRate);
    $('#num2-rate1').css("width",unusualTotalNumRate);;
    $('#num3').animateNumber({ number: unusualTotalShopNum });
    $('#num3-rate0').text(unusualTotalShopNumRate);
    $('#num3-rate1').css("width",unusualTotalShopNumRate);
}