/**
 * Created by banYing on 2017/6/3.
 */
Vue.component('todo-item', {
    //html 绑定属性aa  在此处获取aa属性值item,然后在循环
    props: ['aa'],
    template: '<li>{{ aa.text }}</li>'
});

var MyComponent = new Vue({
    el: '#app',
    data: {
        groceryList: [
            {text: 'Vegetables'},
            {text: 'Cheese'},
            {text: 'Whatever else humans are supposed to eat'}
        ]
    },
    methods: {
        myClick: function (el) {

            console.log('this.$el', el, el.target)
        }
    }
});

