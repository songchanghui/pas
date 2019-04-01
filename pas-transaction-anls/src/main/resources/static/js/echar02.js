$(function () {
  var PercentMainChart02 = echarts.init(document.getElementById('PercentMain02'));

  // 指定图表的配置项和数据
  var option ={
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
      {
        left:'left',
        center: ['60%', '50%'],
        label:{
          normal:{
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
                '#f7d487', '#54aaee', '#87f2f9', '#e89192'
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
          {value:40, name:'01'},
          {value:20, name:'02'},
          {value:20, name:'03'},
          {value:20, name:'04'}

        ]
      },

    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  PercentMainChart02.setOption(option);
})