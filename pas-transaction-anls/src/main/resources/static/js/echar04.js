$(function () {
  var TdivContentChart02 = echarts.init(document.getElementById('t-div-content'));
  var option = {
    // backgroundColor: '',
    grid: {
      left: '4%',
      right: '4%',
      bottom: '10%',
      containLabel: true,
      color:'#121933'
    },
    xAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#b2b2b5',
        }
      },
      splitLine: {
        show: false
      },
    },
    yAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#b2b2b5',
        }
      },
      data: ['珠海', '湛江', '茂名', '东莞', '广州']
    },
      {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: ['珠海', '湛江', '茂名', '东莞', '广州']
      },

    ],
    series: [
      {
        type: 'bar',
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(
              1, 0 ,0 ,1 ,[{
                offset: 0,
                color: '#fff500'
              },
                {
                  offset: 0.5,
                  color: '#f6c900'
                },
                {
                  offset: 1,
                  color: '#e46e2e'
                }
              ]
            )
          }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: [120, 132, 101, 134, 90]
      }


    ]
  };
  TdivContentChart02.setOption(option);
})