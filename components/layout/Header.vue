<template>
  <header class="container">
    <div class="menu-container">
      <!-- Brand -->
      <nuxt-link 
        id="branding" 
        :to="localePath('index')"
        class="_w-256px">
        <div 
          v-lazy:background-image="require('assets/images/brand/logo_header.png')" 
          class="_w-256px _bgs-ct _bgrp-nrp _h-64px"/>
      </nuxt-link>
      <!-- Menu -->
      <nav 
        :class="{'-show-mobile': $store.state.isMobileMenuActive}" 
        class="_ff-dcv _dp-f _fdrt-cl _jtfct-spbtw _h-64px">
        <!-- Search + Lang -->
        <div 
          id="extra-bar" 
        >
          <!-- Search -->
          <div id="search">
            <i class="fas fa-fw fa-lg fa-search"/>
          </div>
          <!-- favorites -->
          <div 
            id="favorites">
            <span class="fa-stack fa-xs">
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
            <div
              v-if="item.submenu" 
              class="_ttf-upc">
              <!-- Icon -->
              <i class="fal fa-home fa-fw fa-sm"/>
              <span 
                class="_pst-rlt _t-2px _ttf-upc" 
                v-html="item.title"/>
            </div>
            <!-- <nuxt-link
              v-if="!item.submenu" 
              :to="localePath(item.path)"
              class="_ttf-upc">{{ item.title }}</nuxt-link> -->
            <div 
              v-if="item.submenu" 
              class="dropdown _pst-asl-md">
              <ul>
                <li 
                  v-for="(list, j) in item.submenu" 
                  :key="j"
                  class="_ttf-upc">
                  <nuxt-link 
                    :to="localePath(list.path)" 
                    class="_cl-white hover-spacing"
                    v-html="list.title"/>
                </li>
              </ul>
            </div>
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
      padding: 0px 16px;
      &:last-child {
        padding-right: 0px;
      }
    }
  }
}

.dropdown {
  display: none;
  min-width: 200px;
  @media (min-width: $md) {
    padding-top: 24px;
    left: calc(50% - 100px);
    ul {
      padding: 12px 16px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      position: relative;
      z-index: 9;
      background: $pink-400;
      &::before {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $pink-400 transparent;
        content: '';
        position: absolute;
        top: -10px;
        left: calc(50% - 5px);
      }
    }
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
