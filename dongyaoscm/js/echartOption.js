/*字体自适应*/
function setAdaption(size) {
    return setPro * size;
}

/*本年销售金额趋势(万元)*/
var lineOption = {
    color: ['#91C7AE','#188DF0'],
    legend: {
        x: '38%',
        y: '5%',
        itemWidth : setAdaption(12),
        itemHeight : setAdaption(12),
        itemGap: 35,
        textStyle:{
            color:'#D3D4D9',
            fontSize: setAdaption(11)
        },
        data: ['今年','去年'],
        icon: 'roundRect',
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '4%',
        top: '18%',
        width: '88%',
        height: '76%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width: setAdaption(2)
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月'],
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(5),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(12)
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 500000,
        max: 0,
        splitNumber: 8,
        interval: 50000,
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width:　 setAdaption(1)
            }
        },
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(15),
            formatter: '{value}',
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(11)  
            }

        }
    },
    series: [
        {
            name: '今年',
            type:'line',
            /*smooth: true,*/
            symbol:'none',
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#91C7AE',
                        width: setAdaption(2) 
                    }  
                }  
            },  
            data:[36077, 66411, 122271, 158223, 184805,215927,254786,295864,315894,355897,395697]
        },
        {
            name: '去年',
            type:'line',
            /*smooth: true,*/
            symbol:'none',
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#188DF0',
                        width: setAdaption(2)
                    }  
                }  
            },  
            data:[41530, 60834, 99280, 129172, 158350,199392,225958,260118,301400,334067,378448]
        }
    ]
};
/*本月销售排名(客户)*/
var customerBarOption = {
    barWidth: setAdaption(12),
    grid: {
        show: true,
        height : '78%',
        width: '88%',
        x: '5%',
        y: '18%',
        containLabel: true,
        borderWidth: setAdaption(0)
    },
    xAxis: {
        type: 'value',
        interval: 500,
        max: 3000,
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width:setAdaption(2)
            }
        },
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(10),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(8)
            }
        }
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(15),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(8)  
            },
            formatter: function(val,item){
                if(val.length > 10){
                    var substr = Array.prototype.slice.call(val,0,10).join('') + '...';
                    return substr;
                }else{
                    return val;
                }
            }

        },
       data: ["沈阳铸盈药业有限公司","上海大陆药业有限公司","国药集团药业有限公司","东北制药集团供销有限公司","东北制药集团股份有限公司","东北制药集团沈阳第一有限公司","北京红太阳药业有限公司"],
   
   },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#44647A',
                barBorderRadius: [setAdaption(0), setAdaption(2), setAdaption(2), setAdaption(0)],
                label:{
                    show: true,
                    position: 'right',
                    textStyle:{
                        color: 'white',//坐标值得具体的颜色
                        fontSize: setAdaption(9)
                    }
                }
            }
        },
        barGap: '0%',
        data: [652, 874, 958, 1247, 1356, 1604,2448]
    }
    ]
};
/*本月销售排名(组织)*/
var organizationBarOption = {
    barWidth: setAdaption(12),
    grid: {
        show: true,
        height : '78%',
        width: '88%',
        x: '5%',
        y: '18%',
        containLabel: true,
        borderWidth: setAdaption(0)
    },
    xAxis: {
        type: 'value',
        interval: 2000,
        max: 14000,
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width: setAdaption(2)
            }
        },
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(10),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(6)
            }
        }
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(14),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(8)  
            },
            formatter: function(val,item){
                if(val.length > 10){
                    var substr = Array.prototype.slice.call(val,0,10).join('') + '...';
                    return substr;
                }else{
                    return val;
                }
            }

        },
		 data: ["东北制药集团辽宁生物药业有限公司","沈阳百万运输有限公司","施德销售事业部","沈阳东北制药装备制造有限公司","一药本部","原料药生产事业部","销售事业部"],
        
    },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#61A0A8',
                 barBorderRadius: [0, 3, 3, 0],
                 label:{
                     show: true,
                     position: 'right',
                     textStyle:{
                         color: 'white',//坐标值得具体的颜色
                         fontSize: setAdaption(7.5)
                     }
                 }
            }
        },
        barGap: '0%',
        data: [209, 220, 289, 1915, 3262, 6592,13774]
    }
    ]
};

var line = echarts.init(document.getElementById('tendency_line'));
line.setOption(lineOption);
var customerBar = echarts.init(document.getElementById('customer_bar'));
customerBar.setOption(customerBarOption);
var organizationBar = echarts.init(document.getElementById('organization_bar'));
organizationBar.setOption(organizationBarOption);


setTimeout(function() {     
    line.resize();
    customerBar.resize();
    organizationBar.resize();
}, 50)
window.addEventListener("resize", function() {
    setTimeout(function() {
        line.resize();
        line.setOption(lineOption);

        customerBar.resize();
        customerBar.setOption(customerBarOption);

        organizationBar.resize();
        organizationBar.setOption(organizationBarOption);
    }, 50)
});