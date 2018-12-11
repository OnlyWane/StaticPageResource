/*字体自适应*/
function setAdaption(size) {
    return setPro * size;
}
/*地区订单*/
barDataOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    backgroundColor: '#232841',
    grid: {
        width: "90%",
        height:"82%",
        left: '25',
        bottom: '5%',
        containLabel: true
    },

    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.1],
        axisLine: {
            show: false,
            lineStyle: {
                color :"#3f5476",
                width:　 setAdaption(2),
                type: 'solid'
            }
        },
        splitLine: {
            show: false,
            lineStyle:{
                color: '#2A334F',
                width:　 setAdaption(2)
            }
        },

        axisLabel:{
            show: false,
            textStyle:{
                fontSize: setAdaption(18),
                color:'#fff',
            }
        },
        axisTick:{
            show: false
        },
        min: 0,
        max:60,
        splitNumber: setAdaption(6)

    },
    yAxis: {
        type: 'category',
        data: ['华东','华北','华南','东北','华东','华中','西南'],
        axisLine:{
            show: true,
            lineStyle: {
                width:　 setAdaption(2),
                color :"#3f5476"
            }
        },
        axisTick:{
            show: false
        } ,
        axisLabel:{
            textStyle:{
                color:'#D3D4D9',
                fontSize: setAdaption(12)
            }
        }
    },
    series: [

        {
            type: 'bar',
            data: [32,35,38,43,48,50,30],
            barWidth:'40%',
            label:{
                normal:{
                    show: true,
                    position: 'right',

                    textStyle:{
                        color:'#fff',
                        fontSize: setAdaption(13)
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:'#C4795F',
                    barBorderRadius: [setAdaption(0), setAdaption(2), setAdaption(2),setAdaption(0)]
                }
            }
        }
    ]
};

/*品类排名*/ 
barOptionOne = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    backgroundColor: '#232841',
    grid: {
        width: "80%",
        height:"82%",
        left: '25',
        bottom: '5%',
        containLabel: true
    },

    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.1],
        axisLine: {
            show: false,
            lineStyle: {
                color :"#3f5476",
                width:　 setAdaption(2),
                type: 'solid'
            }
        },
        splitLine: {
            show: false,
            lineStyle:{
                color: '#2A334F',
                width:　 setAdaption(2)
            }
        },

        axisLabel:{
            show: false,
            textStyle:{
                fontSize: setAdaption(18),
                color:'#fff',
            }
        },
        axisTick:{
            show: false
        },
        min: 0,
        max:60,
        splitNumber: 6

    },
    xAxis: {
        type: 'category',
        data: ['中山','云南','江西','深圳','云南','南昌','云贵', '广州'],
        axisLine:{
            show: true,
            lineStyle: {
                width:　 setAdaption(2),
                color :"#3f5476"
            }
        },
        axisTick:{
            show: false
        } ,
        axisLabel:{
            textStyle:{
                color:'#D3D4D9',
                fontSize: setAdaption(12)
            }
        }
    },
    series: [

        {
            type: 'bar',
            data: [40,38,50,55,36,38,45,45],
            barWidth:'30%',
            label:{
                normal:{
                    show: true,
                    position: 'top',
                    formatter: '{c}k',
                    textStyle:{
                        color:'#61A0A8',
                        fontSize: setAdaption(14)
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:'#61A0A8',
                    barBorderRadius: [setAdaption(2), setAdaption(2), setAdaption(0), setAdaption(0)]
                }
            }
        }
    ]
};

pieOption = {
    series: [
        {
            name:'',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['65%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}{d}%',
                    textStyle:{
                        fontSize: setAdaption(9)
                    }
                }
            },
            tooltip:{
                show: false
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'移动渠道'},
                {value:310, name:'网上渠道'},
                {value:234, name:'全渠道'}
            ],
            color:[ '#5758A2', '#C15E5E', '#679FA7']
        },
        {
            name:'',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['55%', '55%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '{b}',
                    textStyle:{
                        fontSize: setAdaption(13),
                        color: '#C15E5E'
                    }
                }
            },
            tooltip:{
                show: false
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value: 123, name:'渠道销售'}
            ],
        }
    ]
}


var barData = [

    ["新加坡",21],
    ["阿尔及利亚",35],
    ["尼日尔",48],
    ["乍得",43],
    ["乌兹别克",38],
    ["印度尼西亚",28],
    ["莫桑比克",32],
    ["欧信",20],
    ["突尼斯",19],
    ["缅甸",18]
];
var barData2 = [
    ["新加坡",21],
    ["阿尔及利亚",35],
    ["尼日尔",48],
    ["乍得",43],
    ["乌兹别克",38],
    ["印度尼西亚",28],
    ["莫桑比克",32],
    ["欧信",20],
    ["突尼斯",19],
    ["缅甸",18]
];
//var myChart1 = null,myChart4 = null;
// function initDivSecondRowFirstCol(){
//     myChart2 = echarts.init(document.getElementById('bar-two'));
//     myChart2.setOption(barDataOption);

//     myChart1 = echarts.init(document.getElementById('bar-one'));
//     myChart1.setOption(barOptionOne);

//     myChart3 = echarts.init(document.getElementById('pie-one'));
//     myChart3.setOption(pieOption);
//     // setInterval(function () {
//     //     for(var i =0;i<barData.length;i++){
//     //         x = Math.random()>0.99?1:0;//控制增加或者不增加
//     //         y = Math.random()>0.99?1:1;//控制加一或者加二
//     //         barData[i][1]+= x*y;
//     //
//     //         if(barData[i][1]>400){
//     //             barData=[];
//     //             barData = barData2.slice(0);
//     //             break;
//     //         }
//     //     }
//     //
//     //     barData.sort(function (m,n) {
//     //         return n[1] - m[1];
//     //     });
//     //     var option = myChart1.getOption();
//     //     option.yAxis.data = barData.slice(0,5).map(function (item,index,array) {
//     //         return item[0];
//     //     }).reverse();
//     //     option.series[0].data= barData.slice(0,5).map(function (item,index,array) {
//     //         return item[1];
//     //     }).reverse();
//     //     myChart1.setOption(option);
//     //
//     // }, 30000);
   
// }
var myChart2 = echarts.init(document.getElementById('bar-two'));
myChart2.setOption(barDataOption);

var myChart1 = echarts.init(document.getElementById('bar-one'));
myChart1.setOption(barOptionOne);

var myChart3 = echarts.init(document.getElementById('pie-one'));
myChart3.setOption(pieOption);

// setTimeout(function(){
//     initDivSecondRowFirstCol();
// }, 50);

//自适应
setTimeout(function () {
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
}, 50)
window.addEventListener("resize", function () {
    setTimeout(function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    }, 50)
});
