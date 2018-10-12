<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-sm-8 _mgv-48px _bgcl-gray _pdbt-24px _pdt-48px _pdh-48px">
        <h3 class="_ttf-upc _lh-125pct _tal-ct">
          <i class="fal fa-paper-plane _mgr-8px"/>
          <span class="_ff-dcv">Subscribe to our CMDW newsletter</span>
        </h3>
        <p class="_mgv-16px _lh-150pct">
          Capture the worlds of design and creative culture in Chiang Mai. Stay connected with the community of creators from different industries, designers, craftsmen, artists and entrepreneurs and get our latest news.
        </p>
        <!-- Form -->
        <form>
          <float-label>
            <input 
              v-validate="{required: true}" 
              v-model="email"
              :placeholder="`Email Address`"
              maxlength="100"
              type="email"
              name="email">
            <small 
              v-show="errors.has('email')"
              class="_cl-negative" 
            >Please enter email</small>
          </float-label>
        </form>
      </div>
    </div>
  </div>
</template>
