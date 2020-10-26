<template>
  <div>
    <div
      :key="index"
      class="item"
      v-for="(item, index) of list"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        <span>{{item.title}}</span>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item-title-icon
  background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%);
  border-radius: .06rem
  height: .24rem
  min-width: .08rem
  margin-right: .12rem
  align-self: center
.item-title
  display: flex
  line-height: .8rem
  font-size: .32rem
  padding: 0 .2rem
.item-children
  padding: 0 .2rem
</style>
