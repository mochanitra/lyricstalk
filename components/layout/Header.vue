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
        class="_dp-f _fdrt-cl _h-72px _jtfct-spbtw">
        <!-- Search + Lang -->
        <div 
          id="extra-bar"
          class="order-last order-md-first _tal-ct _tal-r-md _pdt-8px _pdbt-12px _pdv-0px-md _dp-f _dp-b-md _jtfct-spbtw _alit-ct"
        >
          <!-- Search -->
          <div 
            id="search" 
            class="_f-1 _dp-f _dp-ilb-md _cs-pt"
            @click="$store.commit('SET_SEARCH_MODAL_ACTIVE', !$store.state.isSearchModalActive)">
            <i class="fas fa-fw fa-lg fa-search _fs-3 _fs-4-md"/>
          </div>
          <!-- favorites -->
          <div 
            id="favorites" 
            class="_f-1 order-last order-md-first _dp-f _dp-ilb-md _jtfct-fe _alit-ct">
            <FavoriteButton />
            <span class="_pdl-2px _cl-pink">3</span>
          </div>
          <!-- Lang switcher -->
          <div 
            id="lang-switcher" 
            class="_ff-dcv"
          >
            <span 
              :class="{'-active': $store.state.i18n.locale === 'th'}"
              class="_cs-pt _fs-4 _fs-5-md hover-spacing" 
              @click="changeLang('th')">ไทย</span>
            <!-- Border -->
            <div class="_dp-ilb">/</div>
            <span 
              :class="{'-active': $store.state.i18n.locale === 'en'}"
              class="_cs-pt _fs-4 _fs-5-md hover-spacing" 
              @click="changeLang('en')">EN</span>
          </div>
        </div>
        <!-- Menu items -->
        <ul class="nav _tal-ct _tal-l-md">
          <li 
            v-for="(item, i) in $store.state.primaryMenu" 
            :key="i" 
            class="_pst-rlt list-title _cs-pt"
          >
            <div
              class="_ttf-upc _pdt-16px _pdbt-8px _pdv-0px-md title">
              <!-- Icon -->
              <div v-if="item.submenu">
                <i 
                  :class="item.icon" 
                  class="fa-fw fa-md"/>
                <span 
                  class="_pst-rlt _t-2px _ttf-upc _ff-dcv" 
                  v-html="item.title"/>
              </div>
              <nuxt-link
                v-else
                :to="localePath(item.path)">
                <i 
                  :class="item.icon" 
                  class="fa-fw fa-md _cl-blue"/>
                <span 
                  class="_pst-rlt _t-2px _ttf-upc _ff-dcv _cl-blue" 
                  v-html="item.title"/></nuxt-link>
            </div>
            <div 
              v-if="item.submenu" 
              class="dropdown _pst-asl-md">
              <!-- [Mobile only] Down arrow -->
              <div class="_dp-b _dp-n-md">
                <i class="fal fa-long-arrow-down fa-2x _cl-pink"/>
              </div>
              <ul>
                <li 
                  v-for="(list, j) in item.submenu" 
                  :key="j"
                  class="_ttf-upc">
                  <nuxt-link 
                    :to="localePath(list.path)" 
                    class="_cl-white-md _cl-pink hover-spacing _dp-ilb _dp-b-md _fs-4 _fs-5-md _ff-dcv"
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
    <!-- Search Modal -->
    <SearchModal />
  </header>
</template>

<script>
import FavoriteButton from '~/components/FavoriteButton'
import Hamburger from '~/components/defaults/Hamburger'
import SearchModal from '~/components/modals/Search'
export default {
  components: {
    FavoriteButton,
    Hamburger,
    SearchModal
  },
  watch: {
    '$store.state.isSearchModalActive' (val) {
      if (val) {
        this.$modal.show('search')
      } else {
        this.$modal.hide('search')
      }
    }
  },
  methods: {
    changeLang (locale) {
      return window.location.href = this.switchLocalePath(locale)
    }
  },
}
</script>


<style lang="scss" scoped>
@import '~assets/styles/variables';

#lang-switcher {
  > span {
    margin-right: 4px;
    margin-left: 4px;
  }
}

header {
  @media (max-width: $sm) {
    padding: 16px 0px;
  }
  padding: 18px 0px;
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
  @media (max-width: $md - 1px) {
    /* Show hamburger */
    #hamburger {
      display: block;
    }
    /* Make nav a modal */
    nav {
      user-select: none !important;
      transition: opacity 0.5s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      position: absolute;
      width: 100%;
      min-height: calc(90vh - 90px);
      top: 90px;
      left: 0;
      right: 0;
      padding: 12px;
      background: #fff;
      z-index: 1;
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
      &.-show-mobile {
        visibility: visible;
        opacity: 1;
        height: auto;
      }
    }
  }
}

ul.nav {
  li.list-title {
    @media (min-width: $md) {
      display: inline-block;
      padding: 0px 16px;
      .title {
        font-size: 120%;
      }
      &:last-child {
        padding-right: 0px;
      }
    }
    @media (max-width: $md - 1px) {
      .title {
        font-size: 175%;
      }
    }
  }
}

.dropdown {
  user-select: none !important;
  outline: none !important;
  visibility: hidden;
  opacity: 0;
  transition: height 0.5s, visibility 0s,
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  height: 0;
  overflow: hidden;
  min-width: 200px;
  z-index: 9;
  position: relative;
  @media (max-width: $md - 1px) {
    &::before {
      content: '';
    }
    transition-delay: 0.2s;
  }
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
    margin: 12px 0px 12px 0px;
  }
}

.list-title {
  &:hover {
    .dropdown {
      visibility: visible;
      opacity: 1;
      height: auto;
      user-select: none !important;
      outline: none !important;
    }
  }
}
</style>
