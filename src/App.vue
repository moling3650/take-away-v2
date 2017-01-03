<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item border-1px">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/header/header'
export default {
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus" scoped>
@import 'common/stylus/mixin'

#app
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, .1))
    .tab-item
      flex 1
      text-align center
</style>
