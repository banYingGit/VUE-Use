<template>
  <div>
    <Radio-group v-model="phone">
      <Radio label="apple">
        <Icon type="social-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio label="android">
        <Icon type="social-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio label="windows">
        <Icon type="social-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </Radio-group>
    <Checkbox-group v-model="social">
      <Checkbox label="twitter">
        <Icon type="social-twitter"></Icon>
        <span>Twitter</span>
      </Checkbox>
      <Checkbox label="facebook">
        <Icon type="social-facebook"></Icon>
        <span>Facebook</span>
      </Checkbox>
      <Checkbox label="github">
        <Icon type="social-github"></Icon>
        <span>Github</span>
      </Checkbox>
    </Checkbox-group>
  </div>
</template>
<script>
  export default {
    name: 'button',
    data: function () {
      return {
        phone: 'apple',
        social: ['facebook', 'github'],
        fruit: ['苹果']
      }
    }
  }
</script>
