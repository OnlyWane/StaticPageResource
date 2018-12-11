/*本周材料超耗*/
var lineOption = {
    title:{
        text: 'zhiggg',
        top: '80%',
        subtext: "机加车间",
        subtextStyle: {
            fontSize: 18,
            color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '4%',
        top: '14%',
        width: '88%',
        height: '76%',
        containLabel: true
    },
    legend: {
        x: '73%',
        y: 'top',
        itemWidth : 18,
        itemHeight : 18,
        itemGap: 14,
        textStyle:{
            color:'#ffffff',
            fontSize: 15
        },
        data: ['超耗金额(元)'],
        icon: 'roundRect'
    },
    xAxis: {
        type: 'category',
        data: ['1101', '1102', '1103', '1104', '1105', '1106', '1107'],
        axisTick:{
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#354463',
                width: 2
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2C3652',
                width: 1
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#ffffff',//坐标值得具体的颜色
                fontSize: 15
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 3000,
        interval: 500,
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#354463',
                width: 2
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2C3652',
                width:　 1
            }
        },
        axisLabel: {
            margin: 10,
            formatter: '{value}',
            textStyle: {
                color: '#ffffff',//坐标值得具体的颜色
                fontSize: 15  
            }

        }
    },
    series: [
        {
            name: "超耗金额(元)",
            type:'line',
            symbol:'none',
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#C85251',
                        width: 4 
                    }  
                }  
            },  
            data:[1200, 1300, 2250, 2000, 1500, 1400,1700]
        }
    ]
};
/*本周车间执行状况*/
var workshopBarOption = {
    barWidth: '26px',
    grid: {
        left: '4%',
        top: '14%',
        width: '88%',
        height: '76%',
        containLabel: true,
        borderWidth: 0
    },
    legend: {
        x: '62%',
        y: 'top',
        itemWidth : 18,
        itemHeight : 18,
        itemGap: 20,
        orient: 'horizontal',
        textStyle:{
            color:'#ffffff',
            fontSize: 15
        },
        data: ['计划数量','完成数量'],
        icon: 'roundRect'
    },
    xAxis: {
        type: 'category',
        data: ["机加车间","装配一车间","装配二车间","总装车间"],
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: 2
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: 'white',//坐标值得具体的颜色
                fontSize: 15
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 1400,
        interval: 200,
        axisTick:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3F5476',
                width: 2
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: '#2A334F',
                width:　 1
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#ffffff',//坐标值得具体的颜色
                fontSize: 15  
            }

        }
    },
    series: [
    {
        type: 'bar',
        name: '计划数量',
        itemStyle: {
            normal: {
                color:'#44647A',
                 barBorderRadius: [3, 3, 0, 0]
            }
        },
        barGap: '0%',
        data: [1000, 800, 1200, 1100]
    },
    {
        type: 'bar',
        name: '完成数量',
        barGap: '0%',
        itemStyle: {
            normal: {
                color:'#61A0A8',
                barBorderRadius: [3, 3, 0, 0]
            }
        },
        data: [800, 600, 1050, 800]
       
    }
    ]
};
/*本周完工质量*/
var qualityPieOption = {
    legend: {
        x: 'center',
        y: '70%',
        width: '180',
        height: '40',
        itemWidth : 18,
        itemHeight : 18,
        itemGap: 24,
        textStyle:{
            color:'#ffffff',
            fontSize: 15
        },
        data: ['合格','不良','报废','返修']
    },
    color: ['#61A0A8','#C23531','#D48265','#C5AB39'],
    series : [
    {
        type: 'pie',
        radius : '55%',
        center: ['50%', '38%'],
        label:{
            normal:{
                textStyle:{
                    fontSize: 15
                },
                show: true, 
                formatter: '{d}%',
                position: 'inside'
            }
        },
        data:[
        {value:'75', name:'合格'},
        {value:'12', name:'不良'},
        {value:'5', name:'报废'},
        {value:'8', name:'返修'}
        ]
    }
    ]
};
var line = echarts.init(document.getElementById('consumeLine'));
line.setOption(lineOption);
var workshopBar = echarts.init(document.getElementById('workshopBar'));
workshopBar.setOption(workshopBarOption);
var qualityPie = echarts.init(document.getElementById('qualityPie'));
qualityPie.setOption(qualityPieOption);

setTimeout(function() {     
    line.resize();
    workshopBar.resize();
    qualityPie.resize();
}, 50)
window.addEventListener("resize", function() {
    setTimeout(function() {
        line.resize();
        line.setOption(consumeLine);

        workshopBar.resize();
        workshopBar.setOption(workshopBarOption);

        qualityPie.resize();
        qualityPie.setOption(qualityPieOption);
    }, 50)
});