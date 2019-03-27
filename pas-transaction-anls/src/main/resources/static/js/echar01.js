$(function () {
  var PercentMainChart = echarts.init(document.getElementById('PercentMain'));

  // 指定图表的配置项和数据
  var option ={
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
        // labelLine: {
        //   normal: {
        //     length: 20,
        //     length2: 70,
        //     lineStyle: {
        //       color: '#fff'
        //     }
        //   }
        //
        // },

        data:[
          {value:10, name:'01'},
          {value:30, name:'02'},
          {value:50, name:'03'},
          {value:50, name:'04'},
          {value:4, name:'05'},
          {value:8, name:'06'},
          {value:22, name:'07'},
          {value:5, name:'08'},
          {value:6, name:'09'},
          {value:1, name:'10'}
        ]
      },

    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  PercentMainChart.setOption(option);
})