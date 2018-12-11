/*字体自适应*/
function setAdaption(size) {
    return setPro * size;
}

//仪表盘模板
var commonOption = [
{
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    grid: {
        width: "100%",
        height: "100%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: function (value) {
                    return value.toFixed(0) + "单"
                },
                textStyle: {
                    fontSize: setAdaption(15),
                    color: "#188df0"
                }
            },
            data: [],
            min: 440,
            max: 640,
            radius: '100%',
            pointer: {
                width: setAdaption(3)
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: setAdaption(8)
                }
            },
            axisTick: {            // 坐标轴小标记
                length: setAdaption(0),        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: setAdaption(11),         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (e) {
                    switch (e + "") {
                        case "480":
                            return "平均值";
                        case "600":
                            return "峰值";
                        default:
                        //  return e;
                    }
                },
                textStyle: {
                    fontSize: setAdaption(8),
                    fontWeight: ""
                }
            }
        }
    ]
}
,
{
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    grid: {
        width: "100%",
        height: "100%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: function (value) {
                    return value.toFixed(0) + "单"
                },
                textStyle: {
                    fontSize: setAdaption(15),
                    color: "#188df0"
                }
            },
            data: [],
            min: 230,
            max: 330,
            radius: '100%',
            pointer: {
                width: setAdaption(3)
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: setAdaption(8)
                }
            },
            axisTick: {            // 坐标轴小标记
                length: setAdaption(0),        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: setAdaption(11),         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (e) {
                    switch (e + "") {
                        case "250":
                            return "平均值";
                        case "310":
                            return "峰值";
                        default:
                        //  return e;
                    }
                },
                textStyle: {
                    fontSize: setAdaption(8),
                    fontWeight: ""
                }
            }
        }
    ]
}
,
{
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    grid: {
        width: "100%",
        height: "100%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: function (value) {
                    return value.toFixed(0) + "单"
                },
                textStyle: {
                    fontSize: setAdaption(15),
                    color: "#188df0"
                }
            },
            data: [],
            min: 230,
            max: 330,
            radius: '100%',
            pointer: {
                width: setAdaption(3)
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: setAdaption(8)
                }
            },
            axisTick: {            // 坐标轴小标记
                length: setAdaption(0),        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: setAdaption(11),         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (e) {
                    switch (e + "") {
                        case "250":
                            return "平均值";
                        case "310":
                            return "峰值";
                        default:
                        //  return e;
                    }
                },
                textStyle: {
                    fontSize: setAdaption(8),
                    fontWeight: ""
                }
            }
        }
    ]
}
,
{
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    grid: {
        width: "100%",
        height: "100%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: function (value) {
                    return value.toFixed(0) + "单"
                },
                textStyle: {
                    fontSize: setAdaption(15),
                    color: "#188df0"
                }
            },
            data: [],
            min: 30,
            max: 50,
            radius: '100%',
            pointer: {
                width: setAdaption(3)
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: setAdaption(8)
                }
            },
            axisTick: {            // 坐标轴小标记
                length: setAdaption(0),        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: setAdaption(11),         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (e) {
                    switch (e + "") {
                        case "34":
                            return "平均值";
                        case "46":
                            return "峰值";
                        default:
                        //  return e;
                    }
                },
                textStyle: {
                    fontSize: setAdaption(8),
                    fontWeight: ""
                }
            }
        }
    ]
}
,
{
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    grid: {
        width: "100%",
        height: "100%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: function (value) {
                    return value.toFixed(0) + "单"
                },
                textStyle: {
                    fontSize: setAdaption(15),
                    color: "#188df0"
                }
            },
            data: [],
            min: 400,
            max: 750,
            radius: '100%',
            pointer: {
                width: setAdaption(3)
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: setAdaption(8)
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: setAdaption(11),         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (e) {
                    switch (e + "") {
                        case "470":
                            return "平均值";
                        case "680":
                            return "峰值";
                        default:
                        //  return e;
                    }
                },
                textStyle: {
                    fontSize: setAdaption(8),
                    fontWeight: ""
                }
            }
        }
    ]
}
]

$(function(){

    //整个页面的数据源
    var pagemodule = {};

    //从json文件中读取数据
    $.getJSON("./data/dongyao01.json", function (data) {
       pagemodule = data;
        Init();
    });

    //定时器循环读取Json文件(5分钟)
	var files = ["dongyao01.json","dongyao02.json","dongyao03.json"];
	var num = 0;
    window.setInterval(function (params) {
        $.getJSON("./data/"+files[num], function (data) {
            pagemodule = data;
            AsynInit();
        });
		num += 1;
	if(num == 3){num = 0;}
    }, 300000);

    //template helper扩展方法
    template.defaults.imports.split = function (numb, chart) {
        return numb.toString().split(chart);
    };
    template.defaults.imports.unshiftZero = function (arrayNum, length) {
        while (arrayNum.length < length) {
            arrayNum.unshift("0");
        }
        return arrayNum;
    };
    template.defaults.imports.formatNum = function (numb) {
        var temp = numb.toString();
        var StartStr = temp.substr(0, temp.length - 3);
        var SuffixStr = temp.substr(temp.length-3, 3);
		if(StartStr==0)
		{
		return SuffixStr;
		}
		else
		{
        return StartStr + "," + SuffixStr;
		}
    }

    //初始化
    function Init() {
        //任务大模块
        var htmlTaskStatisticsModule = template('tpl-TaskStatisticsModule', pagemodule.TaskStatisticsModule);
        $('.top').html(htmlTaskStatisticsModule);
        //任务预警
        var htmlTaskWarningModule = template('tpl-TaskWarningModule', pagemodule.TaskWarningModule);
        $('.big_middle_item').html(htmlTaskWarningModule);
        //今日个人处理排行
        var htmlPersonalRanking = template('tpl-PersonalRanking', pagemodule.PersonalRanking);
        $('.middle_item').html(htmlPersonalRanking);
        //任务效率分布
        var htmlTaskEfficiency = template('tpl-TaskEfficiencyModule', pagemodule.TaskEfficiencyModule);
        $('.bottom_item').html(htmlTaskEfficiency);
        //任务质量分布
        var htmlQualityModule = template('tpl-QualityModule', pagemodule.QualityModule);
        $('.big_bottom_item').html(htmlQualityModule);
        //仪表盘
        $.each(pagemodule.TaskWarningModule, function (i) {
            commonOption[i].series[0].data = this.data;
            var chartEl = echarts.init($('#imgBox_'+(i+1)).get(0));
            chartEl.setOption(commonOption[i]);
            setTimeout(function() {     
                chartEl.resize();
            }, 50)
            window.addEventListener("resize", function() {
                setTimeout(function() {
                    chartEl.resize();
                },50)		
            })
        })
    }

    //异步刷新
    function AsynInit() {
        //异步是可选的操作，可以针对某个模块刷新
        //例如任务质量分布
        //其它参照此示例
		//任务大模块
        var htmlTaskStatisticsModule = template('tpl-TaskStatisticsModule', pagemodule.TaskStatisticsModule);
        $('.top').html(htmlTaskStatisticsModule);
        //任务预警
        var htmlTaskWarningModule = template('tpl-TaskWarningModule', pagemodule.TaskWarningModule);
        $('.big_middle_item').html(htmlTaskWarningModule);
        //今日个人处理排行
        var htmlPersonalRanking = template('tpl-PersonalRanking', pagemodule.PersonalRanking);
        $('.middle_item').html(htmlPersonalRanking);
        //任务效率分布
        var htmlTaskEfficiency = template('tpl-TaskEfficiencyModule', pagemodule.TaskEfficiencyModule);
        $('.bottom_item').html(htmlTaskEfficiency);
        //任务质量分布
        var htmlQualityModule = template('tpl-QualityModule', pagemodule.QualityModule);
        $('.big_bottom_item').html(htmlQualityModule);
        //仪表盘
        $.each(pagemodule.TaskWarningModule, function (i) {
            commonOption[i].series[0].data = this.data;
            var chartEl = echarts.init($('#imgBox_'+(i+1)).get(0));
            chartEl.setOption(commonOption[i]);
        })
    }
});
