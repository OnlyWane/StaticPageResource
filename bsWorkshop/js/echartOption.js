//自适应字体大小
function setAdaption(size) {
        return setPro * size;
};
/*备料及时率*/
var lineOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '5%',
        top: '19%',
        width: '88%',
        height: '75%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width: setAdaption(1.5)
            }
        },
        data: ['1102', '1103', '1104', '1105', '1106', '1107', '1108'],
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: setAdaption(1.5)
            }
        },
        axisLabel: {
            margin: setAdaption(7),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(10)
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 80,
        max: 100,
        interval: 4,
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
                width: setAdaption(1.5)
            }
        },
        axisLabel: {
            margin: setAdaption(7),
            formatter: '{value}%',
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(10)  
            }

        }
    },
    series: [
        {
            type:'line',
            /*smooth: true,*/
            symbol:'none',
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#188df0',
                        width:setAdaption(2) 
                    }  
                }  
            },  
            data:[85, 94, 90, 80, 90, 85,92]
        }
    ]
};
/*车间资源率分析*/
var analysisBarOption = {
    barWidth: setAdaption(13),
    grid: {
        height : '75%',
        width: '89%',
        borderWidth: setAdaption(0),
        left: '5%',
        top: '19%',
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
        data: ["电机1线","电机2线","电机3线","电机4线","电机5线","电机6线"],
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
            margin: setAdaption(7),
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(10)
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 80,
        max: 100,
        interval: 4,
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
            margin: setAdaption(7),
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
                color:'#44647a',
                 barBorderRadius: [setAdaption(2), setAdaption(2), setAdaption(0), setAdaption(0)]
            }
        },
        barGap: '0%',
        data: [89, 89, 97, 93, 91, 94]
    },
    {
        type: 'bar',
        barGap: '0%',
        itemStyle: {
            normal: {
                color:'#d48265',
                barBorderRadius: [setAdaption(2), setAdaption(2), setAdaption(0), setAdaption(0)]
            }
        },
        data: [91, 86, 92, 90, 88, 88]
       
    },
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#61a0a8',
                barBorderRadius: [setAdaption(2), setAdaption(2), setAdaption(0), setAdaption(0)]
            }
        },
        barGap: '0%',
        data: [81, 85, 89, 84, 80, 83]

    },
    ]
};
/*异常趋势*/
var tendencyBarOption = {
    barWidth: setAdaption(8),
    grid: {
        show: true,
        height : '60%',
        width: '76%',
        x: '6%',
        y: '15%',
        containLabel: true,
        borderWidth: 0
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false,
            lineStyle:{
                color: '#2A334F',
                width:　 setAdaption(2)
            }
        },
        data: ["40周","41周","42周","43周","44周","本周"],
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
                fontSize: setAdaption(9)
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width:　 setAdaption(2)
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
            formatter: '{value}',
            textStyle: {
                color: '#D3D4D9',//坐标值得具体的颜色
                fontSize: setAdaption(9)
            }
        }
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#61A0A8'
            }
        },
        barGap: '0%',
        data: [23, 27, 9, 20, 12, 20]
    },
    {
        type: 'bar',
        barGap: '0%',
        itemStyle: {
            normal: {
                color:'#44647A'
            }
        },
        data: [28, 35, 12, 29, 18, 27]
    }
    ]
};
/*缺陷分析*/
var pieOption = {
    legend: {
        x: '74%',
        y: 'center',
        itemWidth : setAdaption(10),
        itemHeight : setAdaption(10),
        itemGap: 14,
        orient: 'vertical',
        textStyle:{
            color:'#D3D4D9',
            fontSize: setAdaption(9)
        },
        data: ['开焊','无信号','螺丝折断','掉漆','其它']
    },
    series : [
    {
        type: 'pie',
        radius : '58%',
        center: ['39%', '52%'],
        label:{
            normal:{
                textStyle:{
                    fontSize: setAdaption(10)
                },
                show: true, 
                formatter: '{d}%',
                position: 'outside'
            }
        },
        data:[
        {value:'35', name:'开焊'},
        {value:'22', name:'无信号'},
        {value:'18', name:'螺丝折断'},
        {value:'10', name:'掉漆'},
        {value:'15', name:'其它'}
        ]
    }
    ],
    color:["#91c7ae","#ca5a5a","#61a0a8","#c5ab39","#d48265"]
};
var line = echarts.init(document.getElementById('timeliness'));
line.setOption(lineOption);
var analysisBar = echarts.init(document.getElementById('resourceAnalysis'));
analysisBar.setOption(analysisBarOption);
var tendencyBar = echarts.init(document.getElementById('abnormalTendency'));
tendencyBar.setOption(tendencyBarOption);
var pie = echarts.init(document.getElementById('defectAnalysis'));
pie.setOption(pieOption);

setTimeout(function() {     
    line.resize();
    analysisBar.resize();
    tendencyBar.resize();
    pie.resize();
}, 50)
window.addEventListener("resize", function() {
    setTimeout(function() {
        line.resize();
        line.setOption(lineOption);

        analysisBar.resize();
        analysisBar.setOption(analysisBarOption);

        tendencyBar.resize();
        tendencyBar.setOption(tendencyBarOption);

        pie.resize();
        pie.setOption(pieOption);
    }, 50)
});

//自适应字体大小
function setAdaption(size) {
        return setPro * size;
};


