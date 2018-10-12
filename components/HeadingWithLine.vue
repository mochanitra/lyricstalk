<template>
  <div class="_dp-f _ovf-hd">
    <h2 
      class="_ff-dcv _ttf-upc _mgbt-16px" 
      v-html="heading"/>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.line {
  width: 100%;
  height: 2px;
}
h2 {
  position: relative;
  &::after {
    content: '';
    background: $pink-400;
    width: 100vw;
    height: 2px;
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
