<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="social-con">
          <a class="fb-link" target="_blank" href="https://web.facebook.com/lyricstalk/">
            <img src="~/assets/images/brand/fb-logo-2.svg" alt>
          </a>
        </div>
        <img class="logo-footer" src="~/assets/images/brand/logo-white.svg" alt>
        <p>#lyricstalk</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "~assets/styles/variables";
footer {
  position: relative;
  background: $font-black-blue-2;
  padding: 10px 20px 10px 20px;
  color: #fff;
  @media (max-width: $md - 1px) {
    padding: 10px 20px;
  }

  .row {
    align-items: center;
    justify-content: space-between;

    .social-con {
      a {
        background-color: white;
        padding: 8px;
        display: flex;
        flex-flow: row;
        opacity: 0.5;
        border-radius: 50%;
        transition: opacity 0.15s ease-in-out;

        &:hover {
          opacity: 1;
          transition: opacity 0.15s ease-in-out;
        }
        img {
          height: 20px;
          @media (max-width: $screen-xs-max) {
            height: 15px;
          }
        }
      }
    }

    .logo-footer {
      height: 60px;
      @media (max-width: $screen-xs-max) {
        height: 50px;
      }
    }

    p {
      font-family: "Sukhumvit-Bold";
      @media (max-width: $screen-xs-max) {
        font-size: 12px;
      }
    }
  }
}
</style>
