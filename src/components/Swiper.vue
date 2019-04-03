<template>
  <div class="swiper w100">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <swiper-slide>
        <div class="swiper-page pb40 w100 relative flex">
          <div class="swiper-page-bg relative w100">
            <div class="swiper-page-bgimage w100">
              <img
                class="head-logo-img w100"
                :src="`${baseUrl}statics/images/index/swiper_bg.png`"
                alt
              />
            </div>
            <div class="swiper-page-wave w100 absolute overhidden">
              <img
                class="head-logo-img"
                :src="`${baseUrl}statics/images/index/white_wave.png`"
                alt
              />
            </div>
          </div>
          <div class="swiper-page-body absolute pl40 z-index-2">
            <p class="swiper-page-title1 fs60 white1">专业的知识，专业的服务</p>
            <p class="swiper-page-title1 fs60 white1">帮你挽回爱情</p>
            <p class="swiper-page-title2 fs32 white1 mt20">
              我们不仅是执行者，更是有思想的策划者
            </p>
            <div class="swiper-page-button mt80">
              <button class="swiper-page-button-btn">了解我们</button>
            </div>
          </div>
          <div class="swiper-page-qcode absolute">
            <img
              :src="`${baseUrl}statics/images/index/colorful_qcode.png`"
              alt
            />
          </div>
        </div>
      </swiper-slide> -->
      <swiper-slide>
        <div class="swiper-page pb40 w100 relative flex">
          <div class="swiper-page-bg relative w100">
            <div class="swiper-page-bgimage w100">
              <img
                class="head-logo-img w100"
                :src="`${baseUrl}statics/images/index/banner_01.jpg`"
                alt
              />
            </div>
            <div class="swiper-page-wave w100 absolute overhidden">
              <img
                class="head-logo-img"
                :src="`${baseUrl}statics/images/index/white_wave.png`"
                alt
              />
            </div>
          </div>
          <!-- <div class="swiper-page-body absolute pl40 z-index-2">
            <p class="swiper-page-title1 fs60 white1">专业的知识，专业的服务</p>
            <p class="swiper-page-title1 fs60 white1">帮你挽回爱情</p>
            <p class="swiper-page-title2 fs32 white1 mt20">
              我们不仅是执行者，更是有思想的策划者
            </p>
            <div class="swiper-page-button mt80">
              <button class="swiper-page-button-btn">了解我们</button>
            </div>
          </div> -->
          <div class="swiper-page-qcode absolute">
            <img
              :src="`${baseUrl}statics/images/index/colorful_qcode.png`"
              alt
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-page pb40 w100 relative flex">
          <div class="swiper-page-bg relative w100">
            <div class="swiper-page-bgimage w100">
              <img
                class="head-logo-img w100"
                :src="`${baseUrl}statics/images/index/banner_02.jpg`"
                alt
              />
            </div>
            <div class="swiper-page-wave w100 absolute overhidden">
              <img
                class="head-logo-img"
                :src="`${baseUrl}statics/images/index/white_wave.png`"
                alt
              />
            </div>
          </div>
          <!-- <div class="swiper-page-body absolute pl40 z-index-2">
            <p class="swiper-page-title1 fs60 white1">专业的知识，专业的服务</p>
            <p class="swiper-page-title1 fs60 white1">帮你挽回爱情</p>
            <p class="swiper-page-title2 fs32 white1 mt20">
              我们不仅是执行者，更是有思想的策划者
            </p>
            <div class="swiper-page-button mt80">
              <button class="swiper-page-button-btn fs20">了解我们</button>
            </div>
          </div> -->
          <div class="swiper-page-qcode absolute">
            <img
              :src="`${baseUrl}statics/images/index/colorful_qcode.png`"
              alt
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-page pb40 w100 relative flex">
          <div class="swiper-page-bg relative w100">
            <div class="swiper-page-bgimage w100">
              <img
                class="head-logo-img w100"
                :src="`${baseUrl}statics/images/index/banner_03.jpg`"
                alt
              />
            </div>
            <div class="swiper-page-wave w100 absolute overhidden">
              <img
                class="head-logo-img"
                :src="`${baseUrl}statics/images/index/white_wave.png`"
                alt
              />
            </div>
          </div>
          <div class="swiper-page-qcode absolute">
            <img
              :src="`${baseUrl}statics/images/index/colorful_qcode.png`"
              alt
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {}
    };
  }
};
</script>

<style lang="scss">
.swiper {
  background-color: #ffffff;
  max-width: 1920px;
  .swiper-page {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .swiper-page-bg {
      top: 0;
      left: 0;
      .swiper-page-wave {
        left: 0;
        bottom: 0;
        transform: translate(0, 60%);
        .head-logo-img {
          width: 101% !important;
        }
      }
    }
    .swiper-page-body {
      width: 80%;
      top: 40%;
      transform: translate(0, -50%);
      .swiper-page-button {
        width: 200px;
        height: 40px;
        .swiper-page-button-btn {
          outline: none;
          border: none;
          background-color: #ffd79c;
          height: 40px;
          border-radius: 30px;
          color: #895122;
          font-size: 20px;
          text-align: center;
          padding: 0px 40px;
          box-shadow: 3px 18px 30px 0px rgba(0, 0, 0, 0.3);
        }
      }
    }
    .swiper-page-qcode {
      width: 94px;
      height: 94px;
      bottom: 30px;
      left: 50%;
      margin-left: -47px;
      border-radius: 100%;
      background-color: #ffffff;
      position: absolute;
      z-index: 3;
      padding: 10px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
      img {
        width: 70%;
        height: 70%;
        margin: 15%;
      }
    }
    .swiper-page-qcode:hover {
      width: 134px;
      height: 134px;
      margin-left: -67px;
      bottom: 10px;
    }
  }
}
//  小于1280px
@media screen and (max-width: 1280px) {
  .swiper-page-body {
    min-width: 1200px;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .swiper-page-body {
    min-width: 1200px;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .swiper-page-body {
    min-width: 1280px;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .swiper-page-body {
    min-width: 1366px;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .swiper-page-body {
    min-width: 1440px;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .swiper-page-body {
    min-width: 1680px;
  }
}
</style>
