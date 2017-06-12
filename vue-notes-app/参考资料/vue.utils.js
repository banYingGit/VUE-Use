Vue.use({

    install: function (Vue, options) {


        //validator 数字校验
        Vue.prototype.$checkNumber = function (rule, value, callback) {

            var reg = /^[0-9]*$/;

            if (!reg.test(value)) {

                callback(new Error('只能输入数字'));

            } else {

                callback();
            }

        };

        //validator 率校验
        Vue.prototype.$checkRate = function (rule, value, callback) {

            var reg = /^[0-9]+(.[0-9]{1,2})?$/;

            if (!reg.test(value)) {

                callback(new Error('小数点后只能输入两位'));

            } else {

                callback();
            }

        };
        //validator 金额校验
        Vue.prototype.$checkMenoy = function (rule, value, callback) {
        	          
            var reg = /^\-?[0-9]+(.[0-9]{1,2})?$/;

            if (!reg.test(value)) {

                callback(new Error('只能输入金额'));

            } else {

                callback();
            }

        };
        //validator 用户名校验

        Vue.prototype.$checkName = function (rule, value, callback) {


            var reg = /^[A-Za-z0-9_]{4,20}/;

            if (!reg.test(value)) {

                callback(new Error('请输入4-20位数字、字母或者下划线'));

            } else {

                callback();
            }

        };

        //validator  手机号码校验

        Vue.prototype.$checkTel = function (rule, value, callback) {

            var reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

            if (!value) {

                return true

            } else if (!reg.test(value)) {

                callback(new Error('请输入正确手机号'));

            } else {

                callback();
            }

        };

        //validator  身份证号码校验
        Vue.prototype.$checkIden = function (rule, value, callback) {

            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

            if (!reg.test(value)) {

                callback(new Error('请输入正确身份证号码'));

            } else {

                callback();
            }

        };

        //validator 银行卡号校验
        Vue.prototype.$checkBank = function (rule, value, callback) {

            var reg = /^[a-zA-Z0-9]{10,30}$/;

            if (!reg.test(value)) {

                callback(new Error('请输入10-30位数字或字母的银行卡号码'));

            } else {

                callback();
            }

        };

        //验证码刷新  capVal固定写法
        Vue.prototype.$captcha = function () {

            this.capVal = '/captcha?' + Date.now()

        };

        //倒计时
        Vue.prototype.$time = function (time, fn1, fn2) {


            var auto = setTimeout(timeShow, 1000);

            var stop = clearInterval(timeShow);

            var timeShow = setInterval(function () {


                if (time <= 0) {

                    fn2 && fn2.call(this);

                    clearInterval(timeShow)

                    return

                }

                return fn1 && fn1.call(this, time--);


            }, 1000);


        }


    }
})
