<template>
  <div class="_w-100pct _pdt-64px-sm _pdbt-64px bgcl">
    <!-- Hero -->
    <div class="container" v-if="q">

       <div class="bgimg _bgs-ct _bgrp-nrp _bgpst-ct">

        <div class="row _pdv-24px ">
          <div class="center">
            <img class="_h-32px _cs-pt" src="~/assets/images/code-01.png">
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h2 class="text-center _cl-white">{{ q.title }}</h2>
          </div>
        </div>


        <div class="row _pdbt-64px">
          <div class="col-6 _tal-ct _mgv-24px" v-for="(song, i) in q.songs" :key="i">
            <audio :id="song.title" :src="song.mp3"></audio>
            <img @click="playSongById(song.title, q.songs.map(x => x.title))" class="_h-200px _cs-pt" src="~/assets/images/album-01.png">
           
          </div>
        </div>

        

        

      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
import NewsCard from '~/components/NewsCard'
import HeadingWithLine from '~/components/HeadingWithLine'
export default {
  components: {
    EventCard,
    NewsCard,
    HeadingWithLine
  },
  data: () => ({
    questions: []
  }),
  async mounted () {
    const res = await this.$axios.$get('https://lyricstalk-1fb09.firebaseio.com/question_pool.json')
    // console.log(res)
    this.questions = res
  },
  methods: {
    playSongById (id, ids) {
      const x = document.getElementById(id)
      x.play()  
    }
  },
  computed: {
    q () {
      if (process.browser) {
        return this.questions[~~(Math.random() * this.questions.length)]
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.bgcl {
  background-color : #EDE1DF;
}

.bgimg {
  background-image : url(~/assets/images/red.png);
  
  
}


._h-200px {
  height: 200px;
}

.text-center {
  text-align: center;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.ig-heading {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background: #EDE1DF;
    width: 100%;
    height: 12px;
    bottom: -12px;
    left: 0;
  }
}
</style>
