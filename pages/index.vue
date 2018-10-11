<template>
  <div class="_w-100pct">
    <!-- Hero -->
    <div class="container-fluid">
      <div class="row _mnh-512px">
        <div 
          v-lazy:background="`https://placeimg.com/640/480/any`" 
          class="col-12 col-md-7 _bgs-cv"/>
        <div class="col-md-5 col-12 _dp-f _alit-ct _jtfct-ct _pdh-48px-md _pdh-24px">
          <div>
            <h6 class="_ttf-upc">hilights of cmdw18</h6>
            <h1 class="_mgt-16px _ttf-upc">flower in the vase</h1>
            <h4 class="_mgt-16px _ttf-upc">above the surface of the earth</h4>
            <p class="_mgt-16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus odit reiciendis, ad facere rerum.</p>
            <!-- All programmes -->
            <nuxt-link 
              :to="localePath('programmes')" 
              class="_mgt-16px bio-button _dp-ilb _ttf-upc">all programmes</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Hilights -->
    <div id="hilights">
      <div class="container _pdv-48px">
        <div class="row">
          <div 
            v-for="(item, i) in $store.state.hilightArticles || [0, 0, 0]" 
            :key="i" 
            class="col">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
    <!-- Happening & What's on -->
    <div id="happening">
      <div class="container _pdv-48px">
        <div class="row">
          <!-- Happening -->
          <div class="col-8">
            <!-- Title -->
            <div class="_mgbt-24px">
              <h2 class="_ff-dcv _ttf-upc">Happening!</h2>
              <h4 class="_ttf-upc">{{ $moment().format('d MMMM YYYY') }}</h4>
            </div>
            <!-- 2 Col EventCard -->
            <div class="row">
              <div 
                v-for="(item, i) in [0, 0]" 
                :key="i" 
                class="col">
                <EventCard />
              </div>
            </div>
          </div>
          <!-- What's on -->
          <div class="col-4">
            <!-- Title -->
            <h2 class="_ff-dcv _ttf-upc">What's on?</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Latest news -->
    <div id="latest-news">
      <div class="container _pdv-48px">
        <div class="row">
          <div class="col-12">
            x
          </div>
        </div>
        <div class="row">
          <div 
            v-for="(item, i) in [0,0,0, 0]" 
            :key="i" 
            class="col">
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
import NewsCard from '~/components/NewsCard'
export default {
  components: {
    EventCard,
    NewsCard
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
