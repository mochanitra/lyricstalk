<template>
  <div class="_dp-f _ovf-hd">
    <h2 
      class="_ttf-upc" 
      v-html="heading"/>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables';

h2 {
  position: relative;
  &::after {
    content: '';
    background: $red-400;
    width: 100vw;
    height: 1px;
    bottom: 8px;
    position: absolute;
    margin-left: 4px;
  }
}
</style>


<script>
export default {
  props: {
    heading: {
      default: 'x',
      type: String
    }
  }
}
</script>
