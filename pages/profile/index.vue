<template>
  <div>
    <div>
      <button @click="signOut()" class="red-btn-out">
        <div class="btn-in">
          <p>Log out</p>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import * as FBSE from "~/services/auth";
export default {
  data: () => ({}),
  methods: {
    signOut() {
      let fb = FBSE.facebookSignOut();
      fb.then(() => {
        // Sign-out successful.
        this.$store.commit("SET_AUTH", null);
        this.user = { photoURL: null };
        return this.$router.push({
          path: "/"
        });
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
div {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.red-btn-out {
  margin: 10px auto;
  cursor: pointer;
  padding: 6px;
  width: 240px;
  height: 60px;
  background-color: $line-red;
  border-radius: 40px;
  border: none;
  transition-duration: 0.3s;
  &:hover {
    background-color: $line-red;
    transition-duration: 0.3s;

    .btn-in {
      background-color: $line-red;
      transition-duration: 0.3s;
    }
  }
  .btn-in {
    border: 2px solid white;
    background-color: $line-red;
    height: 48px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;
    p {
      font-family: "Chonburi";
      color: white;
      font-size: 28px;
      line-height: 1;
    }
  }
}
</style>
