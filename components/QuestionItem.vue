<template>
    <div>

       <div class="bgimg _bgs-ct _bgrp-nrp _bgpst-ct">

        <div class="row _pdv-24px ">
          <div class="center">
            <img class="_h-32px _cs-pt" src="~/assets/images/code-01.png">
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h2 @click="!selectedQuestion && $modal.show('question-list')" class="text-center _cl-white">
                <span v-if="!selectedQuestion">Choose question {{ number }}</span>
                <span v-else>{{ selectedQuestion.title }}</span>
            </h2>
          </div>
        </div>


        <div class="row _pdbt-64px">
          <div class="col-6 _mgv-24px" v-for="(song, i) in selectedQuestion && selectedQuestion.songs || [0, 0, 0, 0]" :key="i">
            <audio :id="song.title" :src="song.mp3"></audio>

              
              <div class="_mgh-at" style="width: 300px;">
              <div @click="selectSong(i)" :class="{'selected': selectedSong === i}" class="_h-200px _bgs-ct _bgrp-nrp _bgpst-ct _cs-pt _dp-f _alit-ct" v-lazy:background-image="require(`assets/images/albumchoice.png`)">

              <div class="marginplay">
              <img @click="playSongById(song.title)" style="width: 50px;" src="~/assets/images/play.png">
              </div>

              <div v-if="true" class="_w-50pct _mgl-at _pdr-24px">
                {{ song.lyrics }}
              </div>

              
              
            </div>
            </div>
          </div>

          
        </div>

      </div>
    </div>
</template>

<script>
export default {
    props: {
        number: {
            type: Number,
            default: 1
        },
        selectedQuestion: {
            type: Object,
            default: () => {}
        }
    },
  methods: {
    playSongById (id) {
      // this.show[i] = true
      
      const x = document.getElementById(id)
      x.play()  
    },
    selectSong (i) {
      this.selectedSong = i
    }
  },
  data: () => ({
    show: [false, false, false, false],
    selectedSong: null
  })
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.bgcl {
  background-color : #EBD7D3;
}

.bgimg {
  background-image : url(~/assets/images/redcenter-03.png);
  
}

.marginplay {

  margin-left: 72px
}

.selected {
  border: 4px solid white;
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
    background: #EBD7D3;
    width: 100%;
    height: 12px;
    bottom: -12px;
    left: 0;
  }
}
</style>
