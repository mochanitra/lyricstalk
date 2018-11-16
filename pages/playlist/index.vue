<template>
  <div class="_w-100pct bgcl">
    <form 
      class="container" 
      @submit.prevent="submit">
      <div class="row _jtfct-ct">
                
        <div class="col-4 _jtfct-ct _pdt-32px _pdbt-2px">
          <div class="bio-input">
            <input 
              v-model="name" 
              type="text"
              placeholder="your name">
          </div>
        </div>
                

        <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-64px _pdbt-32px">
          <img 
            :src="cover" 
            class="_h-256px">
        </div>
      </div>
        
      <div class="row _jtfct-ct">
        <div class="col-5">
          <Uploader 
            @url="onReceiveURL"
          />
        </div>

      </div>


      <div class="row">
        <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-32px _pdbt-64px">
          <!-- <nuxt-link to="/copylink">
            <img 
              class="_h-64px" 
              src="~/assets/images/sharequiz.png">
          </nuxt-link> -->
          <button 
            type="submit" 
            class="bio-button">
            Share Quiz
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Uploader from '~/components/forms/Uploader'
export default {
    components: {
        Uploader
    },
    data: () => ({
        cover: require('assets/images/playlistpic.png'),
        name: ''
    }),
    methods: {
        onReceiveURL(url) {
            console.log(url)
            this.cover = url
        },
        async submit () {
            const res = await this.$axios.$post(`https://lyricstalk-1fb09.firebaseio.com/quizes.json`, {
                name: this.name,
                coverImage: this.cover
            })
            console.log(res)
            window.alert(`Share URL: https://lyricstalk.co/quiz/${res.name}`)
        }
    }
}

</script>

<style>
.bgcl {
  background-color: #ebd7d3;
}
</style>
