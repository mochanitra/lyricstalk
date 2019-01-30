<template>
  <div 
    id="top" 
    class="_ovf-hd">
    <!-- Header -->
    <div
      id="header" 
      :class="{'has-shadow animate sticky _bgcl-white': $store.state.menuSticky && !$store.state.isMobileMenuActive}" 
      class="_pst-asl _w-100pct">
      <Header/>
    </div>
    <!-- Content -->
    <main 
      :class="{'menu-sticky-active': $store.state.menuSticky}" 
      class="min-height-100vh _dp-f _ovf-hd _pdt-128px">
      <nuxt/>
    </main>
    <!-- Footer -->
    <Footer class="_mgt-32px"/>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  export default {
    components: {
      Header,
      Footer,
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
        this.$store.commit('SET_MENU_STICKY', true);
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

#header {
  z-index: 9;
  background-color: #FBF8F3;
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
