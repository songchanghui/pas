var setPieUnusualTransacionTransType = function(data){
    //异常交易类型占比
    var unusualTransType = data.tradeType;
    //设置异常交易类型占比
    var PercentMainChart02 = echarts.init(document.getElementById('PercentMain02'));
    unusual_transacion_transtype_option.series[0].data = unusualTransType;
    PercentMainChart02.setOption(unusual_transacion_transtype_option);
}
var unusual_transacion_transtype_option = {
   tooltip: {
     trigger: 'item',
     formatter: "{b}: {c} ({d}%)"
   },
   series: [
     {
       // startAngle:-40,
       left:'left',
       center: ['45%', '50%'],
       label:{
         normal:{
           // padding: [0, 10],
           formatter(v) {
             var text = v.name
             return text.length <10
               ? text : `${text.slice(0,10)}\n${text.slice(10)}`
           }
         }
       },
       itemStyle:{
         normal:{
           color:function(params) {
             //自定义颜色
             var colorList = [
               '#f6c86a', '#dab9d8', '#8a8766', '#ef8666', '#eacd41', '#bcd64e','#f2d0e1','#ec7289','#6f7dbc','#c7e5dd',
               '#9bb6c7', '#f2993f', '#e8524b', '#748950', '#cdcbbe', '#92a623','#e9e895','#9bb6c7','#9bb6c7','#c2bc66',
             ];
             return colorList[params.dataIndex]
           }
         }
       },
       type:'pie',
       radius: ['22%', '70%'],
       avoidLabelOverlap: false,
       // labelLine: {
       //   normal: {
       //     length: 0.0001,
       //   }
       // },
     }
   ]
 };