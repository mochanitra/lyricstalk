<template>
  <div>
    <h2 
      class="_ff-dcv _ttf-upc" 
      v-html="heading"/></div>
</template>

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
