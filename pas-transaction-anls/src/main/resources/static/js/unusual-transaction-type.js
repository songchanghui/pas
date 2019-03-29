
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
  formatter:function(val){ return val.split("-").join("\n");},//此语句是让legend 中的文字进行换行</span>
  series: [
      {
        left:'left',
        center: ['40%', '50%'],
        label:{
          normal:{
            lineHeight:56,
            fontSize:12,
            position:'right',
            formatter(v) {
              var text = v.name
              return text.length < 4
                ? text : `${text.slice(0,4)}\n${text.slice(4)}`
            }
          }
        },
        itemStyle:{
          normal:{
            color:function(params) {
              //自定义颜色
              var colorList = [
                '#ef8666', '#4f9dd1', '#84ebe2', '#eec1c1', '#eaa2a2', '#e17678','#86d5f6','#60accf','#fcedd0','#f2d398'
              ];
              return colorList[params.dataIndex]
            },
          }
        },
        type:'pie',
        radius: ['20%', '60%'],
        avoidLabelOverlap: true,
        // labelLine: {
        //   normal: {
        //     length: 0.0001,
        //   }
        // },
      }
    ]
}


