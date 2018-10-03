<template>
  <header class="container">
    <div class="menu-container">
      <!-- Brand -->
      <div id="branding">
        brand
      </div>
      <!-- Menu -->
      <nav :class="{'-show-mobile': $store.state.isMobileMenuActive}">
        <!-- Search + Lang -->
        <div 
          id="extra-bar" 
          class="">
          <!-- Search -->
          <div id="search">
            <i class="fas fa-fw fa-lg fa-search"/>
          </div>
          <!-- favorites -->
          <div 
            id="favorites">
            <span class="fa-stack">
              <i class="fas fa-fw fa-circle fa-stack-2x"/>
              <i class="fal fa-fw fa-heart fa-stack-1x fa-inverse"/>
            </span>
          </div>
          <!-- Lang switcher -->
          <div id="lang-switcher">
            <i class="fas fa-fw fa-globe-asia fa-lg"/>
            <nuxt-link :to="switchLocalePath('th')">TH</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
          </div>
        </div>
        <!-- Menu items -->
        <ul class="nav">
          <li 
            v-for="(item, i) in $store.state.primaryMenu" 
            :key="i" 
          >
            <span class="_ttf-upc">{{ item.title }}</span>
          </li>
        </ul>
      </nav>
      <!-- Hamburger Menu Icon -->
      <Hamburger id="hamburger" />
    </div>
  </header>
</template>

<script>
import Hamburger from '~/components/defaults/Hamburger'
export default {
  components: {
    Hamburger
  },
}
</script>


<style lang="scss" scoped>
@import '~assets/styles/variables';

header {
  padding: 32px 0px;
}

#extra-bar {
  text-align: right;
  > div {
    display: inline-block;
    margin: 0px 8px;
    &:last-child {
      margin: 0px;
    }
  }
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  #hamburger {
    display: none;
  }
  /* Menu Mobile */
  @media (max-width: $sm) {
    /* Show hamburger */
    #hamburger {
      display: block;
    }
    /* Make nav a modal */
    nav {
      visibility: hidden;
      position: absolute;
      width: 100%;
      min-height: 50vh;
      top: 97px;
      left: 0;
      right: 0;
      padding: 12px;
      background: green;
      z-index: 1;
      &.-show-mobile {
        visibility: visible;
      }
    }
  }
}

ul.nav {
  li {
    @media (min-width: $sm) {
      display: inline-block;
      margin: 0px 16px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
}
</style>
