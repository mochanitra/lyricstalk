<template>
  <div class="_w-100pct">
    <!-- Hero -->
    <div class="container-fluid">
      <div class="row _mnh-512px">
        <div 
          v-lazy:background="`https://placeimg.com/640/480/any`" 
          class="col-12 col-md-7 _bgs-cv"/>
        <div class="col-md-5 col-12 _dp-f _alit-ct _jtfct-ct _pdh-48px-md _pdh-24px">
          <div>
            <h6 class="_ttf-upc">hilights of cmdw18</h6>
            <h1 class="_mgt-16px _ttf-upc">flower in the vase</h1>
            <h4 class="_mgt-16px _ttf-upc">above the surface of the earth</h4>
            <p class="_mgt-16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus odit reiciendis, ad facere rerum.</p>
            <!-- All programmes -->
            <nuxt-link 
              :to="localePath('programmes')" 
              class="_mgt-16px bio-button _dp-ilb _ttf-upc">all programmes</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Hilights -->
    <div id="hilights">
      <div class="container">
        <div class="row">
          <div class="col">
            x
          </div>
          <div class="col">
            x
          </div>
          <div class="col">
            x
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const obj = {
      foo: {
        bar: {
          baz: 42,
        },
      },
    };

    const baz = obj?.foo?.bar?.baz // 42
    console.log(baz)
  }
}
</script>

<style lang="scss" scoped>
</style>
