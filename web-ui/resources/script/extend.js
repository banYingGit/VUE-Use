/**
 * Created by banYing on 2017/6/3.
 */
Vue.component('todo-item', {
    //html ������aa  �ڴ˴���ȡaa����ֵitem,Ȼ����ѭ��
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

