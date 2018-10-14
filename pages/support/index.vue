<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="our supporters" />
        </div>
        <!-- Benefit Left -->
        <div class="col-12 _wp-content">
          <div 
            class="_mgbt-48px" 
            v-html="supportContent"/>
        </div>

        <div class="col-12">
          <!-- Partners Section -->
          <Partners/>

          <!-- Program Partners -->
          <PartnerBox
            :heading="`Program Partners`"
            :partners="programPartners" 
            class="_mgbt-32px _mgbt-64px-md"/>

          <!--  Media Partners -->
          <PartnerBox 
            :heading="`Media Partners`" 
            :partners="mediaPartners"
            class="_mgbt-16px _mgbt-24px-md"/>

          <!-- Special Thanks -->
          <PartnerBox 
            :heading="`Special Thanks`" 
            :partners="specialThanks"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import Partners from '~/components/sections/Partners'
import PartnerBox from '~/components/boxes/PartnerBox'
export default {
  components: {
    Breadcrumb,
    Partners,
    PartnerBox
  },
  data: () => ({ 
    supportContent: `
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>`,
    programPartners: [
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      }
    ],
    mediaPartners: [
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      }
    ],
    specialThanks: [
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      },
      {
        image: 'http://via.placeholder.com/100x60'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.benefit-image {
  width: 320px;
  padding-top: 72.37%;
}
</style>


