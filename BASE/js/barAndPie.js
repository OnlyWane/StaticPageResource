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

pieOption = {
    series: [
        {
            name:'',
            type:'pie',
            center: ['50%', '35%'],
            radius: ['30%', '40%'],
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
                {value:335, name:'供应链云'},
                {value:310, name:'制造云'},
                {value:310, name:'全渠道云'},
                {value:234, name:'财务云'}
            ],
            color:[ '#5759A2', '#C15E5E', '#679FA7', '#CC8269']
        }

    ]
}

function initDivSecondRowFirstCol(){
    myChart2 = echarts.init(document.getElementById('bar-one'));

    myChart2.setOption(barOptionOne);
    myChart3 = echarts.init(document.getElementById('pie-one'));
    myChart3.setOption(pieOption);
}
setTimeout(function(){
    initDivSecondRowFirstCol();
}, 300);
// setTimeout(function(){
//     myChart2.resize();
// }, 50)
