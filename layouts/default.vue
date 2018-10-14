<template>
  <div class="_ovf-hd">
    <!-- Header -->
    <div :class="{'has-shadow animate sticky _bgcl-white': $store.state.menuSticky && !$store.state.isMobileMenuActive}">
      <Header/>
    </div>
    <!-- Content -->
    <main 
      :class="{'menu-sticky-active': $store.state.menuSticky}" 
      class="min-height-100vh _dp-f _alit-ct _ovf-hd">
      <nuxt/>
    </main>
    <!-- Footer -->
    <Footer class="_mgt-64px"/>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  export default {
    components: {
      Header,
      Footer
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    methods: {
      handleScroll() {
        // console.log(window.scrollY)
        if (window.scrollY > 160) {
        this.$store.commit('SET_MENU_STICKY', true)
        } else {
          this.$store.commit('SET_MENU_STICKY', false)
        }
        this.prevY = window.scrollY
      },
    }
  }
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.sticky {
  position: fixed !important;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
}

.has-shadow {
  box-shadow: 0 1px 20px -5px rgba(0, 0, 0, 0.2);
}

.menu-sticky-active {
  padding-top: 100px;
}

.animate {
  animation: 1s slide-down;
}

@keyframes slide-down {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
