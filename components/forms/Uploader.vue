<template>
  <div>
    <input
      ref="input" 
      type="file"
      accept="image/*" 
      hidden
      @change="detectFiles($event.target.files)">
    <div 
      :class="{'uploading': progressUpload > 0 && progressUpload < 100, 'uploaded': progressUpload === 100}"
      class="button-wrapper _mgt-24px _mgbt-8px _dp-f _alit-ct">
      <button 
        class="bio-button _bdcl-tpr _bgcl-pink" 
        type="button"
        @click="$refs.input.click()"
      >
        <p>Upload</p>
        <div 
          :style="{ width: progressUpload + '%'}"
          class="fill" 
        />
        <fa-icon 
          class="check _cl-white" 
          icon="check"/>
      </button>
    </div>
    <div 
      :class="{'_dp-n': progressUpload >= 0 && progressUpload < 100, '_dp-b': progressUpload === 100}" 
      class="_tal-ct _mgbt-16px _lh-125pct">
      <p>Upload successful</p>
    </div>
  </div>

</template>

<script>
import * as firebase from 'firebase/app'
export default {
  data () {
    return {
      progressUpload: 0,
      // file: File,
      uploadTask: '',
      downloadURL: ''
    }
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
    }
  },
  methods: {
    detectFiles (fileList) {
      Array.from(Array(fileList.length).keys()).map( x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      console.log(file)
      const fileType = file.type.split('/')[1]
      console.log(fileType)
      this.uploadTask = firebase.storage().ref().child(`quiz-cover/${this.orderId}.${fileType}`).put(file)
      this.uploadTask.then(snapshot => {
        snapshot.ref.getDownloadURL().then((url) => {
          this.$emit('url', url)
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  outline: none;
  position: relative;
  transition: 0.25s;
  height: 48px;
  overflow: hidden;
  button {
    outline: none;
    transition: 0.25s;
    width: 50%;
    margin: 0 auto;
    .check {
      display: none;
    }
  }
  .fill {
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #4dc4ff;
    height: 6px;
    transition: 0.25s;
  }
  &.uploading {
    button {
      height: 8px;
      padding: 0px;
      border-radius: 8px;
      width: 75%;
      p {
        display: none;
      }
    }
  }
  &.uploaded {
    button {
      background-color: #4dc4ff;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      p,
      .fill {
        display: none;
      }
      .check {
        display: inline-block;
      }
    }
  }
}
</style>