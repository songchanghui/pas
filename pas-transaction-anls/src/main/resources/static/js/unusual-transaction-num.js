/** @param data
 * [
 * {"name":"云浮市","totalAmount":38122.52135,"totalNum":668109,"totalShopNum":0},
 * {"name":"揭阳市","totalAmount":8325.66144,"totalNum":76357,"totalShopNum":0}
 * ]*/var setCategoryNum = function(data){
  //异常交易笔数排名
  var unusualTransRegionSortNum = data.region.sort(function(a,b){
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
  //设置异常交易-市交易笔数top5
  var TdivContentChart02 = echarts.init(document.getElementById('t-div-content'));
  unusual_transaction_num_option.yAxis[0].data = unusualTransRegionSortNumyAxisData;
  unusual_transaction_num_option.series[0].data = unusualTransRegionSortNumSeriesData;
  TdivContentChart02.setOption(unusual_transaction_num_option);
}
var unusual_transaction_num_option = {
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
      }
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
        }
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
        barCategoryGap: '50%'
      }
    ]
}