<template>
    <div class="goods">
        <div v-for="item in items" class="g-item">
        <v-food :food='item' v-on:cShowDl='cShowD'></v-food>
      </div>
        <foo-modal name="example-modal"
          transition="nice-modal-fade"
          :min-width="200"
          :min-height="200"
          :delay="100"
          :adaptive="adaptive"
          :resizable="resizable"
          :draggable="draggable">
      <div style="height: 100%; box-sizing: border-box; padding: 10px; font-size: 13px; overflow: auto">
        Appropriately exploit professional infrastructures rather than unique growth strategies. Assertively build leveraged growth strategies vis-a-vis multimedia based vortals. Progressively simplify cross-platform value through interactive imperatives. Objectively
        implement enabled web services after plug-and-play ROI. Distinctively impact inexpensive schemas before installed base imperatives. Holisticly benchmark pandemic process improvements without wireless experiences. Efficiently create worldwide partnerships
        after tactical vortals. Uniquely productize enabled platforms vis-a-vis timely processes. Conveniently unleash standards compliant niches through highly efficient testing procedures. Rapidiously enable pandemic niche markets whereas viral markets.
        Assertively simplify alternative partnerships and error-free e-commerce. Professionally formulate 24/365 internal or "organic" sources through equity invested mindshare. Globally redefine unique best practices for.
      </div>
    </foo-modal>
        <sweet-modal ref="successAlert" icon="success" >
            <h2>投票成功</h2>
            <p>非常感谢,么么哒!</p>
            <b-button class="btn-danger" href="">
                OK
            </b-button>
        </sweet-modal>
        <simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
        </simplert>
    </div>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue';
import Simplert from 'vue2-simplert';
import food from './food/food.vue';

export default {
  data () {
    return {
      resizable: false,
      adaptive: false,
      draggable: false,
      canBeShown: false,
      items: [{'id': '001', 'name': '皮蛋瘦肉粥', 'select': false, 'src': 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '002', 'name': '扁豆焖面', 'select': false, 'src': 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '003', 'name': '葱花饼', 'select': false, 'src': 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '004', 'name': '牛肉馅饼', 'select': false, 'src': 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '005', 'name': '招牌猪肉白菜锅贴/10个', 'select': false, 'src': 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '006', 'name': '南瓜粥', 'select': false, 'src': 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '007', 'name': '红豆薏米美肤粥', 'select': false, 'src': 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750'}, {'id': '008', 'name': '八宝酱菜', 'select': false, 'src': 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750'}]
    };
  },
  name: 'goods',
  components: {
    'v-food': food,
    SweetModal,
    SweetModalTab,
    Simplert
  },
  methods: {
    cShowD: function () {
      console.log('goods');
      this.resizable = false;
      this.adaptive = false;
      this.draggable = false;
      /*
        $nextTick is required because the data model with new
        "resizable, adaptive, draggable" values is not updated yet.. eh
      */
      this.$nextTick(() => {
        // this.$modal.show('example-modal');
      });
      this.$refs['successAlert'].open();
/*
      let obj = {
        title: 'Custom Function',
        message: 'Click close to trigger custom function',
        type: 'info',
        onClose: this.onClose
      };
      this.$refs.simplert.openSimplert(obj); */
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .goods
        padding :0 10px 10px 10px
        .g-item
            margin-bottom: 10px
        .sweet-modal-overlay
            background-color: rgba(0, 0, 0, 0.4);
            .sweet-modal
                height: auto
                top: 10%

</style>
