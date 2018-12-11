//middle data 
var n = 900000000;
displayNumber(n);

function displayNumber(number) {
	var data = number.toString();
	var len = data.length;
	var count = 0,
		newStr = "";
	for(var i = len - 1; i >= 0; i--) {
		if(count % 3 == 0 && count != 0) {
			newStr = data.charAt(i) + "," + newStr;
		} else {
			newStr = data.charAt(i) + newStr;
		}
		count++;
	}
	var arr = newStr.split("");
	$(arr).each(function(i, v) {
		if(isNaN(v)) {
			$(".renWu-div").append('<div class="dom-div"><span>'+v+'</span></div>');
		} else {
			$(".renWu-div").append('<p class="pink-P num-p">'+v+'</p>');
		}
	});
}

var list = [
	{
		type:"运动",
		name:"舒华跑步机",
		price:"2,789,000",
		img:"./img/top1.png",
		color:"color5A"
	},
	{
		type:"美妆",
		name:"科颜氏洗面奶",
		price:"2,500.000",
		img:"./img/top2.png",
		color:"colorC5"
	},
	{
		type:"美食",
		name:"鸽鸽辣条",
		price:"2,400,00",
		img:"./img/top3.png",
		color:"color91"
	},
	{
		type:"美食",
		name:"鸽鸽辣条",
		price:"2,400,00",
		img:"./img/top4.png",
		color:"colorff"
	},
	{
		type:"美食",
		name:"鸽鸽辣条",
		price:"2,400,00",
		img:"./img/top5.png",
		color:"colorff"
	},
	{
		type:"美食",
		name:"鸽鸽辣条",
		price:"2,400,00",
		img:"./img/top6.png",
		color:"colorff"
	},
	{
		type:"美食",
		name:"鸽鸽辣条",
		price:"2,400,00",
		img:"./img/top7.png",
		color:"colorff"
	},
	{
		type:"美食",
		name:"鸽鸽辣条",
		price:"2,400,00",
		img:"./img/top8.png",
		color:"colorff"
	}
]

$(list).each(function(i, v) {
	$('.table-efficient').append('<li class="table-body-li clearFix '+v.color+'"><p class="cell-one"><img class="topLogo" src="'+v.img+'" alt=""></p><p class="cell-two">'+v.type+'</p><p class="cell-three">'+v.name+'</p><p class="cell-four">'+v.price+'</p></li>');
});