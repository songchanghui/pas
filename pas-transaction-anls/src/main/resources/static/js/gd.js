var  uploadedDataURL="js/guangdong.json";
$(function() {
  var myChart = echarts.init(document.getElementById('echarts'));
  $.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('xiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
      '广州市':[113.264360,23.129080],
      '深圳市':[114.059560,22.542860],
      '珠海市':[113.576680,22.270730],
      '佛山市':[113.121920,23.021850],
      '韶关市':[113.597230,24.810390],
      '湛江市':[110.358940,21.271340],
      '肇庆市':[112.465280,23.046900],
      '江门市':[113.081610,22.578650],
      '茂名市':[110.925230,21.663290],
      '惠州市':[114.416790,23.110750],
      '梅州市':[116.122640,24.288440],
      '汕尾市':[115.375140,22.785660],
      '河源市':[114.700650,23.743650],
      '阳江市':[111.982560,21.858290],
      '清远市':[113.056150,23.682010],
      '东莞市':[113.751790,23.020670],
      '中山市':[113.392600,22.515950],
      '潮州市':[116.622960,23.656700],
      '揭阳市':[116.372710,23.549720],
      '云浮市':[112.044530,22.915250]
    }
    var data = 
      [
      {
      name: '广州市',
      value: 199
    },
      {
        name: '深圳市',
        value:112
      },
      {
        name: '佛山市',
        value: 112
      },
      {
        name: '东莞市',
        value: 198
      },
      {
        name: '中山市',
        value: 120
      },
      {
        name: '珠海市',
        value: 116
      },
      {
        name: '江门市',
        value: 120
      },
      {
        name: '肇庆市',
        value: 130
      },
      {
        name: '惠州市',
        value: 128
      },
      {
        name: '汕头市',
        value: 129
      },
      {
        name: '潮州',
        value: 120
      },
      {
        name: '揭阳市',
        value: 158
      },
      {
        name: '汕尾市',
        value: 121
      },
      {
        name: '湛江市',
        value: 123
      },
      {
        name: '茂名市',
        value: 110
      },
      {
        name: '阳江市',
        value: 11
      },
      {
        name: '韶关市',
        value: 198
      },
      {
        name: '清远市',
        value: 116
      },
      {
        name: '云浮市',
        value: 114
      },
      {
        name: '梅州市',
        value: 117
      },
      {
        name: '河源市',
        value: 120
      }
      
    ];
    var max = 480,
      min = 9; // todo
    var maxSize4Pin = 100,
      minSize4Pin = 20;

    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };
    option = {
      backgroundColor: 'transparent',
      tooltip : {
        trigger: 'item',
        backgroundColor:'rgba(0,0,0,0.6)',
        borderWidth:'1',
        borderColor:'#1c243c',
        textStyle:{
          color:'#fff',
        }

      },
      geo: {
        show: true,
        map: 'xiangxi',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            //区域背景颜色
            areaColor: 'transparent',
            //区域边框颜色
            borderColor: '#7ce0e3',
            borderWidth:1.2,
          },
          emphasis: {
            //鼠标放置区域背景颜色
            areaColor: '#f0bf00',
          }
        }
      },
      series: [
        {
          name: '非异常',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#bb3a4e'
            }
          }
        },
        {
          name: '异常',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 6)),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#74cfd2',
              shadowBlur: 10,
              shadowColor: '#fff'
            }
          },
          zlevel: 1
        },


      ]
    };








    myChart.setOption(option);
  })
});