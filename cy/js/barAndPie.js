/*字体自适应*/
function setAdaption(size) {
    return setPro * size;
}

var xMonth = (function(){
    var arr=[];
    for(var i=1; i<=12; i++){
        arr.push(i + '月');
    }
    return arr;
})();

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
        width: "90%",
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
                width:　 2,
                type: 'solid'
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: '#354564',
                width:　 1
            }
        },

        axisLabel:{
            show: true,
            textStyle:{
                fontSize: 18,
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
        data: xMonth,
        axisLine:{
            show: true,
            lineStyle: {
                width:　 2,
                color :"#3f5476"
            }
        },
        axisTick:{
            show: false
        } ,
        axisLabel:{
            textStyle:{
                color:'#fff',
                fontSize: 18
            }
        }
    },
    series: [

        {
            type: 'bar',
            data: [40,38,50,55,36,38,40,38,50,55,36,38],
            barWidth:20,
            label:{
                normal:{
                    show: false,
                    position: 'top',
                    formatter: '{c}',
                    textStyle:{
                        color:'#61A0A8',
                        fontSize: 20
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:'#61A0A8',
                    barBorderRadius: [3, 3, 0, 0]
                }
            }
        }
    ]
};
/*渠道占比 */
pieOption = {
    series: [
        {
            name:'',
            type:'pie',
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}{d}%',
                    textStyle:{
                        fontSize: 15
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
                {value:310, name:'全渠道'}
            ],
            color:[ '#5759A2', '#C15E5E', '#679FA7', '#CC8269']
        }

    ]
}

/*收款方式 */
pieOptionLeft = {
    legend: {
        show:true,
       bottom: '5%',
        x: 'center',
        itemWidth: setAdaption(8),
        itemHeight:setAdaption(8),
       itemGap: 15,
       textStyle:{
           color: '#CECFD5',
           opacity: 0.8,
           fontSize: setAdaption(9)
       },
           data: ['现金','会员','银联卡','微信','支付宝','闪惠','挂账']
    },
    series: [
        {
            name:'',
            type:'pie',
            center: ['50%', '40%'],
            radius: '50%',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{d}%',
                    textStyle:{
                        fontSize: setAdaption(10)
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
                {value:677987.87, name:'现金'},
                {value:3971071.81, name:'会员'},
                {value:1840252.79, name:'银联卡'},
                {value:1549686.56, name:'微信'},
                {value:871698.69, name:'支付宝'},
                {value:484277.05, name:'闪惠'},
                {value:290566.23, name:'挂账'}
            ],
            color:[ '#BD5F5F', '#3A638C', '#6D9FA6', '#4D72C2', '#585CA2', '#C8826A','#D492CA']
        }

    ]
}

/*消费类型占比 */
pieOptionRightOne = {
    legend: {
        show:true,
       bottom: '5%',
        x: 'center',
        itemWidth: setAdaption(8),
        itemHeight: setAdaption(8),
       itemGap: 15,
       textStyle:{
           color: '#CECFD5',
           opacity: 0.8,
           fontSize: setAdaption(9)
       },
           data: ['堂食','外卖','外带']
    },
    series: [
        {
            name:'',
            type:'pie',
            center: ['50%', '40%'],
            radius: '60%',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{d}%',
                    textStyle:{
                        fontSize: setAdaption(10)
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
                {value:96, name:'堂食'},
                {value:21, name:'外卖'},
                {value:50, name:'外带'}
            ],
            color:[ '#B96060', '#6D9FA6', '#585CA2']
        }

    ]
}

/*渠道销售占比 */
pieOptionRightTwo = {
    legend: {
            show:true,
           bottom: '5%',
            x: 'center',
            itemWidth: setAdaption(8),
            itemHeight: setAdaption(8),
           itemGap: 15,
           textStyle:{
               color: '#CECFD5',
               opacity: 0.8,
               fontSize: setAdaption(9)
           },
           data: ['百度','口碑','美团','饿了么','其它']
    },
    series: [
        {
            name:'',
            type:'pie',
            center: ['50%', '40%'],
            radius: '60%',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{d}%',
                    textStyle:{
                        fontSize: setAdaption(10)
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
                {value:2062, name:'百度'},
                {value:896, name:'口碑'},
                {value:1105, name:'美团'},
                {value:1526, name:'饿了么'},
                {value:310, name:'其它'}
            ],
            color:[ '#585AA3', '#C15E5E', '#4A6EC2', '#669FA7', '#36628C']
        }

    ]
}

function initDivSecondRowFirstCol(){
    myChart1 = echarts.init(document.getElementById('pie-left'));
    myChart1.setOption(pieOptionLeft);
    
    myChart2 = echarts.init(document.getElementById('pie-two'));
    myChart2.setOption(pieOptionRightOne);

    myChart3 = echarts.init(document.getElementById('pie-three'));
    myChart3.setOption(pieOptionRightTwo);
    setTimeout(function(){
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    },50);
    window.addEventListener("resize", function() {
        setTimeout(function() {
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
        }, 50);
    });
}
setTimeout(function(){
    initDivSecondRowFirstCol();
}, 300);