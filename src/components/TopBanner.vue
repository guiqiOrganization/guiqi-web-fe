<template>
  <div class="top-banner">
    <div class="swiper-page pb40 w100 relative flex">
      <div class="swiper-page-bg relative w100">
        <div class="swiper-page-bgimage w100">
          <img class="head-logo-img w100" :src="`${baseUrl}` + banner" alt />
        </div>
      </div>
      <div class="swiper-page-body absolute pl40 z-index-2" v-if="showcont">
        <p class="swiper-page-title1 fs60 white1">专业的知识，专业的服务</p>
        <p class="swiper-page-title1 fs60 white1">帮你挽回爱情</p>
        <p class="swiper-page-title2 fs32 white1 mt20">
          我们不仅是执行者，更是有思想的策划者
        </p>
        <div class="swiper-page-button mt80" @click.stop="$brdge()">
          <button class="swiper-page-button-btn fs20">了解我们</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopBanner",
  props: {
    banner: {
      type: String,
      default: "statics/images/index/swiper_bg.png"
    },
    showcont: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.top-banner {
  width: 100%;
  background-color: #ffffff;
  .swiper-page {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .swiper-page-bg {
      top: 0;
      left: 0;
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
  }
}
</style>
