<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-if="food.count" @click="decreaseCart($event)">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'

export default {
  props: {
    food: Object
  },
  methods: {
    decreaseCart (event) {
      if (event._constructed) {
        this.food.count && --this.food.count
      }
    },
    addCart (event) {
      if (event._constructed) {
        this.food.count ? ++this.food.count : Vue.set(this.food, 'count', 1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'

.cartcontrol
  font-size 0
  .cart-decrease, .cart-add
    display inline-block
    height 24px
    padding 6px
    text(24px, 24px, normal, rgb(0, 160, 240))
    .inner
      display inline-block
  .cart-count
    display inline-block
    text-align center
    vertical-align top
    text(10px, 36px, normal, rgb(147, 153, 159))
  .move-enter-active, .move-leave-active
    transition: all .4s linear
    opacity 1
    transform translate3D(0, 0, 0)
  .move-enter, .move-leave-active
    opacity 0
    transform translate3D(24px, 0, 0)

</style>
