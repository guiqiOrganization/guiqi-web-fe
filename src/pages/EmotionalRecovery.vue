<template>
  <div class="hpcont">
    <my-header :currentActive="'EmotionalRecovery'"></my-header>
    <div class="hpbody">
      <div class="hpbody-section">
        <top-banner></top-banner>
      </div>
      <div class="hpbody-section">
        <div class="hp-section1">
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">严格的保密协议</p>
              <p class="hp-s1-item-text2 fs14">客户资料信息完全保密</p>
            </div>
          </div>
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">高效的服务体系</p>
              <p class="hp-s1-item-text2 fs14">24小时紧急联系指导</p>
            </div>
          </div>
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">专业的导师团队</p>
              <p class="hp-s1-item-text2 fs14">官方认证心理咨询师</p>
            </div>
          </div>
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">放心的用户保障</p>
              <p class="hp-s1-item-text2 fs14">合同制全程受法律保护</p>
            </div>
          </div>
        </div>
        <image-cont
          :bodyclass="'image-body86'"
          :contclass="'top40'"
          :imagehref="'statics/images/emotional/image1.png'"
        ></image-cont>
        <image-cont
          :bodyclass="'image-body30'"
          :contclass="'p40'"
          :imagehref="'statics/images/emotional/imagebtn1.png'"
        ></image-cont>
        <image-cont
          :bodyclass="'image-body100'"
          :contclass="'pt40'"
          :imagehref="'statics/images/emotional/image2.png'"
        ></image-cont>
        <image-cont
          :bodyclass="'image-body100'"
          :contclass="'pt40'"
          :imagehref="'statics/images/emotional/image3.png'"
        ></image-cont>
        <image-cont
          :bodyclass="'image-body30'"
          :contclass="'pt40 pb80'"
          :imagehref="'statics/images/emotional/imagebtn2.png'"
        ></image-cont>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import MyFooter from "@/components/Footer.vue";
import TopBanner from "@/components/TopBanner.vue";
import ImageCont from "@/components/ImageCont.vue";

export default {
  name: "EmotionalRecovery",
  components: {
    MyHeader,
    MyFooter,
    TopBanner,
    ImageCont
  }
};
</script>

<style lang="scss">
.hpcont {
  .hpbody {
    .hpbody-section {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .hp-section1 {
        display: flex;
        padding: 10px 0px 40px 0px;
        position: relative;
        .hp-s1-item {
          width: 25%;
          max-width: 25%;
          min-width: 25%;
          box-sizing: border-box;
          padding: 0px 40px;
          display: flex;
          .hp-s1-item-icon {
            width: 80px;
            min-width: 80px;
            max-width: 80px;
            height: 60px;
            padding: 0px 20px 0px 0px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .hp-s1-item-title {
            height: 60px;
            padding: 5px 0px;
            .hp-s1-item-text1 {
              height: 24px;
              line-height: 24px;
              width: 126px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(82, 82, 82, 1);
            }
            .hp-s1-item-text2 {
              height: 16px;
              line-height: 16px;
              margin-top: 6px;
              width: 140px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(82, 82, 82, 1);
            }
          }
        }
      }
      .hp-section1::before {
        content: "";
        display: block;
        height: 1px;
        background-color: #cfd3fe;
        width: 90%;
        left: 40px;
        bottom: 5px;
        position: absolute;
      }
      .hpbody-section-imgcont {
        width: 100%;
        height: auto;
        overflow: hidden;
        .hpbody-section-image {
          width: 100%;
        }
      }
    }
    .hs-mt60 {
      margin-top: 60px;
    }
  }
}
//  小于1280px
@media screen and (max-width: 1280px) {
  .hp-section1 {
    width: 90%;
  }
  .hp-section1::before {
    width: 93% !important;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .hp-section1 {
    width: 90%;
  }
  .hp-section1::before {
    width: 92% !important;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .hp-section1 {
    width: 90% !important;
  }
  .hp-section1::before {
    width: 92% !important;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .hp-section1 {
    width: 90% !important;
  }
  .hp-section1::before {
    width: 91% !important;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .hp-section1 {
    width: 80% !important;
  }
  .hp-section1::before {
    width: 90% !important;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .hp-section1 {
    width: 80% !important;
  }
  .hp-section1::before {
    width: 90% !important;
  }
}
</style>
