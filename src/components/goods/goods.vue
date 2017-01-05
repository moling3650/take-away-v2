<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li class="menu-item" v-for="item in goods">
          <p class="content border-1px">
            <icon :pic="picMap[item.type]" v-if="item.type > 0"></icon><span class="text">{{item.name}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li class="food-list" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item border-1px" v-for="food in item.foods">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="food">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc" v-if="food.description">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Icon from 'components/icon/icon'

const ERR_OK = 0

export default {
  props: {
    seller: Object
  },
  components: {
    Icon
  },
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.picMap = ['decrease_3', 'discount_3', 'special_3', 'invoice_3', 'guarantee_3']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'

.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    background #f3f5f7
    text(12px, 14px, 200, rgb(7, 17, 27))
    .menu-item
      display table
      width 56px
      height 54px
      padding 0 12px
      .content
        display table-cell
        border-1px(rgba(7, 17, 27, .1))
        vertical-align middle
        .icon
          margin-right 2px
          vertical-align middle
        .text
          vertical-align middle
  .foods-wrapper
    flex 1
    text(10px, 24px, normal, rgb(147, 153, 159))
    .title
      padding-left 12px
      height 26px
      border-left 2px solid  #d9dde1
      text(12px, 26px)
      background-color #f3f5f7
    .food-item
      display flex
      padding 18px 0
      margin 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      .icon
        flex 0 0 57px
        width 57px
      .content
        flex 1
        margin-left 10px
        text(10px, 10px)
        .name
          margin-top 2px
          text(14px, 14px, normal, rgb(7, 17, 27))
        .desc
          margin-top 8px
        .extra
          margin-top 8px
          font-size 0
          .count, .rating
            text(10px, 10px)
          .count
            margin-right 12px
      .price
        font-size 0
        .now
          text(14px, 24px, bold, rgb(240, 20, 20))
          &:before
            content '¥'
            text($fontSize:10px, $fontWeight:normal)
        .old
          text(10px, 24px, blod)
          &:before
            content '¥'
            font-weight normal
</style>
