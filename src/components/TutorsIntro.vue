<template>
  <div class="tutor">
    <div class="tutor-cont">
      <div class="tutor-title">
        <div class="tutor-title-zh fs30">导师介绍</div>
        <div class="tutor-title-en fs60">Tutor's introduction</div>
      </div>
      <div class="tutor-body">
        <swiper :options="swiperOption" ref="tutorSwiper">
          <swiper-slide>
            <div class="tutor-slide tutor-slide1">
              <div class="tutor-slide-body">
                <div class="tutor-slide-headimage">
                  <img
                    :src="`${baseUrl}statics/images/index/tutor_head1.png`"
                    alt
                  />
                </div>
                <div class="tutor-slide-summary">
                  <div class="tutor-slide-summary-quota">
                    <img
                      :src="`${baseUrl}statics/images/index/tutor_quota.png`"
                      alt
                    />
                  </div>
                  <div class="tutor-slide-summary-name">
                    <p class="tutor-slide-summary-title">吴有栋1</p>
                  </div>
                  <div class="tutor-slide-summary-position">
                    <p class="tutor-slide-summary-title">国家二级心理咨询师</p>
                  </div>
                  <div class="tutor-slide-summary-text">
                    <span
                      >与美国婚姻家庭治疗协会(AAMFT)分会督导师Heather MacLetchie
                      Ehinger(恩格女士)合作，创办美中班，学习美国婚姻家庭治疗实用模型与各种专用治疗方法，不断提升归期咨询师情感技能。与美国婚姻家庭治疗协会(AAMFT)分会督导师Heather
                      MacLetchie
                      Ehinger(恩格女士)合作，创办美中班，学习美国婚姻家庭治疗实用模型与各种专用治疗方法，不断提升归期咨询师情感技能。</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="tutor-slide tutor-slide2 opacity">
              <div class="tutor-slide-body">
                <div class="tutor-slide-headimage">
                  <img
                    :src="`${baseUrl}statics/images/index/tutor_head1.png`"
                    alt
                  />
                </div>
                <div class="tutor-slide-summary">
                  <div class="tutor-slide-summary-quota">
                    <img
                      :src="`${baseUrl}statics/images/index/tutor_quota.png`"
                      alt
                    />
                  </div>
                  <div class="tutor-slide-summary-name">
                    <p class="tutor-slide-summary-title">吴有栋2</p>
                  </div>
                  <div class="tutor-slide-summary-position">
                    <p class="tutor-slide-summary-title">国家二级心理咨询师</p>
                  </div>
                  <div class="tutor-slide-summary-text">
                    <span
                      >与美国婚姻家庭治疗协会(AAMFT)分会督导师Heather MacLetchie
                      Ehinger(恩格女士)合作，创办美中班，学习美国婚姻家庭治疗实用模型与各种专用治疗方法，不断提升归期咨询师情感技能。与美国婚姻家庭治疗协会(AAMFT)分会督导师Heather
                      MacLetchie
                      Ehinger(恩格女士)合作，创办美中班，学习美国婚姻家庭治疗实用模型与各种专用治疗方法，不断提升归期咨询师情感技能。</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="tutor-slide tutor-slide3">
              <div class="tutor-slide-body">
                <div class="tutor-slide-headimage">
                  <img
                    :src="`${baseUrl}statics/images/index/tutor_head1.png`"
                    alt
                  />
                </div>
                <div class="tutor-slide-summary">
                  <div class="tutor-slide-summary-quota">
                    <img
                      :src="`${baseUrl}statics/images/index/tutor_quota.png`"
                      alt
                    />
                  </div>
                  <div class="tutor-slide-summary-name">
                    <p class="tutor-slide-summary-title">吴有栋3</p>
                  </div>
                  <div class="tutor-slide-summary-position">
                    <p class="tutor-slide-summary-title">国家二级心理咨询师</p>
                  </div>
                  <div class="tutor-slide-summary-text">
                    <span
                      >与美国婚姻家庭治疗协会(AAMFT)分会督导师Heather MacLetchie
                      Ehinger(恩格女士)合作，创办美中班，学习美国婚姻家庭治疗实用模型与各种专用治疗方法，不断提升归期咨询师情感技能。与美国婚姻家庭治疗协会(AAMFT)分会督导师Heather
                      MacLetchie
                      Ehinger(恩格女士)合作，创办美中班，学习美国婚姻家庭治疗实用模型与各种专用治疗方法，不断提升归期咨询师情感技能。</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="tutor-slide-left-btn" slot="button-next">
            <img
              :src="`${baseUrl}statics/images/index/tutor_slide_btn.png`"
              alt
            />
          </div>
          <div class="tutor-slide-right-btn" slot="button-prev">
            <img
              :src="`${baseUrl}statics/images/index/tutor_slide_btn.png`"
              alt
            />
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "TutorSlide",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        // freeMode: true,
        loop: true,
        navigation: {
          nextEl: ".tutor-slide-right-btn",
          prevEl: ".tutor-slide-left-btn"
        },
        on: {
          slideChange: this.slideChange
        },
        debugger: true
      },
      currentIndex: 0
    };
  },
  methods: {
    slideChange() {
      if (this.$refs.tutorSwiper.swiper == null) {
        return;
      } else {
        let nodes = document.getElementsByClassName("tutor-slide");
        for (let i = 0; i < nodes.length; i++) {
          if (nodes[i].className.indexOf("opacity") < 0) {
            nodes[i].classList.add("opacity");
          }
        }
        let nodeIndex = this.$refs.tutorSwiper.swiper.realIndex + 1;
        let activeNodes = document.getElementsByClassName(
          "tutor-slide" + nodeIndex.toString()
        );
        for (let j = 0; j < activeNodes.length; j++) {
          if (activeNodes[j].className.indexOf("opacity") > 0) {
            activeNodes[j].classList.remove("opacity");
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tutor {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 0 0px;
  position: relative;
  background-color: #ffffff;
  .tutor-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    position: relative;
    background-color: #f7fbfe;
  }
  .tutor-title {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding: 20px 0px 60px 0px;
    text-align: center;
    height: 160px;
    position: relative;
    .tutor-title-zh {
      width: 100%;
      text-align: center;
      height: 80px;
      line-height: 80px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
    }
    .tutor-title-en {
      width: 100%;
      text-align: center;
      height: 60px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(183, 183, 183, 0.1);
      line-height: 60px;
      position: absolute;
      left: 0;
      top: 20px;
      z-index: 1;
    }
  }
  .tutor-body {
    width: 100%;
    height: auto;
    position: relative;
    .tutor-slide {
      height: auto;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      .tutor-slide-body {
        padding: 85px 20px 20px 53px;
        width: 100%;
        position: relative;
        .tutor-slide-headimage {
          height: auto;
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 9;
          img {
            width: 100%;
          }
        }
        .tutor-slide-summary {
          width: 100%;
          padding: 90px 70px 40px 70px;
          background-color: #ffffff;
          box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.1);
          border-radius: 30px;
          position: relative;
          .tutor-slide-summary-quota {
            width: 105px;
            position: absolute;
            top: 20px;
            right: 40px;
            img {
              width: 100%;
            }
          }
          .tutor-slide-summary-name,
          .tutor-slide-summary-position {
            width: 100%;
            height: 24px;
            line-height: 24px;
            text-align: center;
            color: #232323;
            font-weight: 600;
          }
          .tutor-slide-summary-text {
            padding: 20px 0px 0px 0px;
            width: 100%;
            color: #989898;
            line-height: 24px;
          }
        }
      }
    }
    .tutor-slide-left-btn {
      width: 42px;
      height: 110px;
      background-color: #e3e3e3;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 43px;
      margin-top: -55px;
      z-index: 11;
      opacity: 0.4;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tutor-slide-right-btn {
      width: 42px;
      height: 110px;
      background-color: #e3e3e3;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      right: 43px;
      margin-top: -55px;
      z-index: 11;
      opacity: 0.4;
      img {
        width: 100%;
        height: 100%;
        transform: rotate(180deg);
      }
    }
  }
  .opacity {
    opacity: 0.5;
  }
}
//  小于1280px
@media screen and (max-width: 1280px) {
  .tutor-slide-summary-name,
  .tutor-slide-summary-position {
    font-size: 14px !important;
  }
  .tutor-slide-summary-text {
    font-size: 12px !important;
  }
  .tutor-slide-headimage {
    width: 180px;
  }
  .tutor-slide-summary {
    padding-top: 70px;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .tutor-slide-summary-name,
  .tutor-slide-summary-position {
    font-size: 14px !important;
  }
  .tutor-slide-summary-text {
    font-size: 12px !important;
  }
  .tutor-slide-headimage {
    width: 190px;
  }
  .tutor-slide-summary {
    padding-top: 75px;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .tutor-slide-summary-name,
  .tutor-slide-summary-position {
    font-size: 14px !important;
  }
  .tutor-slide-summary-text {
    font-size: 12px !important;
  }
  .tutor-slide-headimage {
    width: 200px;
  }
  .tutor-slide-summary {
    padding-top: 75px;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .tutor-slide-summary-name,
  .tutor-slide-summary-position {
    font-size: 14px !important;
  }
  .tutor-slide-summary-text {
    font-size: 12px !important;
  }
  .tutor-slide-headimage {
    width: 210px;
  }
  .tutor-slide-summary {
    padding-top: 80px;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .tutor-slide-summary-name,
  .tutor-slide-summary-position {
    font-size: 14px !important;
  }
  .tutor-slide-summary-text {
    font-size: 12px !important;
  }
  .tutor-slide-headimage {
    width: 220px;
  }
  .tutor-slide-summary {
    padding-top: 85px;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .tutor-slide-summary-name,
  .tutor-slide-summary-position {
    font-size: 16px !important;
  }
  .tutor-slide-summary-text {
    font-size: 14px !important;
  }
  .tutor-slide-headimage {
    width: 230px;
  }
  .tutor-slide-summary {
    padding-top: 90px;
  }
}
</style>
