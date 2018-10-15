<template>
  <div class="_mgt-24px _mgbt-32px">
    <!-- home -->
    <div class="_dp-ilb _mgv-12px">
      <!-- <i class="fal fa-home fa-fw fa-lg"/> -->
      <nuxt-link 
        class="fal fa-home fa-fw fa-lg _cs-pt" 
        to="/"
        tag="i"/>
      <!-- Right arrow -->
      <i class="fal fa-long-arrow-right _cl-pink _mgh-4px"/>
    </div>
    <HeadingWithLine :heading="pageTitle" />
  </div>
</template>

<script>
import HeadingWithLine from '~/components/HeadingWithLine'
export default {
  components: {
    HeadingWithLine
  },
  props: {
    pageTitle: {
      type: String,
      default: 'x'
    }
  }
}
</script>
