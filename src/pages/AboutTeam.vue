<template>
  <div class="hpcont">
    <my-header :currentActive="'AboutTeam'"></my-header>
    <div class="hpbody">
      <div class="hpbody-section">
        <div class="hp-section11 mt25">
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
        <top-banner
          :banner="'statics/images/team/banner.png'"
          :showcont="false"
        ></top-banner>
        <image-cont
          :bodyclass="'image-body80'"
          :contclass="'top40'"
          :imagehref="'statics/images/team/image1.png'"
        ></image-cont>
        <image-cont
          :bodyclass="'image-body80'"
          :contclass="'mt40'"
          :imagehref="'statics/images/team/image2.png'"
        ></image-cont>
        <div class="hp-section7">
          <div class="hp-pub-title">
            <div class="hp-pub-title-zh fs30">关于我们</div>
            <div class="hp-pub-title-en fs60">Our Stories</div>
          </div>
          <div class="hp-s7-body w100 flex mt20">
            <div
              class="hp-s7-item w50_m pt15 pb15"
              v-for="(titem, tidx) in team"
              :key="tidx"
            >
              <div class="hp-s7-itembody flex">
                <div class="hp-s7-b-image">
                  <img
                    class="hpbody-section-image w100"
                    :src="`${baseUrl}` + titem.photo"
                    alt
                  />
                </div>
                <div class="hp-s7-b-right">
                  <div class="hp-s7-b-name fs24 black2">{{ titem.name }}</div>
                  <div
                    v-html="titem.title"
                    class="hp-s7-b-advantage black2"
                  ></div>
                  <div
                    v-html="titem.advantage"
                    class="hp-s7-b-advantage black2"
                  ></div>
                  <div class="hp-s7-b-btn white1" @click.stop="$brdge()">
                    咨询导师
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <image-cont
          :bodyclass="'image-body100'"
          :contclass="'pb40'"
          :imagehref="'statics/images/team/image3.png'"
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
import team from "@/assets/team.json";
export default {
  name: "AboutTeam",
  components: {
    MyHeader,
    MyFooter,
    TopBanner,
    ImageCont
  },
  data() {
    return {
      team: team
    };
  },
  mounted() {}
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
      .hp-section11 {
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
      .hp-section7 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0px 80px 0px;
        position: relative;
        .hp-pub-title {
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          padding: 20px 0px;
          text-align: center;
          height: 120px;
          position: relative;
          .hp-pub-title-zh {
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
          .hp-pub-title-en {
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
        .hp-s7-body {
          flex-wrap: wrap;
          .hp-s7-item {
            .hp-s7-itembody {
              width: calc(100% - 36px);
              border-radius: 8px;
              border: 2px solid rgba(237, 237, 237, 1);
              .hp-s7-b-image {
                width: 38.5%;
                min-width: 38.5%;
                max-width: 38.5%;
                .hpbody-section-image {
                  display: block;
                }
              }
              .hp-s7-b-right {
                .hp-s7-b-title {
                  line-height: 40px;
                  font-family: PingFangSC-Regular;
                }
                .hp-s7-b-advantage {
                  line-height: 24px;
                  font-family: PingFangSC-Regular;
                }
                .hp-s7-b-btn {
                  display: inline-block;

                  font-family: PingFangSC-Medium;

                  background-color: rgba(186, 198, 255, 1);
                }
              }
            }
          }
          .hp-s7-item:nth-child(even) {
            .hp-s7-itembody {
              margin-left: 36px;
            }
          }
        }
      }
    }
  }
}
//  小于1280px
@media screen and (max-width: 1280px) {
  .hp-section11 {
    width: 90%;
  }
  .hp-section7 {
    width: 90%;
  }
  .hp-s7-b-right {
    padding: 10px 24px 0px 32px;
  }
  .hp-s7-b-title {
    font-size: 14px;
  }
  .hp-s7-b-advantage {
    font-size: 14px;
  }
  .hp-s7-b-btn {
    padding: 0px 52px;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    font-size: 14px;
    margin-top: 20px;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .hp-section11 {
    width: 90%;
  }
  .hp-section7 {
    width: 90%;
  }
  .hp-s7-b-right {
    padding: 10px 24px 0px 32px;
  }
  .hp-s7-b-title {
    font-size: 14px;
  }
  .hp-s7-b-advantage {
    font-size: 14px;
  }
  .hp-s7-b-btn {
    padding: 0px 52px;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    font-size: 14px;
    margin-top: 20px;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .hp-section11 {
    width: 90% !important;
  }
  .hp-section7 {
    width: 90%;
  }
  .hp-s7-b-right {
    padding: 15px 24px 0px 32px;
  }
  .hp-s7-b-title {
    font-size: 16px;
  }
  .hp-s7-b-advantage {
    font-size: 16px;
  }
  .hp-s7-b-btn {
    padding: 0px 52px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    font-size: 16px;
    margin-top: 28px;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .hp-section11 {
    width: 90% !important;
  }
  .hp-section7 {
    width: 90%;
  }
  .hp-s7-b-right {
    padding: 20px 24px 0px 32px;
  }
  .hp-s7-b-title {
    font-size: 16px;
  }
  .hp-s7-b-advantage {
    font-size: 16px;
  }
  .hp-s7-b-btn {
    padding: 0px 56px;
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
    font-size: 18px;
    margin-top: 32px;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .hp-section11 {
    width: 80% !important;
  }
  .hp-section7 {
    width: 80%;
  }
  .hp-s7-b-right {
    padding: 25px 24px 0px 32px;
  }
  .hp-s7-b-title {
    font-size: 18px;
  }
  .hp-s7-b-advantage {
    font-size: 18px;
  }
  .hp-s7-b-btn {
    padding: 0px 60px;
    height: 48px;
    line-height: 48px;
    border-radius: 24px;
    font-size: 18px;
    margin-top: 40px;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .hp-section11 {
    width: 80% !important;
  }
  .hp-section7 {
    width: 80%;
  }
  .hp-s7-b-right {
    padding: 30px 24px 0px 32px;
  }
  .hp-s7-b-title {
    font-size: 20px;
  }
  .hp-s7-b-advantage {
    font-size: 20px;
  }
  .hp-s7-b-btn {
    padding: 0px 64px;
    height: 52px;
    line-height: 52px;
    border-radius: 26px;
    font-size: 20px;
    margin-top: 50px;
  }
}
</style>
