<template>
  <div class="_mgbt-48px">
    <div class="_dp-f _mgbt-24px">
      <div class="_ttf-upc _fs-8 _pdr-2px partner-heading">{{ heading }}</div>
      <div 
        v-if="hasLine" 
        class="_h-1px _bgcl-blue _w-at"/>
    </div>
    <div class="_dp-f _w-100pct">
      <div 
        v-for="(p,i) in partners" 
        :key="i" 
      >
        <img 
          v-lazy="p.image" 
          class="_w-100pct _h-at _pdr-32px">
          <!-- <div 
          v-lazy:background="p.image" 
          class="_bgs-ct _bgrp-nrp _w-128px _h-64px" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      default: 'Title',
      type: String
    },
    partners: {
      default: () => [],
      type: Array
    },
    hasLine: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.partner-heading {
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: 0;
    height: 1px;
    background-color: red;
    z-index: -1;
  }
}
</style>




