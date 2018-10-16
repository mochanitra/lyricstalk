<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="programme" />
        </div>
      </div>
      <!-- Filter -->
      <div class="row _jtfct-ct">
        <div class="col-12">
          <div class="row">
            <!-- Categories -->
            <div class="col-12 col-sm-3 _dp-f _jtfct-spbtw _alit-ct">
              <div>
                <h4 class="_dp-ilb _ff-dcv _ttf-upc">134 Found</h4>
                <i class="fal fa-times fa-lg _pdh-12px _cl-pink"/>
              </div>
              <!-- Mobile Filter -->
              <div class="_dp-n-sm">
                <span class="fa-stack _fs-5 _fs-6-md">
                  <i class="fas fa-fw fa-circle fa-stack-2x _cl-pink"/>
                  <i class="fal fa-fw fa-tasks fa-stack-1x fa-inverse"/>
                </span>
              </div>
            </div>
            <!-- Desktop Filter -->
            <div class="col-12 col-sm-9 _dp-f-sm _jtfct-fe _dp-n">
              <!-- Categories -->
              <button 
                :class="{'-active': filterTypeOpen === 'programmes'}"
                class="_mgl-12px bio-button -pink" 
                @click="openFilter('programmes')">
                <h5 class="_dp-ilb _ff-dcv _ttf-upc">Programmes</h5>
                <i :class="{'fa-chevron-down': filterTypeOpen !== 'programmes', 'fa-chevron-up': filterTypeOpen === 'programmes'}" class="fal fa-lg _pdl-4px"/>
              </button>
              <!-- Date -->
              <button 
                :class="{'-active': filterTypeOpen === 'dates'}" 
                class="_mgl-12px bio-button -pink"
                @click="openFilter('dates')">
                <h5 class="_dp-ilb _ff-dcv _ttf-upc">{{ date.start }}–{{ date.end }} {{ $moment().format(`MMMM`) }}</h5>
                <i :class="{'fa-chevron-down': filterTypeOpen !== 'dates', 'fa-chevron-up': filterTypeOpen === 'dates'}" class="fal fa-lg _pdl-4px"/>
              </button>
              <!-- Venues -->
              <button 
                :class="{'-active': filterTypeOpen === 'venues'}" 
                class="_mgl-12px bio-button -pink"
                @click="openFilter('venues')">
                <h5 class="_dp-ilb _ff-dcv _ttf-upc">venues</h5>
                <i :class="{'fa-chevron-down': filterTypeOpen !== 'venues', 'fa-chevron-up': filterTypeOpen === 'venues'}" class="fal fa-lg _pdl-4px"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 
        Filters:
          Desktop and mobile same template
      -->
      <slide-y-down-transition>
        <div 
          v-if="filterTypeOpen" 
          id="filters"
          class="_pdv-32px _bgcl-gray _mgv-16px">
          <div class="col-12">
            <div class="row">
              x
            </div>
          </div>
        </div>
      </slide-y-down-transition>
      <!--  -->
      <div class="row _mgt-24px">
        <div 
          v-for="(item, i) in [0, 0, 0, 0, 0, 0, 0]" 
          :key="i" 
          :class="{'col-md-6': i === 0 || i === 1}" 
          class="col-12 col-sm-6 col-md-3 _mgbt-16px">
          <EventCard />
        </div>
      </div>
      <!-- See more -->
      <div class="row">
        <div class="col-12 _dp-f _jtfct-ct">
          <nuxt-link 
            :to="localePath('programmes')" 
            class="_mgt-16px bio-button _dp-ilb _ttf-upc -pink">
            <span>see more</span>
            <i class="fal fa-long-arrow-right"/>
          </nuxt-link>
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
  },
  async asyncData({ store, redirect, query }) {

  },
  data: () => ({
    date: {
      start: '8',
      end: '16'
    },
    filterTypeOpen: null
  }),
  watchQuery: ['programCats', 'dates', 'venues'],
  methods: {
    openFilter (type) {
      if (type === this.filterTypeOpen) return this.filterTypeOpen = null
      this.filterTypeOpen = type
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
