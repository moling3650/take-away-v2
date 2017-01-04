<template>
  <div class="star" :class="size">
    <icon v-for="pic in picList" :pic="picPrefix + pic"></icon>
  </div>
</template>

<script type="text/ecmascript-6">
import Icon from 'components/icon/icon'

export default {
  props: {
    size: String,
    score: Number
  },
  components: {
    Icon
  },
  computed: {
    picPrefix () {
      // 图标的前缀
      return 'star' + {lg: '48', md: '36', sm: '24'}[this.size] + '_'
    },
    picList () {
      // 初始化为灰色的星星
      let pics = ['off', 'off', 'off', 'off', 'off']
      for (var i = 0; i <= this.score - 1; i++) {
        pics[i] = 'on'          // 点亮星星
      }
      if (this.score % 1 >= 0.5) {
        pics[i] = 'half'        // 点亮半星
      }
      return pics
    }
  }
}
</script>

<style lang="stylus" scoped>
  .lg
    .icon+.icon
      margin-left 22px
  .md
    .icon+.icon
      margin-left 6px
  .sm
    .icon+.icon
      margin-left 3px
</style>
