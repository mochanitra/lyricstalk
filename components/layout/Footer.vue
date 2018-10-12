<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- Branding, when in mobile stay at bottom -->
        <div class="col-12 col-md-3 _dp-f order-md-first order-last _mgt-32px _mgt-0px-md">
          <div>
            <small>
              All Rights Reserved {{ new Date().getFullYear() }}<br>TCDC Chiang Mai
            </small>
          </div>
        </div>
        <!-- FooterMenu -->
        <nav class="col-12 col-md-9 _dp-f-md _jtfct-spbtw-md">
          <!-- col 1 -->
          <div 
            v-for="(item, i) in $store.state.footerMenu.filter(f => f.title !== 'home')" 
            :key="i">
            <h5 
              class="_ff-dcv _ttf-upc _cl-pink"
              v-html="item.title"/>
            <ul v-if="item.submenu">
              <li 
                v-for="(list, j) in item.submenu" 
                :key="j" 
                class="_pdbt-4px">
                <nuxt-link 
                  :to="localePath(list.path)"
                  class="_cl-white hover-spacing white _ttf-upc"
                  v-html="list.title"/>
              </li>
            </ul>
          </div>
          <!-- Contact -->
          <div>
            <h5 class="_ff-dcv _ttf-upc _cl-pink">Contact Us</h5>
            <div 
              class="contact-container _mxw-256px" 
              v-html="$store.state.pages.contact.acf.contact"/>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';
footer {
  background: $blue-400;
  padding: 64px 0px;
  color: #fff;
  @media (max-width: $md - 1px) {
    padding: 32px 0px;
  }
}
nav {
  h5 {
    text-transform: capitalize;
    @media (max-width: $md - 1px) {
      margin: 16px 0px;
    }
    @media (min-width: $md) {
      margin-bottom: 16px;
    }
  }
}
.contact-container {
  line-height: 150%;
  font-size: 0.9rem;
}
</style>
