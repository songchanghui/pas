 var unusual_transacion_transtype_option = {
   tooltip: {
     trigger: 'item',
     formatter: "{b}: {c} ({d}%)"
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
     }
   ]
 };