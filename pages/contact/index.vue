<template>
  <div class="_w-100pct">
    <!-- Hero banner -->
    <div 
      v-lazy:background-image="`https://cms.kasisuri.com/wp-content/uploads/2018/10/wheat-PS3HT7C.jpg`" 
      class="_w-100pct bg _bgrp-nrp _bgs-cv _bgpst-ct">
      <div class="container">
        <div class="row _alit-ct _h-512px">
          <div class="col-12 _cl-white _pdt-48px _tal-ct">
            <h1 class="_ff-ds">
              Get in touch!
            </h1>
            <div class="_w-128px _h-1px _bgcl-white _mgh-at _mgv-24px"/>
            <p class="_fs-5 _lh-125pct">For more information please use contact form from the right hand side or Email as below.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.bg {
  position: relative;
  &::after {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50%;
    content: '';
    background: linear-gradient(
      to bottom,
      rgba(40, 40, 40, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
</style>
