<template>
  <div class="circle-out">
    <div class="circle-in">
      <p class="number">{{number}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      Type: Number,
      default: 1
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.circle-out {
  height: 50px;
  width: 50px;
  background-color: $dark-blue;
  padding: 5px;
  border-radius: 50%;

  @media (max-width: $screen-xs-max) {
    height: 40px;
    width: 40px;
  }

  .circle-in {
    border: 2px solid white;
    background-color: $dark-blue;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    @media (max-width: $screen-xs-max) {
      height: 30px;
      width: 30px;
    }
    display: flex;
    justify-content: center;

    .number {
      font-family: "Chonburi";
      color: white;
      text-align: center;
      margin: auto 0;
      line-height: 1.6;
      font-size: 24px;
      margin-bottom: 1em !important;
      @media (max-width: $screen-xs-max) {
        font-size: 18px;
      }
    }
  }
}
</style>

