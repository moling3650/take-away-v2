<template>
  <header class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="avatar">
      </div>
      <div class="content">
        <div class="title">
          <icon pic="brand"></icon>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <icon :pic="classMap[seller.supports[0].type] + '_1'"></icon>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div class="support-count" v-if="seller.supports">
          <span class="count">{{seller.supports.length}}个</span><span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
    </div><!-- content-wrapper -->
  </header>
</template>

<script type="text/ecmascript-6">
import Icon from 'components/icon/icon'

export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  components: {
    Icon
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'

.header
  height 134px
  text(10px, 12px, 200, #fff)
  background-color rgba(7, 17, 27, .5)
  .content-wrapper
    display flex
    padding 24px 12px 18px 24px
    .avatar
      flex 0 0 64px
      margin-right 16px
      img
        width 64px
        height 64px
        border-radius 4px
    .content
      flex 1
      position relative
      padding 2px 0
      .title
        display inline-flex
        margin-bottom 8px
        .name
          margin-left 6px
          text(16px, 18px, 700, #fff)
      .description
        margin-bottom 10px
        font-size 12px
      .support
        display inline-flex
        .text
          margin-left 4px
      .support-count
        position absolute
        right 0
        bottom 0
        height 24px
        line-height 12px
        padding 7px 8px
        border-radius 14px
        box-sizing border-box
        background-color rgba(0, 0, 0, .2)
        .count
          margin-right 2px
</style>
