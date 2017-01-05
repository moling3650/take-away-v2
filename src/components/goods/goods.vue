<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li class="menu-item" v-for="item in goods">
          <p class="text border-1px">
            <icon :pic="picMap[item.type]" v-show="item.type > 0"></icon>{{item.name}}
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
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
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
  .foods-wrapper
    flex 1
</style>
