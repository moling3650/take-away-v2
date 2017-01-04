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
        <div class="support-count" v-if="seller.supports" @click="showDetail">
          <span class="count">{{seller.supports.length}}个</span><span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
    </div><!-- content-wrapper -->
    <div class="bulletin-wrapper" @click="showDetail">
      <icon pic="bulletin"></icon><span class="bulletin-text">{{ seller.bulletin}}</span><span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper">
        <div class="detail-main"></div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <span class="icon-close"></span>
      </div><!-- detail -->
    </div>
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
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'

.header
  position relative
  overflow hidden
  height 134px
  text(10px, 12px, 200, #fff)
  .content-wrapper
    display flex
    height 64px
    padding 24px 12px 18px 24px
    .avatar
      flex 0 0 64px
      margin-right 16px
      box-sizing border-box
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
        padding 0 8px
        border-radius 14px
        box-sizing border-box
        background-color rgba(0, 0, 0, .2)
        .count
          margin-right 2px
          text(10px, 24px, 200, #fff)
        .icon-keyboard_arrow_right
          text(10px, 24px, 200, #fff)
  .bulletin-wrapper
    position relative
    height 28px
    line-height 28px
    padding 0 20px 0 12px
    background-color rgba(7, 17, 27, .2)
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    .icon
      margin-right 4px
      vertical-align middle
    .text
      vertical-align middle
    .icon-keyboard_arrow_right
      position absolute
      line-height 28px
      right 12px
  .background
    position absolute
    top 0
    z-index -1
    width 100%
    filter blur(10px)
    -webkit-filter: blur(10px)
    img
      width 100%
  .detail
    position fixed
    top 0
    z-index 100
    width 100%
    height 100%
    overflow auto
    background rgba(7, 17, 27, .8)
    .detail-main
      margin-top 64px
      min-height calc(100vh - 128px)
    .detail-close
      width 32px
      margin 16px auto
      font-size 32px
</style>
