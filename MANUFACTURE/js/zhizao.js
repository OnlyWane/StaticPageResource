$(function () {

    var mapChart = null;
    var pieChart = null;
    var barChart = null;
    //是否已经异步刷新数据
    var repeat = 1;

    //本周车间执行状况模板数据
    var workshopBarOption = {
        barWidth: '26px',
        grid: {
            left: '6%',
            top: '18%',
            width: '88%',
            height: '76%',
            containLabel:true,
            borderWidth: 0
        },
        legend: {
            x: '50%',
            y: '2%',
            itemWidth: 18,
            itemHeight: 18,
            itemGap: 20,
            orient: 'horizontal',
            textStyle: {
                color: '#ffffff',
                fontSize: setAdaption(10)
            },
            data: ['计划数量', '完成数量'],
            icon: 'roundRect'
        },
        xAxis: {
            type: 'category',
            data: ["机加车间", "装配一车间", "装配二车间", "总装车间"],
            axisTick: {
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
                interval:0,
                margin: 10,
                textStyle: {
                    color: '#D3D4D9',//坐标值得具体的颜色
                    fontSize: setAdaption(8)
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 1400,
            interval: 200,
            axisTick: {
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
                lineStyle: {
                    color: '#2A334F',
                    width: 1
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#D3D4D9',//坐标值得具体的颜色
                    fontSize: setAdaption(10)
                }

            }
        },
        series: [
            {
                type: 'bar',
                name: '计划数量',
                itemStyle: {
                    normal: {
                        color: '#44647A',
                        barBorderRadius: [3, 3, 0, 0]
                    }
                },
                barGap: '0%',
                data: []
            },
            {
                type: 'bar',
                name: '完成数量',
                barGap: '0%',
                itemStyle: {
                    normal: {
                        color: '#61A0A8',
                        barBorderRadius: [3, 3, 0, 0]
                    }
                },
                data: []
            }
        ]
    };

    //本周材料超耗模板数据
    var lineOption = {
        title:{
            left: '58%',
            top: '0%',
            subtext: "",
            subtextStyle: {
                fontSize: setAdaption(10),
                color: '#D3D4D9'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '6%',
            top: '18%',
            width: '88%',
            height: '76%',
            containLabel: true
        },
        legend: {
            x: '76%',
            y: '4%',
            itemWidth: 18,
            itemHeight: 18,
            itemGap: 14,
            textStyle: {
                color: '#D3D4D9',
                fontSize: setAdaption(10)
            },
            data: ['超耗金额(元)'],
            icon: 'roundRect'
        },
        label: {
            normal:{
                show: true,
                position: 'top'
            }
        },
        xAxis: {
            type: 'category',
            data: [],
            axisTick: {
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
                lineStyle: {
                    color: '#2C3652',
                    width: 1
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#D3D4D9',//坐标值得具体的颜色
                    fontSize: setAdaption(10)
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 3000,
            interval: 500,
            axisTick: {
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
                lineStyle: {
                    color: '#2C3652',
                    width: 1
                }
            },
            axisLabel: {
                margin: 10,
                formatter: '{value}',
                textStyle: {
                    color: '#D3D4D9',//坐标值得具体的颜色
                    fontSize: setAdaption(10)
                }

            }
        },
        series: [
            {
                name: "超耗金额(元)",
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#C85251',
                            width: 4
                        },
                        label:{
                            show: true,
                            position: 'top',
                            textStyle:{
                                 color: '#ffffff',
                                 fontSize: setAdaption(15)
                            }
                        }
                    }
                },
                data: []
            }
        ]
    };

    //本周完工质量
    var qualityPieOption = {
        title:{
            left: '60%',
            top: '1%',
            subtext: "",
            subtextStyle: {
                fontSize: setAdaption(10),
                color: '#D3D4D9'
            }
        },
        legend: {
            x: 'center',
            y: '78%',
            width: '180',
            height: '40',
            itemWidth: 18,
            itemHeight: 18,
            itemGap: 24,
            textStyle: {
                color: '#D3D4D9',
                fontSize: setAdaption(10)
            },
            data: ['合格', '不良', '报废', '返修']
        },
        color: ['#61A0A8', '#C23531', '#D48265', '#C5AB39'],
        series: [
            {
                type: 'pie',
                radius: '55%',
                center: ['center', '48%'],
                label: {
                    normal: {
                        textStyle: {
                            fontSize: setAdaption(12)
                        },
                        show: true,
                        formatter: '{d}%',
                        position: 'outside'
                    }
                },
                data: []
            }
        ]
    };

    //本周车间执行状况
    var workshopBar = echarts.init(document.getElementById('workshopBar'));

    //本周材料超耗
    var line = echarts.init(document.getElementById('consumeLine'));

    //本周完工质量
    var qualityPie = echarts.init(document.getElementById('qualityPie'));

    //整个页面的数据源
    var pagemodule = {};

    //从json文件中读取数据
    $.getJSON("./data/zhizao_1.json", function (data) {
        pagemodule = data;
        Init();
    });

    //定时器(5分钟)
    window.setInterval(function (params) {
        repeat++;
        if (repeat > 4) {
            repeat = 1;
        }
        $.getJSON("./data/zhizao_"+repeat+".json", function (data) {
            pagemodule = data;
            AsynInit();
        });
    }, 6000);

    //template helper扩展方法
    template.defaults.imports.split = function (numb, chart) {
        return numb.toString().split(chart);
    };
    template.defaults.imports.unshiftZero = function (arrayNum, length) {
        while (arrayNum.length < length) {
            arrayNum.unshift("");
        }
        return arrayNum;
    };
    template.defaults.imports.formatNum = function (numb) {
        var temp = numb.toString();
        if (temp.length > 3) {
            var StartStr = temp.substr(0, temp.length - 3);
            var SuffixStr = temp.substr(temp.length - 3, 3);
            return StartStr + "," + SuffixStr;
        }
        return temp;
    }

    //初始化
    function Init() {
        //生产订单概况
        var htmlSurvey = template('tpl-Survey', pagemodule.Survey);
        $('#SurveyEl').html(htmlSurvey);
        //生产订单状况
        var htmlOrderStatus = template('tpl-OrderStatus', pagemodule.OrderStatus);
        $('.bottom_big').html(htmlOrderStatus);
        //停工责任
        var htmlDuty = template('tpl-Duty', pagemodule.Duty);
        $('#DutyEl').html(htmlDuty);
        //本周车间执行状况
        workshopBarOption.series[0].data = pagemodule.ExecutionStatus.data[0];
        workshopBarOption.series[1].data = pagemodule.ExecutionStatus.data[1];
        workshopBar.setOption(workshopBarOption);
        //本周材料超耗
        lineOption.title.subtext = pagemodule.MaterialConsumption.subtext;
        lineOption.xAxis.data = pagemodule.MaterialConsumption.data[0];

        lineOption.series[0].data = pagemodule.MaterialConsumption.data[1];
        // lineOption.series[0].data[0].label = {normal: {show: true}};
        line.setOption(lineOption);
        //本周完工质量
        qualityPieOption.title.subtext = pagemodule.CompletionQuality.subtext;
        qualityPieOption.series[0].data = pagemodule.CompletionQuality.data;
        qualityPie.setOption(qualityPieOption);

    }

    //异步刷新
    function AsynInit() {
        //异步是可选的操作，可以针对某个模块刷新
        //生产订单概况
        //其它参照此示例
        //var htmlSurvey = template('tpl-Survey', pagemodule.Survey);
        //$('#SurveyEl').html(htmlSurvey);
        //本周完工质量
        qualityPieOption.title.subtext = pagemodule.CompletionQuality.subtext;
        qualityPieOption.series[0].data = pagemodule.CompletionQuality.data;
        qualityPie.setOption(qualityPieOption);
        //生产订单状况
        var htmlOrderStatus = template('tpl-OrderStatus', pagemodule.OrderStatus);
        $('.bottom_big').html(htmlOrderStatus);
        //本周材料超耗
        lineOption.title.subtext = pagemodule.MaterialConsumption.subtext;
        lineOption.xAxis.data = pagemodule.MaterialConsumption.data[0];
        lineOption.series[0].data = pagemodule.MaterialConsumption.data[1];
        line.setOption(lineOption);
    }
    function setAdaption(size) {
        return setPro * size;
    }
    window.onresize = function () {
        mapChart.resize();
        pieChart.resize();
        barChart.resize();
    }


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
    linecurrentIndex= -1;
    console.log(lineOption);

        setInterval(function () {
                var dataLen = lineOption.series[0].data.length;
                // 取消之前高亮的图形
                line.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: linecurrentIndex
                });
                linecurrentIndex = (linecurrentIndex + 1) % dataLen;
                // 高亮当前图形
                line.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: linecurrentIndex
                });
                // 显示 tooltip
                line.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: linecurrentIndex
                });
    }, 2000);

});
