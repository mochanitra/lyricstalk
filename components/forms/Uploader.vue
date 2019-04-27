<template>
  <div>
    <input
      ref="input"
      type="file"
      accept="image/*"
      hidden
      @change="detectFiles($event.target.files)"
    >
    <div
      :class="{'uploading': progressUpload > 0 && progressUpload < 100, 'uploaded': progressUpload === 100}"
      class
    >
      <button class="upload-btn" type="button" @click="$refs.input.click()">
        <p>choose picture</p>
        <div :style="{ width: progressUpload + '%'}" class="fill"/>
        <!-- <fa-icon class="check _cl-white" icon="check"/> -->
      </button>
    </div>
    <div :class="{'_dp-n': !isFinish, '_dp-b': isFinish}" class="upload-success">
      <p>Upload successful!</p>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      progressUpload: 0,
      // file: File,
      uploadTask: "",
      downloadURL: "",
      isFinish: false
    };
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on("state_changed", sp => {
        this.progressUpload = Math.floor(
          (sp.bytesTransferred / sp.totalBytes) * 100
        );
      });
    }
  },
  methods: {
    detectFiles(fileList) {
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x]);
      });
    },
    upload(file) {
      console.log(file);
      const fileType = file.type.split("/")[1];
      console.log(fileType);
      let randomNumber = ~~(Math.random() * 1000000);
      this.uploadTask = firebase
        .storage()
        .ref()
        .child(`quiz-cover/${randomNumber}.${fileType}`)
        .put(file);
      this.uploadTask.then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          this.$emit("url", url);
          this.isFinish = true;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/variables";
// .fill {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   background-color: #4dc4ff;
//   height: 6px;
//   transition: 0.25s;
// }
.uploading {
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

.upload-btn {
  width: 160px;
  padding: 5px 15px;
  border-radius: 20px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  background-color: white;
  transition-duration: 0.3s;
  &:hover {
    background-color: $dark-blue;
    p {
      color: white;
    }
    transition-duration: 0.3s;
  }
  p {
    font-family: "Chonburi";
    color: $dark-blue;
    font-size: 12px;
    text-align: center;
  }
}

.upload-success {
  p {
    font-family: "Chonburi";
    color: $green-400;
    font-size: 12px;
    text-align: center;
  }
}
</style>