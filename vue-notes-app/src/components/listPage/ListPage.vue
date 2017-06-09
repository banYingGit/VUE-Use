<template>
  <div class="contain">
    <div style="padding: 20px;">
      <ul>
        <li v-for="item in items">
          {{ item.val}}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data: function () {
      return {
        items: [
          {val: '我的随笔'},
          {val: '我的评论'},
          {val: '我的参与'},
          {val: '最新评论'},
          {val: '我的标签'},
          {val: '更多链接'}
        ]
      }
    },
    created: function () {
      var url = '/static/data/list.json'
      this.$ajax_get(url, function (data) {
        console.log('data---', data)
      })
    }
  }
</script>
