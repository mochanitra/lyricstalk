<template>
  <header class ="container">

    <div class="row _pdv-12px _alit-ct">

      <div class="col-6">
        <img class="_h-64px _cs-pt" src="~/assets/images/logo.png">
      </div>

      <div class="col-2 _dp-f _fdrt-cl _alit-ct">
        <nuxt-link to="/">home</nuxt-link>
      </div>

      <div class="col-2 _dp-f _fdrt-cl _alit-ct">
        <nuxt-link to="/question-list">question list</nuxt-link>
      </div>

      <div class="col-2 _dp-f _fdrt-cl _alit-ct">
        <nuxt-link to="/feed">feed</nuxt-link>
      </div>

    </div>

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
  min-width: 240px;
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
      background: $red-400;
      &::before {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $red-400 transparent;
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
