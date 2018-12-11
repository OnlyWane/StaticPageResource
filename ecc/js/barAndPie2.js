/*字体自适应*/
function setAdaption(size) {
    return setPro * size;
}

//累计会员量
leftOneOption = {
	legend: {
		x: 'center',
		bottom: '6%',
		itemWidth: setAdaption(10),
		itemHeight: setAdaption(10),
		data: ['女性会员', '男性会员'],
		textStyle: {
			color: "#D3D4D9",
			fontSize: setAdaption(9)
		}
	},
	series: [{
			name: '',
			type: 'pie',
			center: ['50%', '40%'],
			radius: ['60%', '75%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: true,
					position: 'outside',
					formatter: '{b}{c}',
					textStyle: {
						fontSize: setAdaption(10)
					},
					formatter: function(data) {
						return data.name + "\n" + data.value;
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
			data: [{
					value: 6000,
					name: '男性会员'
				},
				{
					value: 12000,
					name: '女性会员'
				}
			],
			color: ['#669EA7', '#C05E5E']
		},
		{
			name: '',
			type: 'pie',
			center: ['50%', '40%'],
			radius: ['60%', '60%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: true,
					position: 'center',
					formatter: '{b}',
					textStyle: {
						fontSize: setAdaption(18),
						color: '#ffffff'
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
			data: [{
				value: 123,
				name: '18,000'
			}],
		}
	]
}
//会员数字化趋势
leftTwoOption = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985'
			}
		}
	},
	grid: {
		left: '1%',
		bottom: '10%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
		axisLine: {
				lineStyle: {
					color: '#3F5476',
					width: setAdaption(1.5)
				}
		},
		axisTick:{
			show: false
		},
		axisLabel: {
			show: true,
			textStyle: {
				color: '#D3D4D9',
				fontSize: setAdaption(10),
				fontWeight: 'normal'
			}
		}
	}],
	yAxis: [{
		type: 'value',
		data: ['100', '200', '300', '400'],
		show: false,
		splitLine: {　
			show: false
		}
	}],
	series: [{
		name: '今日新增',
		type: 'line',
		stack: '总量',
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0.33,
						color: '#04C9DD'
					},
					{
						offset: 1,
						color: 'rgba(78,184,222,0.00)'
					}
				], false)
			}
		},
		itemStyle: {
			normal: {
				color: '#AAF8FF',
				lineStyle: {
					color: '#47E6F5',
					fontSize: setAdaption(25)
				}
			}
		},
		data: [8800, 9000, 9900, 12500, 17000, 32400]
	}]
}
//年龄分布
leftThreeOption = {
	tooltip: {
		trigger: 'axis'
	},
	radar: [{
		name: {
			show: true,
			formatter: null,
			textStyle: {
				fontSize: setAdaption(11),
				color: "#ffffff"
			}
		},
		axisLabel: {
			show: false,
			color: '#D3D4D9'
		},
		indicator: [{
				text: '14-19',
				max: 100,
				color: '#D3D4D9'
			},
			{
				text: '其他年龄',
				max: 100,
				color: '#D3D4D9'
			},
			{
				text: '45-49',
				max: 100
			},
			{
				text: '40-44',
				max: 100
			},
			{
				text: '35-39',
				max: 100
			},
			{
				text: '30-34',
				max: 100
			},
			{
				text: '25-29',
				max: 100
			},
			{
				text: '20-24',
				max: 100
			}
		],
		center: ['50%', '50%'],
		radius: setAdaption(60)
	}],
	series: [{
		type: 'radar',
		tooltip: {
			trigger: 'item'
		},
		label: {
			normal:{
					color: '#000',
					textStyle:{
						color: '#000'
					}
			}
		},
		itemStyle: {
			normal: {
				areaStyle: {
					type: 'default',
					color: "#c05e5e"
				}
			}
		},
		data: [{
			value: [60, 19, 41, 73, 78, 83, 83, 80],
			name: '年龄分布'
		}]
	}]
}
//身份职业
rightOneOption = {
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
				width: 　setAdaption(1.5),
				type: 'solid'
			}
		},
		splitLine: {
			show: false,
			lineStyle: {
				color: '#2A334F',
				width: 　setAdaption(1.5)
			}
		},

		axisLabel: {
			show: false,
			textStyle: {
				fontSize: setAdaption(15),
				color: '#fff',
			}
		},
		axisTick: {
			show: false
		},
		min: 0,
		max: 60,
		splitNumber: 6

	},
	xAxis: {
		type: 'category',
		data: ['律师', '医生', '科技', '金融', '服务', '商务', '学生', '主妇', '教师'],
		axisLine: {
			show: true,
			lineStyle: {
				width: 　setAdaption(2),
				color: "#3f5476"
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			textStyle: {
				color: '#D3D4D9',
				fontSize: setAdaption(11)
			}
		}
	},
	series: [

		{
			type: 'bar',
			data: [30, 28, 40, 56, 26, 39, 40, 53, 50],
			barWidth: '40%',
			label: {
				normal: {
					show: false,
					position: 'top',
					formatter: '{c}k',
					textStyle: {
						color: '#61A0A8',
						fontSize: setAdaption(20)
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#61A0A8',
					barBorderRadius: [setAdaption(2), setAdaption(2), setAdaption(0), setAdaption(0)]
				}
			}
		}
	]
};
var colors1 = ['rgb(110,113,129)', 'rgb(193,95,95)'];
var colors2 = ['rgb(110,113,129)', 'rgb(204,130,106)'];
var colors3 = ['rgb(110,113,129)', 'rgb(88,90,163)'];
var colors4 = ['rgb(110,113,129)', 'rgb(75,111,194)'];
var colors5 = ['rgb(110,113,129)', 'rgb(104,160,167)'];
var ia = 0,
	ib = 0,
	ic = 0,
	ie = 0,
	ig = 0;
//受教育程度
rightThreeOption = {
	legend: {
		orient: 'vertical',
		right: '10%',
		y: 'center',
		itemGap: 22,
		itemWidth: setAdaption(10),
		itemHeight: setAdaption(10),
		data: [{
				name: '博士2,400,000',
				icon: "circle"
			},
			{
				name: '硕士6,400,000',
				icon: 'circle'
			},
			{
				name: '本科5,400,000',
				icon: 'circle'
			},
			{
				name: '大专6,400,000',
				icon: 'circle'
			},
			{
				name: '高中及高中以下110,400,000',
				icon: 'circle'
			}
		],
		textStyle: {
			color: "#D3D4D9",
			fontSize: setAdaption(9)
		},
		formatter: function(name) {
            var arr = name.split('');
            var str = '';
            for(var i = 0;i<arr.length;i++){
            	if(arr[i] === '下'){
            		str += arr[i] + '\n';
            	}else{
            		str += arr[i];
            	}
            }
			return str
		}
	},
	series: [
		{
			name: '受教育程度',
			type: 'pie',
			center: ['34%', '50%'],
			radius: ['19%', '23%'],
			itemStyle: {
				normal: {
					color: function() {
						return colors1[ia++];
					},
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: setAdaption(8),
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
					value: 0.2,
					name: '非博士'
				},
				{
					value: 0.8,
					name: '博士2,400,000'
				}
			]
		},
		{
			name: '受教育程度',
			type: 'pie',
			center: ['34%', '50%'],
			radius: ['31%', '35%'],
			itemStyle: {
				normal: {
					color: function() {
						return colors2[ib++];
					},
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: setAdaption(8),
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
					value: 0.5,
					name: '非硕士'
				},
				{
					value: 0.5,
					name: '硕士6,400,000'
				}
			]
		},
		{
			name: '受教育程度',
			type: 'pie',
			center: ['34%', '50%'],
			radius: ['43%', '47%'],
			itemStyle: {
				normal: {
					color: function() {
						return colors3[ic++];
					},
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: setAdaption(8),
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
				value: 0.4,
				name: '非本科'
			}, {
				value: 0.6,
				name: '本科5,400,000'
			}]
		},
		{
			name: '受教育程度',
			type: 'pie',
			center: ['34%', '50%'],
			radius: ['55%', '59%'],
			itemStyle: {
				normal: {
					color: function() {
						return colors4[ie++];
					},
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: setAdaption(8),
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
					value: 0.3,
					name: '非大专'
				},
				{
					value: 0.7,
					name: '大专6,400,000'
				}
			]
		},
		{
			name: '受教育程度',
			type: 'pie',
			center: ['34%', '50%'],
			radius: ['67%', '71%'],
			itemStyle: {
				normal: {
					color: function() {
						return colors5[ig++];
					},
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: setAdaption(8),
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
				value: 0.3,
				name: '非高中及高中以下'
			}, {
				value: 0.7,
				name: '高中及高中以下110,400,000'
			}]
		}
	]
}

var myChart1 = null,
	myChart2 = null,
	myChart3 = null,
	myChart4 = null,
	myChart5 = null;

// function initDivSecondRowFirstCol() {
// 	/**累计会员量*/
// 	myChart1 = echarts.init(document.getElementById('left-one'));
// 	myChart1.setOption(leftOneOption);
// 	/**会员数字化趋势*/
// 	myChart2 = echarts.init(document.getElementById('left-two'));
// 	myChart2.setOption(leftTwoOption);
// 	/*年龄分布*/
// 	myChart3 = echarts.init(document.getElementById('left-three'));
// 	myChart3.setOption(leftThreeOption);
// 	/*身份职业*/
// 	myChart4 = echarts.init(document.getElementById('right-one'));
// 	myChart4.setOption(rightOneOption);
// 	/*受教育程度*/
// 	myChart5 = echarts.init(document.getElementById('right-three'));
// 	myChart5.setOption(rightThreeOption);
	
// }
// setTimeout(function() {
// 	initDivSecondRowFirstCol();
// }, 500);
/**累计会员量*/
	var myChart1 = echarts.init(document.getElementById('left-one'));
	myChart1.setOption(leftOneOption);
	/**会员数字化趋势*/
	var myChart2 = echarts.init(document.getElementById('left-two'));
	myChart2.setOption(leftTwoOption);
	/*年龄分布*/
	var myChart3 = echarts.init(document.getElementById('left-three'));
	myChart3.setOption(leftThreeOption);
	/*身份职业*/
	var myChart4 = echarts.init(document.getElementById('right-one'));
	myChart4.setOption(rightOneOption);
	/*受教育程度*/
	var myChart5 = echarts.init(document.getElementById('right-three'));
	// myChart5.setOption(rightThreeOption);
	
	// myChart5.setOption(rightThreeOption);

setTimeout(function (){
	// var myChart5 = echarts.init(document.getElementById('right-three'));
	myChart5.setOption(rightThreeOption);
	console.log(rightThreeOption.series[0].itemStyle.normal.color);
	// myChart5.resize();
}, 500);

setTimeout(function () {
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();    
    myChart5.resize();
}, 50)
window.addEventListener("resize", function () {
    setTimeout(function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
         myChart5.resize();
        myChart5.setOption(rightThreeOption);
       
    }, 50)
});

/*用户标签*/
$(function() {

	imgScroll.rolling({
		name: 'r-scroll',
		width: '519px',
		height: '273px',
		direction: 'top',
		speed: 35,
		addcss: true
	});
})
var dBoy = {
	'lab1': ["工作8年", "工作2年", "工作1年", "在读本科", "工作5年", "工作3年", "工作10年", "工作20年"],
	'lab2': ["公务员", "程序员", "设计师", "律师", "老师", "画家", "运动员", "医生"],
	'lab3': ["已婚", "未婚", "未婚", "已婚", "未婚", "已婚", "未婚", "已婚"],
	'lab4': ["周晓明", "张伟", "王伟", "李伟", "王凯", "杨洋", "郑杰", "李东"],
	'lab5': ["省钱", "理财", "月光", "支教", "手办", "志愿者", "手工", "跑酷"],
	'lab6': ["数码控", "技术宅", "运动达人", "游戏高手", "旅游", "热心公益", "慈善", "摄影"],
	'lab7': ["男性", "男性", "男性", "男性", "男性", "男性", "男性", "男性"],
	'lab8': ["健身达人", "拳击", "游泳", "冲浪", "跑步", "马拉松", "赛车", "跳伞"],
	'lab9': ["游戏迷", "模型", "速建", "国学", "古董", "小说", "读书", "唱歌"],
	'lab10': ["网剧迷", "字幕翻译", "本格推理", "侦探迷", "电影", "导演", "剧本", "微视频"]
};
var dGirl = {
	'lab1': ["未婚", "已婚", "未婚", "已婚", "未婚", "已婚", "未婚", "已婚"],
	'lab2': ["90后", "80后", "70后", "00后", "未成年", "女神", "轻熟女", "萌神"],
	'lab3': ["杨乐", "李娜", "李静", "王静", "李敏", "张敏", "张欢", "王欣"],
	'lab4': ["23岁", "35岁", "18岁", "28岁", "25岁", "30岁", "45岁", "27岁"],
	'lab5': ["女性", "女性", "女性", "女性", "女性", "女性", "女性", "女性", "女性"],
	'lab6': ["大学本科", "研究生", "硕士", "博士", "教授", "高中", "专科", "在读"],
	'lab7': ["俄剧", "英剧", "日剧", "泰剧", "美剧", "国产剧", "港剧", "韩剧"]
};
setInterval(function() {
	var n = Math.floor((Math.random() * 7 + 1));
	$(".p-boy .lab1").text(dBoy.lab1[n]);
	$(".p-boy .lab2").text(dBoy.lab2[n]);
	$(".p-boy .lab4").text(dBoy.lab4[n]);
	$(".p-boy .lab5").text(dBoy.lab5[n]);
	$(".p-boy .lab6").text(dBoy.lab6[n]);
	$(".p-boy .lab8").text(dBoy.lab8[n]);
	$(".p-boy .lab9").text(dBoy.lab9[n]);
	$(".p-girl .lab2").text(dGirl.lab2[n]);
	$(".p-girl .lab3").text(dGirl.lab3[n]);
	$(".p-girl .lab4").text(dGirl.lab4[n]);
	$(".p-girl .lab6").text(dGirl.lab6[n]);
	$(".p-girl .lab7").text(dGirl.lab7[n]);
	$(".p-boy .lab3,.p-girl .lab1").text(dGirl.lab1[n]);
}, 700);

/*热销排行榜*/
var list = [{
		address: "上海",
		type: "3C",
		name: "苹果手机",
		price: "4091.00",
		img: "./img/top1.png",
		color: "color5A",
		data: "90%"
	},
	{
		address: "杭州",
		type: "服装",
		name: "欧时利女装",
		price: "3491.00",
		img: "./img/top2.png",
		color: "colorC5",
		data: "80%"
	},
	{
		address: "北京",
		type: "家具",
		name: "无印良品",
		price: "2091.00",
		img: "./img/top3.png",
		color: "color91",
		data: "76%"
	},
	{
		address: "深圳",
		type: "运动",
		name: "舒华跑步机",
		price: "1091.00",
		img: "./img/top4.png",
		color: "colorff",
		data: "70%"
	},
	{
		address: "南京",
		type: "美食",
		name: "旺仔",
		price: "1091.00",
		img: "./img/top5.png",
		color: "colorff",
		data: "68%"
	}
]

$(list).each(function(i, v) {
	$('.table-efficient').append('<li class="table-body-li speci-li clearFix ' + v.color + '"><p class="cell-one"><img class="topLogo" src="' + v.img + '" alt=""></p><p class="cell-two">' + v.address + '</p><p class="cell-three"><span class="max"><span class="actual" style="width:' + v.data + ';"></span></span><span class="num">' + v.data + '</span></p><p class="cell-four">' + v.type + '</p><p class="cell-five">' + v.name + '</p><p class="cell-six">' + v.price + '</p></li>');
});
