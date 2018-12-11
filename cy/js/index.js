var vm = new Vue({
  el: '#app',
  data: {
    display: null,
    refreshTime: 10 * 1000,  // 更新时间（毫秒）
  },
  filters: {
    formatMoney: function(money) {
      var temp = money.toString();
      var result = [];
      var dotCount = Math.floor(temp.length / 3);
      if (temp.length % 3 == 0) {
        dotCount -= 1;
      }
      for (var i=0; i<dotCount; i++) {
        result.unshift(temp.slice(-3));    
        result.unshift(',');
        temp = temp.slice(0, -3);
      }
      result.unshift(temp);
      return result.join('');
    }
  },
  computed: {
    allShopAmount() {
      return this.display.shops.reduce(function (pre, cur) {
        return pre + cur.amountPerDay;
      }, 0);
    }
  },
  methods: {
    getDisplayData() {
      axios.get('./mock.json')
        .then(res => {
          res.data.shops.sort((a, b) => b.amountPerDay - a.amountPerDay);
          this.display = res.data;
        })
        .catch(error => {
          console.log(error)
        });
    },

    getRankImg(index) {
      return './img/top' + (index+1) + '.png';
    },

    getAmountPercent(shop) {
      return Math.round((shop.amountPerDay / this.allShopAmount) * 100);
    },

    randomData() {
      this.display.company.totalAmount += this.getRandomNum(0, 800);
      this.display.company.totalCount += this.getRandomNum(0, 10);
      this.display.qingti.totalAmount += this.getRandomNum(0, 800);
      this.display.qingti.totalCount += this.getRandomNum(0, 10);
      this.display.member.total += this.getRandomNum(0, 50);
      this.display.member.new += this.getRandomNum(0, 50);
      this.display.member.deposit += this.getRandomNum(0, 800);
    },

    /**
     * 产生指定范围内的一个随机整数
     * min: 随机数最小值
     * max: 随机数最大值
     */
    getRandomNum(min,max)
    {   
      var range = max - min;   
      var rand = Math.random();   
      return(min + Math.round(rand * range));   
    } 
  },
  created() {
    this.getDisplayData();

    setInterval(this.randomData, this.refreshTime);
  }
});