$(function () {

    //自适应字体大小
    function setAdaption(size) {
        return setPro * size;
    }

    //整个页面的数据源
    var pagemodule = {};

    //地图线路数据
    var chinaMap = {};

    //从json文件中读取数据
    $.getJSON("./data/yuying.json", function (data) {
        pagemodule = data;
        Init();
    });

    //定时器(5分钟)
    window.setInterval(function (params) {
        $.getJSON("./data/yuying.json", function (data) {
            pagemodule = data;
            AsynInit();
        });
    }, 6000);

    //网页时钟
    window.setInterval(function () {
        $('.time').text(template.defaults.imports.formatCurDate());
    }, 1000);

    //模拟在线人数
    window.setInterval(function () {
        var Rand = Math.random();
        var result = Rand > 0.5 ? pagemodule.UserDistribution.currentonline + Math.round(Rand * 100) : pagemodule.UserDistribution.currentonline - Math.round(Rand * 100);
        $('#curOnline').html(template.defaults.imports.formatNum(result) + "<span>人</span>");
    }, 10000);

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
        var StartStr = temp.substr(0, temp.length - 3);
        var SuffixStr = temp.substr(temp.length - 3, 3);
        return StartStr + "," + SuffixStr;
    }
    template.defaults.imports.formatCurDate = function () {
        var D = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
        with (new Date) return [
            [getFullYear(), D[getMonth() + 1] || getMonth() + 1, D[getDate()] || getDate()].join('-'),
            [D[getHours()] || getHours(), D[getMinutes()] || getMinutes(), D[getSeconds()] || getSeconds()].join(':')
        ].join(' ');
    }

    var mapChart = null;
    var pieChart = null;
    var barChart = null;

    //制作china地图
    function drawChinaMap() {
        var count = -1;


        function buildingChartOption() {
            count++;
            var mapdata = [];
            for (var i = 0; i < chinaMap.mapData[count].length; i++) {
                mapdata[i] = [];
                for (var j = 0; j < chinaMap.mapData[count][i].length; j++) {
                    mapdata[i][j] = {};
                }
                mapdata[i][0].name = chinaMap.mapData[count][i][0].name;
                mapdata[i][1].name = chinaMap.mapData[count][i][1].name;
                mapdata[i][1].value = chinaMap.mapData[count][i][1].value;
            }

            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = chinaMap.geoCoordMap[dataItem[0].name];
                    var toCoord = chinaMap.geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord]
                        });
                    }
                }
                return res;
            };

            var color = '#00ffc0';
            var series = [];
            [
                ['乌鲁木齐', mapdata]
            ].forEach(function (item, i) {
                series.push({
                    name: '',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 9,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color,
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                }, {
                        name: '',
                        type: 'lines',
                        zlevel: 2,
                        symbol: ['none', 'arrow'],
                        symbolSize: 0,
                        effect: {
                            show: true,
                            period: 9,
                            trailLength: 0,
                            //                  symbol: planePath,
                            symbolSize: 1
                        },
                        lineStyle: {
                            normal: {
                                color: color,
                                width: 0,
                                opacity: 0.6,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    }, {
                        name: '',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        symbolSize: function (val) {
                            switch (val[2].toString().length) {
                                case 1:
                                    return val[2] / 4 + 6;
                                case 2:
                                    return val[2] / 15 + 9;
                                case 3:
                                    return val[2] / 100 + 18;
                                default:
                                    return 27;
                            }
                            return 12;
                        },
                        itemStyle: {
                            normal: {
                                color: color
                            }
                        },
                        data: item[1].map(function (dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: chinaMap.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                            };
                        })
                    });
            });

            chinaMapOption = {
                title: {
                    show: false,
                    text: '实时下单情况',
                    x: '25',
                    y: '22',
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#fff',
                        fontSize: setAdaption(15)
                    }
                },
                tooltip: {
                    trigger: 'item',
 		    formatter: function (params) {
                        if (!params.name || params.name == "") {
                            return "";
                        }
                        return params.name + ":" + params.value[2];
                    }
                },
                legend: {
                    orient: 'vertical',
                    top: 'bottom',
                    left: 'right',
                    data: '',
                    textStyle: {
                        color: '#D3D4D9'
                    },
                    selectedMode: 'single'
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    // layoutCenter: ['60%', '50%'],
                    // // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
                    // layoutSize: '80%',
                    roam: false,
                    zoom: 1.1,
                    itemStyle: {
                        normal: {
                            areaColor: '#091C2F',
                            borderColor: '#2A4E75',
                            borderWidth: setAdaption(1)
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: series
            };
            mapChart = echarts.init(document.getElementById('map-zoomData'));

            mapChart.setOption(chinaMapOption);
            if (count < chinaMap.mapData.length - 1) {
                setTimeout(buildingChartOption, 30000);
            } else {
                count = -1;
                setTimeout(buildingChartOption, 30000);
            }
        }

        buildingChartOption();
    }

    //用户应用分布
    function drawUserAppDistribute() {
        var pieOption = {
            series: [
                {
                    name: '',
                    type: 'pie',
                    center: ['50%', '46%'],
                    radius: ['30%', '44%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: '{b}{d}%',
                            textStyle: {
                                fontSize: setAdaption(8.5)
                            }
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: [],
                    color: ['#5759A2', '#C15E5E', '#679FA7', '#CC8269']
                }
            ]
        };
        pieOption.series[0].data = pagemodule.ApplicationDistribution.chart.data;
        pieChart = echarts.init(document.getElementById('pie-one'));
        pieChart.setOption(pieOption);
    }

    //客户数月增长
    var xMonth = (function () {
        var arr = [];
        for (var i = 1; i <= 12; i++) {
            arr.push(i + '月');
        }
        return arr;
    })();
    function drawCustomGrowth() {
        var barOptionOne = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            backgroundColor: '#232841',
            grid: {
                width: "90%",
                height: "82%",
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
                        color: "#3f5476",
                        width: 2,
                        type: 'solid'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#354564',
                        width: 1
                    }
                },

                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: setAdaption(10),
                        color: '#D3D4D9',
                    }
                },
                axisTick: {
                    show: false
                },
                min: 0,
                // max: 60,
                splitNumber: 6

            },
            xAxis: {
                type: 'category',
                data: xMonth,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#3f5476"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#D3D4D9',
                        fontSize: setAdaption(10)
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    data: [],
                    barWidth: 20,
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            formatter: '{c}',
                            textStyle: {
                                color: '#61A0A8',
                                fontSize: setAdaption(10)
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#61A0A8',
                            barBorderRadius: [3, 3, 0, 0]
                        }
                    }
                }
            ]
        };
        barOptionOne.series[0].data = pagemodule.CustomGrowth.chart.data;
        barChart = echarts.init(document.getElementById('bar-one'));
        barChart.setOption(barOptionOne);
    }

    //初始化
    function Init() {
        //用户数
        var htmlCustomerCounts = template('tpl-UsersAndCustomers', pagemodule.Statistics);
        $('.center-top').html(htmlCustomerCounts);
        //活跃用户看板
        var htmlUserDistribution = template('tpl-UserDistribution', pagemodule.UserDistribution);
        $('.center-bottom').html(htmlUserDistribution);
        //活跃用户Top
        var htmlMAU = template('tpl-MAU', pagemodule.MAU);
        $('.right-top').html(htmlMAU);
        //即将到期客户
        var htmlExpiringCustoms = template('tpl-ExpiringCustoms', pagemodule.ExpiringCustoms);
        $('.right-bottom').html(htmlExpiringCustoms);
        //地图
        chinaMap.mapData = pagemodule.UserDistribution.chart.data;
        chinaMap.geoCoordMap = pagemodule.UserDistribution.chart.geoCoordMap;
        drawChinaMap();
        //用户应用分布
        drawUserAppDistribute();
        //客户数月增长
        drawCustomGrowth();
    }

    //异步刷新
    function AsynInit() {
        //异步是可选的操作，可以针对某个模块刷新
        //例如任务质量分布
        //其它参照此示例
    }

    window.onresize = function () {
        mapChart.resize();
        pieChart.resize();
        barChart.resize();
    }
});
