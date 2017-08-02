<template>
    <div class="f-content">
        <div class="tab1 tab">
            <span>
                <img :src="food.src"></img>
            </span>
        </div>
        <div class="tab2 tab">
            <p class="fb">编号:<span>{{food.id}}</span></p>
            <p class="fb">菜名:<span>{{food.name}}</span></p>
            <a class="to" :class="{disab:food.select}" v-on:click="cShowD(food.id)" >
                <span v-if="!food.select">
                    投票
                </span>
                <span v-if="food.select">
                    已投票
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      food: {
          type: Object
      }
  },
  name: 'food',
  methods: {
      cShowD: function (id) {
        console.log('food:' + id + '==' + this.food.select);
        this.food.select = !this.food.select;
        this.$emit('cShowDl');
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .f-content
        display :flex
        background-color :#fff
        border-radius: 5%
        .fb
            font-weight: bold
            font-size :1em
            line-height :2.1em
            span
                font-weight :normal
        .tab
            padding: 10px;
        .tab1
            flex:1
            span
                display: inline-block;
                background: #fff;
                border-radius: 50%;
                box-shadow: 0px 0px 7px #FBB03B;
                overflow: hidden;
                border: #FBB03B solid 6px;
                img
                    max-width: 100%;
                    height: 100px;
        .tab2
            flex:2 1 0
            display :flex
            flex-direction:column
            margin: 10px 0;
            .fb
                flex:1
            .to
                width: 80%
                text-align: center
                display: inline-block
                color: #fff
                background: rgb(195, 13, 35)
                border-radius: 4px
                font-size: 1.2em
                font-weight: 900
                letter-spacing: 2px
                cursor: pointer
                line-height :1.2em
                margin :0
            .disab
                background: rgb(173, 167, 167);
</style>
