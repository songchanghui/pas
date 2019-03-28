
$(function () {

  var myChart = echarts.extendsMap('echarts', {
    bgColor: '#154e90',
    mapName: '广东',
    goDown: true,
    callback: function(name, option, instance){
      // console.log(name, option, instance);
    },
    data:
      [
        {
          name: '广州市',
          value: 199,
          level: 1
        },
        {
          name: '深圳市',
          value:112,
          level: 2
        },
        {
          name: '佛山市',
          value: 112,
          level: 3
        },
        {
          name: '东莞市',
          value: 198,
          level: 4
        },
        {
          name: '中山市',
          value: 120,
          level: 5
        },
        {
          name: '珠海市',
          value: 116,
          level: 6
        },
        {
          name: '江门市',
          value: 120,
          level: 7
        },
        {
          name: '肇庆市',
          value: 130,
          level: 8
        },
        {
          name: '惠州市',
          value: 128,
          level: 9
        },
        {
          name: '汕头市',
          value: 129,
          level: 10
        },
        {
          name: '潮州',
          value: 120,
          level: 11
        },
        {
          name: '揭阳市',
          value: 158,
          level: 12
        },
        {
          name: '汕尾市',
          value: 121,
          level: 13
        },
        {
          name: '湛江市',
          value: 123,
          level:14
        },
        {
          name: '茂名市',
          value: 110,
          level:15
        },
        {
          name: '阳江市',
          value: 11,
          level: 16
        },
        {
          name: '韶关市',
          value: 198,
          level: 17
        },
        {
          name: '清远市',
          value: 116,
          level: 18
        },
        {
          name: '云浮市',
          value: 114,
          level: 19
        },
        {
          name: '梅州市',
          value: 117,
          level: 20
        },
        {
          name: '河源市',
          value: 120,
          level: 21
        }

      ]
  });
})
