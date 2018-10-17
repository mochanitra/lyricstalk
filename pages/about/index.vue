<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="Chiang mai design week" />
        </div>
        <!-- About image -->
        <div class="col-12 col-md-6">
          <div 
            v-lazy:background="about.image" 
            class="_bgs-cv _bgrp-nrp about-image" />
        </div>
        <!-- About content -->
        <div class="col-12 col-md-6">
          <div 
            class="_mgbt-48px _fs-6 _wp-content" 
            v-html="about.content"/>
        </div>
      </div>
      <div class="row">
        <div 
          v-for="(item,i) in aboutImages" 
          :key="i"
          class="col-12 col-sm-3">
          <ImageBoxWithTitle 
            :image="item.image"
            :title="item.title"
            :path="`/`"
          />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import Partners from '~/components/sections/Partners'
import ImageBoxWithTitle from '~/components/boxes/ImageBoxWithTitle'
export default {
  components: {
    Breadcrumb,
    Partners,
    ImageBoxWithTitle
  },
}
</script>

<style lang="scss" scoped>
.about-image {
  width: 100%;
  padding-top: 72.38%;
}
</style>


