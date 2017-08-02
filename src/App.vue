<template>
  <div id="app" >
    <v-header></v-header>
    <v-goods></v-goods>
  </div>
</template>

<script>
// import axios from 'axios';
import header from './components/header/header.vue';
import goods from './components/goods/goods.vue';

// const ERR_OK = 0; // OK状态码

export default {
  data () {
    return {
      msg: 'hello',
      size: 'lg',
      variant: 'success'
    };
  },
  name: 'app',
  created () {
  },
  components: {
    'v-header': header,
    'v-goods': goods
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
// If style-loader is not available, you have to manually include both bootstrap and bootstrap-vue css files in your css bundle

@import "./common/stylus/mixin.styl"
@import "http://unpkg.com/bootstrap@next/dist/css/bootstrap.min.css"
@import "http://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"


#app
  background: #c30d23;
  margin :0
</style>
