
/** @param data
 * [
 * {"name":"云浮市","totalAmount":38122.52135,"totalNum":668109,"totalShopNum":0},
 * {"name":"揭阳市","totalAmount":8325.66144,"totalNum":76357,"totalShopNum":0}
 * ]*/
var setCategoryAmount = function(data){
    //异常交易区域数组
    var unusualTransRegion = data;
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
    //设置异常交易-市交易金额top5
    var FdivContentChart02 = echarts.init(document.getElementById('f-div-content'));
    unusual_transaction_amount_option.yAxis[0].data = unusualTransRegionSortAmountyAxisData;
    unusual_transaction_amount_option.series[0].data = unusualTransRegionSortAmountSeriesData;
    FdivContentChart02.setOption(unusual_transaction_amount_option);

}
unusual_transaction_amount_option = {
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
        show: true,
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
                  color: '#c6ffff'
                },
                  {
                    offset: 0.5,
                    color: '#b4ffff'
                  },
                  {
                    offset: 1,
                    color: '#8effff'
                  }
                ]
            )
          }
        },
        barGap: '0%',
        barCategoryGap: '50%'
      }


    ]
  };