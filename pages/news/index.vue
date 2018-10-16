<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="news" />
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div 
          v-for="(item, i) in [0, 0, 0, 0, 0, 0, 0]" 
          :key="i" 
          class="col-12 col-sm-6 col-md-3 _mgbt-16px">
          <NewsCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import NewsCard from '~/components/NewsCard'
export default {
  components: {
    Breadcrumb,
    NewsCard
  }
}
</script>

<style lang="scss" scoped>
</style>
