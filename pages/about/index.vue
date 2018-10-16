<template>
  <div class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb page-title="Chiang mai design week" />
        </div>
        <!-- About image -->
        <div class="col-12 col-md-6">
          <div 
            v-lazy:background="about.image" 
            class="_bgs-cv _bgrp-nrp about-image" />
        </div>
        <!-- About content -->
        <div class="col-12 col-md-6">
          <div 
            class="_mgbt-48px _fs-6 _wp-content" 
            v-html="about.content"/>
        </div>
      </div>
      <div class="row">
        <div 
          v-for="(item,i) in aboutImages" 
          :key="i"
          class="col-12 col-sm-3">
          <ImageBoxWithTitle 
            :image="item.image"
            :title="item.title"
            :path="`/`"
          />
          
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
    about: {
      image: 'https://placeimg.com/640/480/any',
      content: `
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
      `
    },

    aboutImages: [
      {
        image: 'https://placeimg.com/640/480/any',
        title: 'Factsheet',
        path: '/'
      },
      {
        image: 'https://placeimg.com/640/480/any',
        title: 'Overview',
        path: '/'
      },
      {
        image: 'https://placeimg.com/640/480/any',
        title: 'Photo Library',
        path: '/'
      },
      {
        image: 'https://placeimg.com/640/480/any',
        title: 'Video Library',
        path: '/'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.about-image {
  width: 100%;
  padding-top: 72.38%;
}
</style>


