<template>
  <div class="row _pdbt-24px _pdbt-48px-md">
    <div class="col-12 col-md-7 _pdbt-16px _pdbt-24px-md" >
      <PartnerBox 
        :heading="`Organised by`" 
        :partners="orginised"
      />
    </div>
    <div class="col-12 col-md-5 _pdbt-16px _pdbt-24px-md">
      <PartnerBox 
        :heading="`Offial Partners`" 
        :partners="officialPartners"/>
    </div>
    <div class="col-12 col-md-3 _pdbt-16px _pdbt-24px-md">
      <PartnerBox 
        :heading="`Top Supporter`" 
        :partners="topSupporter"
        :has-line="false"
      />
    </div>
    <div class="col-12 col-md-9 _pdbt-16px _pdbt-24px-md">
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






