/*字体自适应*/
function setAdaption(size) {
    return setPro * size;
}

/*区域排名*/
var areaBarOption = {
    barWidth: setAdaption(13),
    grid: {
        show: true,
        height : '82%',
        width: '84%',
        x: '3%',
        y: '16%',
        containLabel: true,
        borderWidth: 0
    },
    xAxis:{
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel:{
            show: false
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
                width: setAdaption(1)
            }
        },
        axisLabel: {
            margin: setAdaption(12),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(12)  
            }

        },
       data: ['东北', '西南', '华中', '华东', '华南']
    },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#C4795F',
                 barBorderRadius: [setAdaption(0), setAdaption(3), setAdaption(3), setAdaption(0)],
                 label:{
                    show: true,
                    position: 'right',
                    textStyle:{
                        color: '#999BA7',//坐标值得具体的颜色
                        fontSize: setAdaption(10)
                    }
                }
            }
        },
        barGap: '0%',
        data: [31.06, 155.43, 227.76, 369.98, 919.64]
    }
    ]
};
/*城市排名*/
var cityBarOption = {
    barWidth: setAdaption(13),
    grid: {
        show: true,
        height : '82%',
        width: '48%',
        x: '3%',
        y: '16%',
        containLabel: true,
        borderWidth: 0
    },
    xAxis:{
        type: 'value',
        min: 0,
        max: 120,
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel:{
            show: false
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
                width: setAdaption(1)
            }
        },
        axisLabel: {
            margin: setAdaption(12),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(12)
            }

        },
        data: ['东莞','北京','成都','重庆','广州']
    },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#C4795F',
                 barBorderRadius: [setAdaption(0), setAdaption(3), setAdaption(3), setAdaption(0)],
                 label:{
                     show: true,
                     position: 'right',
                     textStyle:{
                         color: '#999BA7',//坐标值得具体的颜色
                         fontSize: setAdaption(10)
                     }
                 }
            }
        },
        barGap: '0%',
        data: [49.49, 51.26, 59.12, 78.75, 238.64]
    }
    ]
};
/*种类排名*/
var kindBarOption = {
    barWidth: setAdaption(13),
    grid: {
        show: true,
        height : '82%',
        width: '84%',
        x: '3%',
        y: '16%',
        containLabel: true,
        borderWidth: 0
    },
    xAxis:{
        type: 'value',
        // min: 0,
        // max: 120,
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel:{
            show: false
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
                width: setAdaption(1)
            }
        },
        axisLabel: {
            margin: setAdaption(12),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(12) 
            }

        },
        data: ['果蔬制品类','生鲜蔬果类','乳脂类', '包装盒类','包材配件类']
    },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#C4795F',
                 barBorderRadius: [setAdaption(0), setAdaption(3), setAdaption(3), setAdaption(0)],
                 label:{
                     show: true,
                     position: 'right',
                     textStyle:{
                         color: '#999BA7',//坐标值得具体的颜色
                         fontSize: setAdaption(10)
                     }
                 }
            }
        },
        barGap: '0%',
        data: [165.58,244.13,247.92, 269.26, 342.69]
    }
    ]
};
/*客单价格趋势*/
var priceTendencyLineOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        show: true,
        height : '80%',
        width: '94%',
        x: '3%',
        y: '18%',
        containLabel: true,
        borderWidth: setAdaption(0)
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月'],
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
                fontSize: setAdaption(14)
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
           show: false
        }
    },
    series: [
        {
            type:'line',
            symbolSize: setAdaption(8),
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#CA5A5A',
                        width: setAdaption(4) 
                    },
                    label:{
                        show: true,
                        position: 'top',
                        textStyle:{
                             color: '#ffffff',
                             fontSize: setAdaption(11)
                        }
                    }
                }  
            }, 
            data: [6004.21, 5640.11, 6624.24, 6779.93, 7639.59, 23234.54, 7397.49, 8287.26, 42334.78, 12200.56]
        }
    ]
};
/*销售费用变动趋势（万元）*/
var taskTendencyBarOption = {
    barWidth: setAdaption(40),
    grid: {
        show: true,
        height : '80%',
        width: '94%',
        x: '3%',
        y: '18%',
        containLabel: true,
        borderWidth: setAdaption(0)
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#7FBAF0',
                width: setAdaption(2)
            }
        },
        axisLabel: {
            margin: setAdaption(10),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(14)
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#61A0A8',
                barBorderRadius: [setAdaption(3), setAdaption(3), setAdaption(0), setAdaption(0)],
                label:{
                    show: true,
                    position: 'top',
                    textStyle:{
                        color: '#999BA7',//坐标值得具体的颜色
                        fontSize: setAdaption(13)
                    }
                }
            }
        },
        barGap: '0%',
        data: [61.56,73.36,48.69,50.28,127.68,71.31,56.64,131.83,148.19,324.50]
    }
    ]
};
/*新品价格波动幅度(与上季比)*/
var pirceBarOption = {
    barWidth: setAdaption(10),
    grid: {
        show: true,
        height : '82%',
        width: '88%',
        x: '8%',
        y: '11%',
        containLabel: true,
        borderWidth: setAdaption(0)
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ["华南区","华东区","华中区","西南区"],
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
                fontSize: setAdaption(13)
            }
        }
    },
    yAxis: {
        type: 'value',
        min: -15,
        max: 20,
        interval: setAdaption(5),
        splitLine: {
            show: true,
            lineStyle:{
                color: '#354564',
                width:　setAdaption(2)
            }
        },
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(1)
            }
        },
        axisLabel: {
            margin: setAdaption(10),
            formatter: '{value}%',
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(10)
            }
        }
    },
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#585AA3'
            }
        },
        barGap: '0%',
        data: [8.3, 7.5,3, 1]
    },
    {
        type: 'bar',
        barGap: '0%',
        itemStyle: {
            normal: {
                color:'#BF5F60'
            }
        },
        data: [-4.8, -2, -5, 1]
    },
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#61A0A8'
            }
        },
        barGap: '0%',
        data: [4.2, 4.8, 7, -1]
    },
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#4A6EC2'
            }
        },
        barGap: '0%',
        data: [-8.1, -6.8, -4, -7]
    }
    ]
};
/*新品销量占比(本季)*/
var comparePieOption = {
    series : [
    {
        type: 'pie',
        radius : '50%',
        center: ['48%', '50%'],
        label:{
            normal:{
                textStyle:{
                    fontSize: setAdaption(8),
                    color: '#ffffff'
                },
                show: true, 
                formatter: '{b}\n{d}%',
                position: 'inside'
            }
        },
        data:[
        {value:'87', name:'经典款'},
        {value:'13', name:'新品'},
        ],
        startAngle: -30
    }
    ],
    color:["#4E9CE7","#EAA5DC"]
};
var newPieOption = {
    legend: {
        x: '60%',
        y: 'center',
        itemWidth : setAdaption(10),
        itemHeight : setAdaption(10),
        itemGap: setAdaption(14),
        orient: 'vertical',
        textStyle:{
            color:'#D3D4D9',
            fontSize: setAdaption(9)
        },
        data: ['原味芝士', '红丝甜心', '爱琴海蛋糕', '榴芒千层']
    },
    series : [
    {
        type: 'pie',
        radius : '65%',
        center: ['30%', '52%'],
        label:{
            normal:{
                textStyle:{
                    fontSize:setAdaption(10)
                },
                show: true, 
                formatter: '{d}%',
                position: 'inside'
            }
        },
        data:[
            { value: '16.3', name:'原味芝士'},
            { value: '15.1', name:'红丝甜心'},
            { value: '11.5', name:'爱琴海蛋糕'},
            { value: '8.2', name: '榴芒千层' },
        ]
    }
    ],
    color:["#5859A2","#4A6DC2","#C15E5E","#66A0A8"]
};

var areaBar = echarts.init(document.getElementById('areaBar'));
var cityBar = echarts.init(document.getElementById('cityBar'));
var kindBar = echarts.init(document.getElementById('kindBar'));
var priceTendencyLine = echarts.init(document.getElementById('priceTendencyLine'));
var comparePie = echarts.init(document.getElementById('comparePie'));
var newPie = echarts.init(document.getElementById('newPie'));
var taskTendencyBar = echarts.init(document.getElementById('taskTendencyBar'));
var pirceBar = echarts.init(document.getElementById('pirceBar'));

areaBar.setOption(areaBarOption);
cityBar.setOption(cityBarOption);
kindBar.setOption(kindBarOption);
priceTendencyLine.setOption(priceTendencyLineOption);
comparePie.setOption(comparePieOption);
newPie.setOption(newPieOption);
taskTendencyBar.setOption(taskTendencyBarOption);
pirceBar.setOption(pirceBarOption);

setTimeout(function() {     
    areaBar.resize();
    cityBar.resize();
    kindBar.resize();
    priceTendencyLine.resize();
    comparePie.resize();
    newPie.resize();
    taskTendencyBar.resize();
    pirceBar.resize();
}, 50)
window.addEventListener("resize", function() {
    setTimeout(function() {
        areaBar.resize();
        //areaBar.setOption(areaBarOption);

        cityBar.resize();
        //cityBar.setOption(cityBarOption);

        kindBar.resize();
        //kindBar.setOption(kindBarOption);

        priceTendencyLine.resize();
       // priceTendencyLine.setOption(priceTendencyLineOption);

        comparePie.resize();
        //comparePie.setOption(comparePieOption);
        
        newPie.resize();
        //newPie.setOption(newPieOption);
        
        taskTendencyBar.resize();
        //taskTendencyBar.setOption(taskTendencyBarOption);

        pirceBar.resize();
        //pirceBar.setOption(pirceBarOption);

    }, 50)
});