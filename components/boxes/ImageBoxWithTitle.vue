<template>
  <div>
    <div 
      v-lazy:background="image" 
      class="_bgs-cv _bgrp-nrp image _mgbt-12px" />
    <a :href="path">
      <h6 
        class="_cl-blue _lh-150pct" 
        v-html="title"/>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      default: 'https://placeimg.com/640/480/any',
      type: String
    },
    title: {
      default: 'Title',
      type: String
    },
    path: {
      default: '/',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  padding-top: 72.38%;
}
</style>
