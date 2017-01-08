<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left" :class="{'hightlight': totalCount > 0}">
        <div class="icon-wrapper"><span class="icon-shopping_cart"></span></div>
        <div class="price">¥ {{totalPrice}}</div><div class="desc">另需配送费 ¥ {{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class="payClass">
        <div class="pay">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    totalPrice () {
      return this.selectFoods.reduce((totalPrice, food) => {
        return totalPrice + food.price * food.count
      }, 0)
    },
    totalCount () {
      return this.selectFoods.reduce((totalCount, food) => totalCount + food.count, 0)
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `¥ ${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        return `还差¥ ${this.minPrice - this.totalPrice}元起送`
      } else {
        return '去结算'
      }
    },
    payClass () {
      return (this.totalPrice < this.minPrice) ? 'not-enough' : 'enough'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'

.shopcart
  position fixed
  bottom 0
  left 0
  width 100%
  height 48px
  .content
    width 100%
    display flex
    color rgba(255, 255, 255, .4)
    background-color #141d27
    .content-left
      flex 1
      .icon-wrapper
        position relative
        display inline-block
        top -10px
        width 44px
        height 44px
        margin 0 12px
        border 6px solid #141d27
        border-radius 50px
        text-align center
        background-color #2b343c
        .icon-shopping_cart
          text(24px, 44px)
      .price
        display inline-block
        box-sizing border-box
        vertical-align top
        padding-right 12px
        border-right 1px solid rgba(255, 255, 255, .1)
        margin-top 12px
        text(16px, 24px, bold)
      .desc
        display inline-block
        vertical-align top
        margin 12px 0 0 12px
        text(16px, 24px)
      @media only screen and (max-width: 320px)
        .icon-wrapper
          margin 0 6px
        .price
          padding-right 6px
          font-size 12px
        .desc
          margin-left 6px
          font-size 12px
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        text-align center
        text(12px, 48px, bold)
      &.not-enough
        background-color #2b333b
      &.enough
        background-color #00b43c
        color #fff
</style>
