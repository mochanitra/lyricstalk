<template>
  <div class="instruction-page">
    <div class="header-bg">
      <div class="header">
        <h1>group feat</h1>
      </div>
    </div>
    <div class="mode-bg">
      <div class="mode-con">
        <h4>have you ever ... ?</h4>
        <img src="~/assets/images/decoration/music_tab.svg" alt>
      </div>
    </div>
    <div class="instruction-bg">
      <div class="instruction-con">
        <slick :is="slickComp" ref="slick" :options="slickOptions">
          <a href="http://placehold.it/320x120">
            <img src="http://placehold.it/320x120" alt>
          </a>
          <a href="http://placehold.it/420x220">
            <img src="http://placehold.it/420x220" alt>
          </a>
          <a href="http://placehold.it/420x220">
            <img src="http://placehold.it/420x220" alt>
          </a>
        </slick>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "assets/styles/variables";
.header-bg {
  width: 100%;
  background: linear-gradient(
    to left,
    $ci-white 0%,
    $ci-white 50%,
    $smoker-red 50%,
    $smoker-red 100%
  );
  .header {
    background-color: $smoke-red;
    padding: 20px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    h1 {
      font-family: "RunWild";
      text-align: center;
      color: white;
      font-size: 48px;

      span {
        padding-left: 120px;
      }
    }
  }
}

.mode-bg {
  background: linear-gradient(
    to right,
    $light-red 0%,
    $light-red 50%,
    $smoke-red 50%,
    $smoke-red 100%
  );
  background-color: $smoke-red;
  .mode-con {
    background-color: $smoker-red;
    padding: 10px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;

    h4 {
      font-family: "Chonburi";
      color: $ci-white;
      font-size: 28px;
      margin-bottom: 10px;
      @media (max-width: $screen-sm-max) {
        font-size: 32px;
      }
      @media (max-width: $screen-xs-max) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }

    img {
      width: 30%;
    }
  }
}
</style>
