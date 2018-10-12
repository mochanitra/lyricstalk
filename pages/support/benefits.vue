<template>
  <div class="container">
    <div class="row">
      <div class="col-12 _mgbt-48px">
        <HeadingWithLine :heading="`Benefits`"/>
      </div>
      <div class="col-12 col-md-8 _wp-content">
        <div 
          class="_mgbt-48px" 
          v-html="benefitContent"/>

        <!-- Benefit Images  -->
        <div class="_dp-f _jtfct-spbtw">
          <div 
            v-for="(item,i) in benefitLink" 
            :key="i">
            <div 
              v-lazy:background="item.image" 
              class="_bgs-cv _bgrp-nrp benefit-image _mgbt-16px" />
            <a :href="item.path">
              <h4 
                class="_cl-blue" 
                v-html="item.title"/>
            </a>
          </div>
        </div>

      </div>
      <div class="col-12 col-md-4 _mgt-24px _mgt-0px-md _wp-content">
        <div 
          class="_mgbt-48px" 
          v-html="benefitContact"/>

        <ButtonOutlineWithIcon 
          :title="`Download Partership Overview`"
          :icon="`fal fa-long-arrow-right`"
          :button-color-class="`pink`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeadingWithLine from '~/components/HeadingWithLine'
import ButtonOutlineWithIcon from '~/components/button/ButtonOutlineWithIcon'
export default {
  components: {
    HeadingWithLine,
    ButtonOutlineWithIcon
  },
  data: () => ({ 
    benefitContent: `
    <h4>Become a patrin today!</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,

    benefitContact: `
    <h5>For further information please contact:</h5>
    <p>Ms.Kanokporn Kiattisak</p>
    <p><a href="tel:+6621057400">0 2105 7400 #117</a></p>
    <p><a href="to:kanokporn@tcdc.or.th">kanokporn@tcdc.or.th</a></p>`,

    benefitLink: [
      {
        image: 'https://placeimg.com/640/480/any',
        title: 'Benefit',
        path: '/'
      },
      {
        image: 'https://placeimg.com/640/480/any',
        title: 'Photo Library',
        path: '/'
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


