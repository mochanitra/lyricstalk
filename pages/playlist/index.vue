<template>
  <div class="_w-100pct bgcl">
    <form 
      class="container" 
      @submit.prevent="submit">

      <div class="row _jtfct-ct">
        <div class="col-2 _pdt-32px _pdbt-8px _dp-f _fdrt-cl _alit-ct _pdl-32px">
           <h3>your name</h3>
        </div>
      </div>

      <div class="row _jtfct-ct">

                
        <div class="col-4 _jtfct-ct _pdt-8px _pdbt-2px ">
          <div class="bio-input">
            <input 
              v-model="name" 
              type="text"
              placeholder="your name">
          </div>
        </div>
                
      </div>

      <div class="row _jtfct-ct">
        
        <div class="col-5 _dp-f _fdrt-cl _alit-fe _pdt-32px _pdr-0px">
            <img class="_w-128px" src="~/assets/images/cd.png">
        </div>

        <div class="col-7 _dp-f _fdrt-cl _alit-fst _pdt-32px _pdl-0px">
          <div class="_h-256px _w-256px _bgs-cv _bgpst-ct" v-lazy:background-image="cover"></div>
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
            class="bio-button ">
            Share Quiz (URL)
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
        cover: require('assets/images/picplaylist.png'),
        name: ''
    }),
    methods: {
        onReceiveURL(url) {
            console.log(url)
            this.cover = url
        },
        async submit () {
          const slug = this.name + '-' + ~~(Math.random() * 1000)
            this.$store.commit('SET_MYQUIZ_PROFILE', {
              name: this.name,
              cover: this.cover,
              slug
            })
            const res = await this.$axios.$post(`https://lyricstalk-1fb09.firebaseio.com/quizes.json`, this.$store.state.myQuiz)
            // console.log(res)
            window.alert(`Share URL: https://lyricstalk.co/quiz/${slug}`)
        }
    }
}

</script>

<style>
.bgcl {
  background-color: #E8DBD6;
}

.bgimgupload {
    background-image : url(~/assets/images/uploadpic.png);

}

</style>
