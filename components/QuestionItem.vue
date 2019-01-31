<template>
    <div>

       <div v-lazy:background="bgimg" class="_bgs-ct _bgrp-nrp _bgpst-ct">

        <div class="row _pdv-24px ">
          <div class="center">
            <img class="_h-32px _cs-pt" src="~/assets/images/code-01.png">
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h2 @click="showQuestionList()" class="text-center _cl-white">
                <span v-if="!selectedQuestion">Choose question {{ number }}</span>
                <span v-else>{{ selectedQuestion.title }}</span>
            </h2>
          </div>
        </div>


        <div class="row _pdbt-64px">
          <div class="col-6 _mgv-24px" v-for="(song, i) in selectedQuestion && selectedQuestion.songs || [0, 0, 0, 0]" :key="i">
            <audio :id="song.title" :src="song.mp3"></audio>

              
              <div class="_mgh-at" style="width: 300px;">
              <div @click="selectSong(i)" :class="{'selected': selectedSong === i, 'correct': correctAnswerIndex === i, 'answer': userAnswerIndex === i}" class="_h-200px _bgs-ct _bgrp-nrp _bgpst-ct _cs-pt _dp-f _alit-ct" v-lazy:background-image="require(`assets/images/albumchoice.png`)">

              <div class="marginplay">
              <img @click="playSongById(song.title,i)" style="width: 50px;" src="~/assets/images/play.png">
              </div>

              <div v-if="show[i]" class="_w-50pct _mgl-at _pdr-24px">
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
        },
        bgimg: {
          type: String,
          default: require('~/assets/images/red.png')
        },
        correctAnswerIndex: {
          type: Number,
          default: null
        },
        userAnswerIndex: {
          type: Number,
          default: null
        },
        playedSong: {
          type: Number,
          default: null
        }
    },
  methods: {
    playSongById (id,i) {
      // this.show[i] = true
      if(this.$props.playedSong && this.$props.playedSong != id) {
        const prev = document.getElementById(this.$props.playedSong)
        prev.pause()
        prev.load()
      }

      const x = document.getElementById(id)
      if(x.paused) {
        x.play()
        this.$emit('setPlayedSong',id)
      }

      else {
        x.pause()
        x.load()
        this.$emit('setPlayedSong',id)
      }
      x.onended = () => {
        this.show[i] = true;
      }  
    },
    selectSong (i) {
      this.selectedSong = i
      this.$emit('selectSong', i)
    },
    
    showQuestionList() {
      this.$emit('selectQuestion', this.$props.number)
      this.$emit('deleteSelectedQuestions')
      this.$modal.show('question-list')
    }
  },
  data: () => ({
    show: {
      0: false,
      1: false,
      2: false,
      3: false
    },
    selectedSong: null
  })
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.bgcl {
  background-color : #E8DBD6;
}

.bgimg {
  background-image : url(~/assets/images/red.png);
  
}

.marginplay {

  margin-left: 72px
}

.selected {
  border: 4px solid white;
}

.correct {
  border: 4px solid green;
}

.answer {
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
    background: #E8DBD6;
    width: 100%;
    height: 12px;
    bottom: -12px;
    left: 0;
  }
}
</style>
