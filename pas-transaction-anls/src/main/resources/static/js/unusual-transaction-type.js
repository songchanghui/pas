
//设置异常类型占比
var setPieUnusualTransacionType = function(data){
  var unusualType = data.type;
  //设置异常类型占比
    var PercentMainChart = echarts.init(document.getElementById('PercentMain'));
    unusual_transacion_type_option.series[0].data = unusualType;
    PercentMainChart.setOption(unusual_transacion_type_option);
}
var unusual_transacion_type_option ={
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
      {
        left:'left',
        center: ['45%', '50%'],
        itemStyle:{
          normal:{
            color:function(params) {
              //自定义颜色
              var colorList = [
                '#f7d487', '#4f9dd1', '#84ebe2', '#eec1c1', '#eaa2a2', '#e17678','#86d5f6','#60accf','#fcedd0','#f2d398'
              ];
              return colorList[params.dataIndex]
            }
          }
        },
        type:'pie',
        radius: ['22%', '70%'],
        avoidLabelOverlap: false,
      }
    ]
}


