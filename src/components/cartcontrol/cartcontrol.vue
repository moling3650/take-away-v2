<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" v-show="food.count" @click="decreaseCart($event)"></div>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
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
    padding 6px
    text(24px, 24px, normal, rgb(0, 160, 240))
  .cart-count
    display inline-block
    text-align center
    vertical-align top
    text(10px, 36px, normal, rgb(147, 153, 159))
</style>
