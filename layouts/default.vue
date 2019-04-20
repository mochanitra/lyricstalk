<template>
  <div id="top" class="_ovf-hd">
    <!-- Header -->
    <!-- <div
      id="header" 
      :class="{'has-shadow animate sticky _bgcl-white': $store.state.menuSticky && !$store.state.isMobileMenuActive}" 
      class="_pst-asl _w-100pct">
      <Header/>
    </div>-->
    <!-- Content -->
    <!-- <main 
      :class="{'menu-sticky-active': $store.state.menuSticky}" 
      class="min-height-100vh _dp-f _ovf-hd _pdt-128px">
      <nuxt/>
    </main>-->
    <!-- Header -->
    <div id="header" class="_w-100pct">
      <Header/>
    </div>
    <!-- Content -->
    <main>
      <nuxt/>
    </main>
    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
// import "ant-design-vue/dist/antd.css";
export default {
  components: {
    Header,
    Footer
  },
  created() {
    if (process.browser) {
      this.$store.commit("SET_WIDTH", window.innerWidth);
      window.addEventListener("resize", this.handleResize);
    }
  },
  methods: {
    handleResize() {
      this.$store.commit("SET_WIDTH", window.innerWidth);
      if (window.innerWidth <= 768) {
        this.$store.commit("SET_TABLET", true);
      } else {
        this.$store.commit("SET_TABLET", false);
      }

      if (window.innerWidth <= 576) {
        this.$store.commit("SET_MOBILE", true);
      } else {
        this.$store.commit("SET_MOBILE", false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/variables";

#header {
  z-index: 9;
  background-color: #fbf8f3;
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

p {
  margin-bottom: 0 !important;
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
