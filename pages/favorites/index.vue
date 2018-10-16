<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="favorited events" />
        </div>
      </div>
      <div class="row">
        <div 
          v-for="(item, i) in [0, 0, 0, 0, 0, 0]" 
          :key="i" 
          class="col-12 col-md-3 _mgbt-24px">
          <event-card/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import EventCard from '~/components/EventCard'
export default {
  components: {
    Breadcrumb,
    EventCard
  }
}
</script>
