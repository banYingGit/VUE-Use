/**
 * Created by banying on 17-4-6.
 */

var DHC = {
    el: '#main',
    data: {
        show: false,//控制加载更多
        showMes: false,//控制没有数据显示样式
        showPage: 'true',
        navselected: '',
        browser: false,
        prevent: false,
        enlargeImg: '',
        enlargeShow: false,
        headerImg: '',
        headerImgs: ''

    },
    created: function () {
    },
    mounted: function () {

        this.show = true;

        this.navselected = localStorage.getItem("menu-index");

        var el = document.getElementById("loading");

        el.parentNode.removeChild(el);

        this.headerImgs = this.headerImg.indexOf("assets") != -1 ? this.headerImg : ("/images/" + this.headerImg)


    },
    filters: {

        currency: function (val) {

            console.log('old', val)
            if (!val) {
                return "0.00";
            }

            val = parseFloat((val + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";

            var l = val.split(".")[0].split("").reverse(),

                r = val.split(".")[1],

                t = "";

            for (i = 0; i < l.length; i++) {

                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
            }

            console.log('new', t.split("").reverse().join("") + "." + r)

            return t.split("").reverse().join("") + "." + r;


        },
        imgUrl: function (val) {

            if (val == undefined) {
                return '';
            }

            return '/images/' + val


        }

    },
    methods: {

        navEmpty: function (index) {

            var _index = index || '';

            localStorage.setItem("menu-index", _index);

        },

        selectItems: function (index) {

            localStorage.setItem("menu-index", index);


        }
    }
};

DHC_DATA_TABLE = {

    methods: {
        $axjaFailed: function (msg) {

            this.$alert(msg, '操作提示', {

                confirmButtonText: '确定',

                type: 'error'

            })

        },

        $axjaSuccess: function (msg) {

            this.$alert(msg, '操作提示', {

                confirmButtonText: '确定',

                type: 'success'

            })

        },

        $searchByWord: function (pageNum) {

            if (!this.pageNum || this.pageNum == 1) {

                this.$search(pageNum)

            } else {
                this.pageNum = pageNum;
            }

        },

        $loadMore: function () {

            this.pageNum = this.pageNum + 1;

            this.$load(this.pageNum);

        },
        $loadSearch: function () {

            this.pageNum = 1;

            this.tableData = [];

            this.$load(this.pageNum);

        },

        $load: function (pageNum) {

            var _menu = localStorage.getItem("menu-index"),

                _key = _menu + "data-table-pageNum";

            this.pageNum = pageNum || (  +sessionStorage.getItem(_key)) || 1;

            sessionStorage.setItem(_key, this.pageNum);

            var params = this.$extend({

                pageNum: this.pageNum,

                pageSize: this.pageSize

            }, this.search);


            this.$ajax_post(this.url, params, function (data) {

                // 响应成功回调
                this.tableData = this.tableData.concat(data.result.list);

                // console.log(">>>>>>>>>this.tableData.length",this.tableData.length);
//                console.log(">>>>>>>>>this.pageNum * this.pageSize",this.pageNum * this.pageSize);
//                console.log(">>>>>>>>>data.result.list",data.result.list.length);

                // document.getElementById('loadMore').style.display = (data.result.list.length < this.pageSize) ? "none" : "block";

                this.showMes = this.tableData.length <= 0 ? false : true

                this.show = data.result.list.length < this.pageSize ? false : true

                var indexVal, eq;

                for (var i = ( (this.pageNum - 1) * 10); i < this.tableData.length; i++) {

                    // console.log('i', i)

                    eq = i - ((this.pageNum - 1) * this.pageSize)

                    // console.log('eq', eq)

                    indexVal = this.tableData[i].__ob__.value

                    indexVal.index = i + 1;

                    // console.log(data.result.list[eq], '----data.result.list[i]')
                }

                // this.tableData = this.tableData.concat(data.result.list);


            });

        },

        $search: function (pageNum) {


            var _menu = localStorage.getItem("menu-index"),

                _key = _menu + "data-table-pageNum";

            this.pageNum = pageNum || (  +sessionStorage.getItem(_key)) || 1;

            sessionStorage.setItem(_key, this.pageNum);

            var params = this.$extend({

                pageNum: this.pageNum,

                pageSize: this.pageSize

            }, this.search);


            this.$ajax_post(this.url, params, function (data) {

                // 响应成功回调
                this.tableData = data.result.list;

                this.total = data.result.total;

                console.log("---------this.total", this.total)

                var indexVal, eq;

                for (var i = ( (this.pageNum - 1) * 10); i < (this.pageSize * this.pageNum) && (i - ((this.pageNum - 1) * this.pageSize)) < data.result.list.length; i++) {

                    // console.log('i', i)

                    eq = i - ((this.pageNum - 1) * this.pageSize)
                    // console.log('eq', eq)

                    indexVal = this.tableData[eq].__ob__.value

                    indexVal.index = i + 1;

                    this.tableData = data.result.list;


                }
                if (data.outMoney != undefined) {
                    this.search.outMoney = data.outMoney;
                    this.search.inMoney = data.inMoney;
                }

            });

        },

        $page: function (num) {

            this.$search(num)
        },
        $enlargeImg: function (e) {

            this.enlargeShow = true;

            this.enlargeImg = e.path[0].src;

            console.log('>>>', e.path[0].src)


        },
        $enlargeHide: function () {

            this.enlargeShow = false;

            this.enlargeImg = '';


        }

    }
}

