<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="benefits" />
        </div>
        <!-- Benefit Left -->
        <div class="col-12 col-md-8 _wp-content">
          <h4 v-html="$store.state.pages.benefits.acf.page_benefits.title"/>
          <div 
            class="_mgbt-48px" 
            v-html="$store.state.pages.benefits.acf.page_benefits.description"/>

          <!-- Benefit Images  -->
          <div class="row">
            <div 
              v-for="(item,i) in benefitLink" 
              :key="i"
              class="col-12 col-sm-6">
              <ImageBoxWithTitle 
                :image="item.image"
                :title="item.title"
                :path="`/`"
              />
            </div>
          </div>
        </div>
        <!-- Benefit Right -->
        <div class="col-12 col-md-4 _mgt-24px _mgt-0px-md _wp-content">
          <h5 v-html="$store.state.pages.benefits.acf.page_benefits.information_contact.title"/>
          <!-- Contact Name -->
          <div v-html="$store.state.pages.benefits.acf.page_benefits.information_contact.contact_name"/>

          <!-- Contact Phone Number -->
          <div v-html="$store.state.pages.benefits.acf.page_benefits.information_contact.contact_phone_number"/>

          <!-- Contact Email -->
          <div v-html="$store.state.pages.benefits.acf.page_benefits.information_contact.contact_email"/>

          <nuxt-link 
            :to="`/`" 
            class="_mgt-16px bio-button _dp-ilb _ttf-upc -pink">
            <span class="_fs-7">Download partnership overview</span>
            <i class="fal fa-long-arrow-right"/>
          </nuxt-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import Partners from '~/components/sections/Partners'
import ImageBoxWithTitle from '~/components/boxes/ImageBoxWithTitle'
export default {
  components: {
    Breadcrumb,
    Partners,
    ImageBoxWithTitle
  },
  data: () => ({ 
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


