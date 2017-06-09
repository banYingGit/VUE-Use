<template>
  <div id="menuVue" class="menu">
    <Menu :width="width">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper"></Icon>
          内容管理
        </template>
        <Menu-item name="1-1">
          <router-link to="/ListPage.html">LINK 页面跳转</router-link>
        </Menu-item>
        <Menu-item name="1-2" ><p @click="goFirst">方法跳转</p></Menu-item>
        <Menu-item name="1-3">举报管理</Menu-item>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people"></Icon>
          用户管理
        </template>
        <Menu-item name="2-1">新增用户</Menu-item>
        <Menu-item name="2-2">活跃用户</Menu-item>
      </Submenu>

    </Menu>
  </div>
</template>
<script>
  export default {
    name: 'menuVue',
    data: function () {
      return {
        width: '200'
      }
    },
    methods: {
      goFirst: function () {
        this.$router.push({
          path: '/Center.html'
        })
      }
    }
  }
</script>
