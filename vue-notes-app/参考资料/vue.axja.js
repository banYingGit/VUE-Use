/**
 * Created by 11141021050221 on 2017/3/22.
 */
Vue.use({
    install: function (Vue, options) {

        var _this = this;

        // Vue.http.interceptors.push(function (request, next) {
        //
        // // modify method
        // request.method = 'POST';
        //
        // // modify headers
        // request.headers.set('X-CSRF-TOKEN', 'TOKEN');
        // request.headers.set('Authorization', 'Bearer TOKEN');
        //
        // // continue to next interceptor
        // next();
        // });

        function _params(params) {
            var _p = {};
            for (var p in params) {
                if (Array.isArray(params[p])) {

                    l:    for (var i = 0; i < params[p].length; i++) {

                        var _val = params[p][i];

                        if (_val && (typeof _val == 'object') && _val.constructor.name == "Date") {
                            _val = _val.getTime();
                            _p[p + "[" + i + "]"] = String(_val);
                        } else {
                            _p[p + "[" + i + "]"] = '';
                        }

                    }

                } else {
                    _p[p] = params[p];
                }
            }
            return _p;
        }

        Vue.prototype.$ajax_get = function (url, params, fn) {

            _this.$http.get(url, {
                params: _p(params)
            }).then(function (response) {

                fn && fn.call(this, response.data, 'success', response);

            }, function (response) {
                fn && fn.call(this, response.data, 'fail', response);


            });

        }

        Vue.prototype.$ajax_post = function (url, params, fn) {

            this.$http.post(url, _params(params), {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                emulateJSON: true

            }).then(function (response) {


                this.prevent = true;

                return response.json()
            })

                .then(function (data) {


                    this.prevent = false

                    fn && fn.call(this, data, 'success');


                }, function (data) {

                    fn && fn.call(this, null, 'fail');

                });

        }

    }
})