/**
 * Created by songchanghui on 2019/3/19.
 */
$(function () {

    var guangdongMap = "frame/echarts-map/province/guangdong.json";

    var  option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },
        //地图相关设置
        geo: {
            map: 'guangdong',
            //视角缩放比例
            zoom: 1,
            //显示文本样式
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#000'
                    }
                },
                //高亮状态下
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            //鼠标缩放和平移
            roam: false,
            left:'30%',
            top:'5%',
            bottom:'3%',
            width:"auto", //图例宽度
            height:"95%", //图例高度
            itemStyle: {
                normal: {
                    borderColor: 'RGBA(123, 220, 221, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#050E28' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#050E28' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: '#050E28',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX:0,
                    shadowOffsetY:0,
                    shadowBlur: 5
                }
            }
        }
    };
    $.get(guangdongMap, function (geoJson) {
        echarts.registerMap('guangdong', geoJson);
        var myChart = echarts.init(document.getElementById('main'));
        myChart.showLoading();
        myChart.hideLoading();
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        myChart.resize();
        console.log("222");
    });
});