<template>
  <div class="row">
    <div class="col-12 col-md-8">
      <PartnerBox 
        :heading="`Organised by`" 
        :partners="orginised"/>
    </div>
    <div class="col-12 col-md-4">
      <PartnerBox 
        :heading="`Offial Partners`" 
        :partners="officialPartners"/>
    </div>
    <div class="col-12 col-md-3">
      <PartnerBox 
        :heading="`Top Supporter`" 
        :partners="topSupporter"
        :has-line="false"
      />
    </div>
    <div class="col-12 col-md-9">
      <PartnerBox 
        :heading="`Major Supporters`" 
        :partners="majorSupporters"/>
    </div>
  </div>
</template>

<script>
import PartnerBox from '~/components/boxes/PartnerBox'
export default {
  components: {
    PartnerBox
  },
  data: () => ({
    orginised: [
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
    officialPartners: [
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
    topSupporter: [
      {
        image: 'http://via.placeholder.com/100x60'
      }
    ],
    majorSupporters: [
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






