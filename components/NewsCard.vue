<template>
  <div class="_w-100pct wrapper">
    <!-- Image -->
    <nuxt-link 
      class="link _ttf-cptl" 
      to="/">
      <div 
        v-lazy:background-image="`https://placeimg.com/640/480/any`" 
        class="_aprt-4-3 _bgrp-nrp _bgpst-ct"/>
      <div class="_mgt-8px">
        <!-- Cat tag -->
        <CategoryTag />
      </div>
      <h4 class="_mgv-8px">Lorem ipsum, dolor</h4>
    </nuxt-link>
    <div class="_mgbt-16px">Lorem ipsum dolor sit, amet consectetur adipisicing elit?</div>
  </div>
</template>

<script>
import CategoryTag from '~/components/CategoryTag'
export default {
  components: {
    CategoryTag
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/styles/variables';

.wrapper {
  transition: 0.15s;
  background: #ffffff;
  padding: 14px 16px;
  box-shadow: 6px -5px 44px 0 rgba(243, 122, 138, 0.05),
    -3px 5px 35px 0 rgba(49, 111, 183, 0.06);
  &:hover {
    transform: scale(1.05);
  }
}

.link {
  color: $blue-400;
  font-size: 120%;
  span {
    transition: 0.4;
    display: block;
    margin: 12px 0px 8px 0px;
  }
  &:hover {
    color: lighten($blue-400, 40);
  }
}
</style>
