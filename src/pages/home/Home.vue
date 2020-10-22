<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-menu></home-menu>
  </div>
</template>

<script>
import HomeHeader from '../../components/header/Header'
import HomeSwiper from '../../components/swiper/Swiper'
import HomeMenu from '../../components/menu/Menu'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu
  }
}
</script>

<style>

</style>
