<template>
  <span class="icon" :class="pic"></span>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    pic: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'

.icon
  display inline-block
  background-repeat no-repeat
  &.brand
    bg-image('brand', 30px, 18px)
  &.bulletin
    bg-image('bulletin', 22px, 12px)
  for $pic in decrease discount guarantee invoice special
    for $i in 1..4
      &.{$pic}_{$i}
        if $i % 2 == 1
          bg-image(s('%s_%s', $pic, $i), 12px, 12px)
        else
          bg-image(s('%s_%s', $pic, $i), 16px, 16px)
</style>
