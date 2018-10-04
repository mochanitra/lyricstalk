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
            <span 
              class="_cs-pt" 
              @click="changeLang('th')">TH</span>
            <span 
              class="_cs-pt" 
              @click="changeLang('en')">EN</span>
          </div>
        </div>
        <!-- Menu items -->
        <ul class="nav">
          <li 
            v-for="(item, i) in $store.state.primaryMenu" 
            :key="i" 
            class="_pst-rlt list-title _cs-pt"
          >
            <span
              v-if="item.submenu" 
              class="_ttf-upc">{{ item.title }}</span>
            <nuxt-link
              v-if="!item.submenu" 
              :to="localePath(item.path)"
              class="_ttf-upc">{{ item.title }}</nuxt-link>
            <ul 
              v-if="item.submenu" 
              class="dropdown _pst-asl-md _l-0px">
              <li 
                v-for="(list, j) in item.submenu" 
                :key="j">
                <nuxt-link 
                  :to="localePath(list.path)" 
                  v-html="list.title"/>
              </li>
            </ul>
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
  methods: {
    changeLang (locale) {
      return window.location.href = this.switchLocalePath(locale)
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/styles/variables';

header {
  @media (max-width: $sm) {
    padding: 16px 0px;
  }
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
      top: 64px;
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
  li.list-title {
    @media (min-width: $sm) {
      display: inline-block;
      margin: 0px 16px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
}

.dropdown {
  display: none;
  padding: 12px 16px;
  min-width: 200px;
  @media (min-width: $md) {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  li {
    margin: 12px 0px;
  }
}

.list-title {
  &:hover {
    .dropdown {
      display: block;
    }
  }
}
</style>
