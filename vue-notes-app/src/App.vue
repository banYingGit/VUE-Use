<template>
  <div id="app">
    <header-vue></header-vue>
    <menu-vue></menu-vue>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderVue from './components/HeaderVue'
  import MenuVue from './components/MenuVue'

  export default{
    name: 'app',
    components: {
      HeaderVue: HeaderVue,
      MenuVue: MenuVue
    }
  }
</script>

