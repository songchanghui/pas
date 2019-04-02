var setServiceMap = function(data){
    var count = 0;
    var dataLength = data.region.length; //此处设置的是需要轮播的次数
    var intervalTime = 3000;//轮播时间间隔
    var chart_map = echarts.extendsMap('echarts', {
        bgColor: '#154e90',
        mapName: '广东',
        goDown: true,
        data:data
    });
    timeTicket && clearInterval(timeTicket);
    var timeTicket = setInterval(function () {
        chart_map.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,    //serieIndex的索引值   可以触发多个
        });
        chart_map.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        chart_map.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }, intervalTime);
    chart_map.on('mouseover', function (params) {
        clearInterval(timeTicket);
        chart_map.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
        });
        chart_map.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex
        });
        chart_map.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
    });
    chart_map.on('mouseout', function (params) {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
            chart_map.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
            });
            chart_map.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            chart_map.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            count++;
        }, intervalTime);
    });

}
