<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- Branding, when in mobile stay at bottom -->
        <div class="col-12 col-md-4 _dp-f order-md-first order-last">
          <div>
            <small>
              All Rights Reserved {{ new Date().getFullYear() }}<br>TCDC Chiang Mai
            </small>
          </div>
        </div>
        <!-- FooterMenu -->
        <nav class="col-12 col-md-8 _dp-f-md _jtfct-spbtw-md">
          <!-- col 1 -->
          <div 
            v-for="(item, i) in $store.state.footerMenu" 
            :key="i">
            <h5 
              v-html="item.title"/>
            <ul v-if="item.submenu">
              <li 
                v-for="(list, j) in item.submenu" 
                :key="j">
                <span class="_ttf-cptl">
                  {{ list.title }}
                </span>
              </li>
            </ul>
          </div>
          <!-- Contact -->
          <div>
            <h5>Contact Us</h5>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';
footer {
  background: black;
  padding: 64px 0px;
  color: #fff;
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
</style>
