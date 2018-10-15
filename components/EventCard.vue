<template>
  <no-ssr>
    <div class="_w-100pct wrapper">
      <!-- Image -->
      <nuxt-link 
        class="link _ttf-upc _ff-dcv" 
        to="/">
        <div 
          v-lazy:background-image="`https://placeimg.com/640/480/any`" 
          class="_aprt-4-3 _bgrp-nrp _bgpst-ct _pst-rlt">
          <FavoriteButton class="_pst-asl _t-8px _r-8px" />
        </div>
        <div>
          <!-- Cat tag -->
          <CategoryTag />
        </div>
        <span class="_ff-dcv">Lorem ipsum, dolor</span>
      </nuxt-link>
      <div class="_mgbt-16px">Lorem ipsum dolor sit, amet consectetur adipisicing elit?</div>
      <!-- Date & Time -->
      <div class="_dp-f _fs-7">
        <div class="_dp-f _alit-ct">
          <i class="fal fa-calendar"/>
          <span class="_mgl-8px">8–10 {{ $moment().format('MMM') }}</span>
        </div>
        <div class="_dp-f _alit-ct _mgl-12px">
          <i class="fal fa-calendar"/>
          <span class="_mgl-8px">10:00–18:00</span>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import FavoriteButton from '~/components/FavoriteButton'
import CategoryTag from '~/components/CategoryTag'
export default {
  components: {
    FavoriteButton,
    CategoryTag
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/styles/variables';

.wrapper {
  transition: 0.15s;
  background: #ffffff;
  padding: 16px 16px;
  box-shadow: 6px -5px 44px 0 rgba(243, 122, 138, 0.05),
    -3px 5px 35px 0 rgba(49, 111, 183, 0.06);
  &:hover {
    transform: scale(1.05);
  }
}

.link {
  color: $blue-400;
  font-size: 150%;
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
