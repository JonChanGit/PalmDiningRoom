<template>
    <div class="header">
      <div class='title tab'>掌上食堂</div>
      <span class="muk">
        <div id="yinfu" class="rotate tab"></div>
        <audio loop src="../assets/bg_2.mp3" id="media" autoplay preload="preload"></audio>
      </span>
    </div>
</template>

<script>
// import cts from 'common/js/cts.js';

export default {
  props: {
    seller: {
      type: Object
    }
  },
  name: 'header'
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .header
    position :relative
    margin :0 auto
    .title
      text-align: center;
      text-shadow: 1px 1px 5px #000;
      font-family: "CornDog";
      font-size: 1.5em;
      font-weight: bolder;
      letter-spacing: 2px;
      color: #fff;
      padding: 0.8em;
    .muk
      display :inline-block
      position :absolute
      top :30%
      right :5%
      .rotate
        background-image:  url('music_on.png')
        background-size :22px 22px
        background-repeat : no-repeat
        width :22px
        height :22px
        
</style>
