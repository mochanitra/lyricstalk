<template>
  <div class="_w-100pct _pdt-24px-sm">
    <!-- Hero -->
    <div class="container-fluid">
      <div class="row _mnh-512px">
        <div 
          v-lazy:background="`https://placeimg.com/640/480/any`" 
          class="col-12 col-md-7 _bgs-cv _mnh-512px"/>
        <div class="col-md-5 col-12 _dp-f _alit-ct _jtfct-ct _pdh-48px-md _pdh-24px _bgcl-white">
          <div class="_mgbt-32px _mgbt-0px-sm">
            <h5 class="_ttf-upc _pdv-16px">hilights of cmdw18</h5>
            <h1 class="_mgt-16px _ttf-upc _ff-dcv">ดอกไม้ in the vase</h1>
            <h4 class="_mgt-8px _ttf-upc">above the surface of the earth</h4>
            <p class="_mgt-16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus odit reiciendis, ad facere rerum.</p>
            <!-- All programmes -->
            <nuxt-link 
              :to="localePath('programmes')" 
              class="_mgt-16px bio-button _dp-ilb _ttf-upc -pink">
              <span>all programmes</span>
              <i class="fal fa-long-arrow-right"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Hilights -->
    <div id="hilights">
      <div class="container _pdv-48px">
        <div class="row">
          <div 
            v-scroll-reveal="{delay: i * 100}" 
            v-for="(item, i) in $store.state.hilightArticles || [0, 0, 0]"
            :key="i" 
            :class="{'col-6': i !== 0, 'col-12': i === 0}"
            class="_mgbt-24px col-sm-4">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
    <!-- Happening & What's on -->
    <div 
      id="happening" 
      class="_bgcl-white">
      <div class="container _pdt-24px _pdbt-48px">
        <div class="row">
          <!-- Happening -->
          <div class="col-sm-7 col-12">
            <!-- Title -->
            <div class="_mgbt-24px">
              <h2 class="_ff-dcv _ttf-upc">Happening!</h2>
              <h4 class="_ttf-upc">{{ $moment().format('D MMMM YYYY') }}</h4>
            </div>
            <!-- 2 Col EventCard -->
            <div class="row">
              <div 
                v-scroll-reveal="{delay: i * 100}" 
                v-for="(item, i) in [0, 0]"
                :key="i" 
                class="col">
                <EventCard />
              </div>
            </div>
          </div>
          <!-- What's on -->
          <div class="col-sm-5 col-12 _mgt-48px _mgt-0px-sm">
            <!-- Title -->
            <h2 class="_ff-dcv _ttf-upc">What's on?</h2>
            <!-- ul -->
            <ul class="_mgt-48px-sm">
              <li 
                v-scroll-reveal="{delay: i * 100}" 
                v-for="(item, i) in [0, 0, 0,]"
                :key="i"
                class="_pdv-12px"
              >
                <nuxt-link 
                  to="/" 
                  class="hover-spacing tpr _dp-f _alit-ct _jtfct-spbtw">
                  <div class="_dp-f">
                    <!-- dot -->
                    <div class="_bgcl-pink _w-12px _h-12px _bdrd-50pct _mgl-8px _mgr-16px _mgt-8px"/>
                    <!-- Content -->
                    <div class="_cl-blue">
                      <h4 class="_ff-dcv _lh-150pct">COTH-ING</h4>
                      <p>Project: 10 year</p>
                    </div>
                  </div>
                  <!-- Arrow -->
                  <i class="fal fa-long-arrow-right fa-2x _cl-pink"/>
                </nuxt-link>
              </li>
            </ul>
            <!-- See more -->
            <nuxt-link 
              :to="localePath('programmes')" 
              class="_f-r _mgt-16px bio-button _dp-ilb _ttf-upc -pink">
              <span>see more</span>
              <i class="fal fa-long-arrow-right"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Latest news -->
    <div id="latest-news">
      <div class="container _pdv-48px">
        <div class="row">
          <div class="col-12">
            <HeadingWithLine heading="latest news" />
          </div>
        </div>
        <div class="row">
          <div 
            v-scroll-reveal="{delay: i * 100}"
            v-for="(item, i) in [0,0,0, 0]" 
            :key="i"
            class="col-sm-3 col-12 _mgv-12px">
            <NewsCard />
          </div>
        </div>
        <!-- see more -->
        <div class="row">
          <div class="col-12">
            <nuxt-link 
              :to="localePath('news')" 
              class="_f-r _mgt-16px bio-button _dp-ilb _ttf-upc -pink">
              <span>see all</span>
              <i class="fal fa-long-arrow-right"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Instagram -->
    <div id="instagram">
      <div class="ig-heading _f-r _bgcl-blue _dp-ilb _cl-white _pdv-12px _pdh-64px _mgbt-48px">
        <!-- <i class="fab fa-facebook-square fa-lg"/> -->
        <i class="fab fa-instagram fa-lg _mgr-4px"/>
        <h4 class="_dp-ilb">
          <span>#</span>
          <span class="_ff-dcv">CMDW18</span>
        </h4>
      </div>
      <!-- Copy the following to where you want the widget to appear in your html file. -->
      <div id="bigw-iframe-container"/>
      <script src="https://api.bestinstagramwidget.com/script/embed.js?id=eyJzdHlsZSI6ImNhcm91c2VsIiwidGFnIjoiamFtYXRldXJ3YW5kZXJlciIsInBhZGRpbmciOjIsIm1heFBvc3QiOjEyfQ=="/>
      <!-- END -->
    </div>
    <!-- Newsletter -->
    <div id="newsletter">
      <Newsletter />
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
import NewsCard from '~/components/NewsCard'
import HeadingWithLine from '~/components/HeadingWithLine'
import Newsletter from '~/components/Newsletter'
export default {
  components: {
    EventCard,
    NewsCard,
    HeadingWithLine,
    Newsletter
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.ig-heading {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background: $pink-400;
    width: 100%;
    height: 12px;
    bottom: -12px;
    left: 0;
  }
}
</style>
