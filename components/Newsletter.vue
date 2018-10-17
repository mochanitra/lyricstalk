<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-sm-8 _mgt-48px _bgcl-gray _pdbt-48px _pdt-48px _pdh-48px-sm _pdh-24px">
        <h3 class="_ttf-upc _lh-125pct _tal-ct">
          <i class="fal fa-paper-plane _mgr-8px"/>
          <span>Subscribe to our CMDW newsletter</span>
        </h3>
        <p class="_mgv-16px _lh-150pct">
          Capture the worlds of design and creative culture in Chiang Mai. Stay connected with the community of creators from different industries, designers, craftsmen, artists and entrepreneurs and get our latest news.
        </p>
        <!-- Form -->
        <no-ssr>
          <form class="row no-gutters">
            <float-label class="col-sm-9">
              <input 
                v-validate="{required: true}" 
                v-model="email"
                :placeholder="`Email Address`"
                maxlength="100"
                class="_w-95pct"
                type="email"
                name="email">
              <small 
                v-show="errors.has('email')"
                class="_cl-negative" 
              >Please enter email</small>
            </float-label>
            <!-- Submit button -->
            <div class="col-sm-3">
              <button 
                type="submit" 
                class="bio-button _dp-ilb _ttf-upc -pink _w-100pct _mgt-4px">
                <span>Subscribe</span>
                <i class="fal fa-long-arrow-right"/>
              </button>
            </div>
          </form>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: ''
  })
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.bio-button {
  height: 57px;
  background: transparent;
}
._w-95pct {
  width: 95%;
  @media (max-width: $sm - 1px) {
    width: 100%;
  }
}
</style>
