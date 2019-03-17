<template>
  <div class="hpcont">
    <my-header :currentActive="'ClassicCase'"></my-header>
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
          :banner="'statics/images/case/banner.png'"
          :showcont="false"
        ></top-banner>
        <div class="hp-section8">
          <div class="hp-s8-body w100_m flex">
            <div class="hp-s8-left overhidden">
              <img
                class="hp-s8-l-image w100"
                :src="`${baseUrl}statics/images/case/image1.png`"
                alt
              />
            </div>
            <div class="hp-s8-right">
              <div class="hp-s8-r-title fs36 black3">
                安夏老师，教你轻松搞定心仪的TA我也是大标题
              </div>
              <div class="hp-s8-r-line mt20 mb20"></div>
              <div class="hp-s8-r-detail fs16">
                我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容
              </div>
              <div class="hp-s8-r-btn mt15 fs18" @click.stop="goArticle">
                查看完整文章>>
              </div>
            </div>
          </div>
        </div>
        <div class="hp-section9 w100">
          <div
            class="hp-s9-body flex w100 relative"
            :style="`background:url(${baseUrl}statics/images/case/image2.png)`"
          >
            <div class="hp-s9-cont pt80 flex">
              <div class="hp-s9-c-title w100_m fs36 black3">
                安夏老师，教你轻松搞定心仪的TA
              </div>
              <div class="hp-s9-c-line mt20 mb20"></div>
              <div class="hp-s9-c-article flex relative">
                <div class="hp-s9-c-detail fs18 ">
                  我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容
                </div>
                <div class="hp-s9-c-btn absolute" @click.stop="goArticle">
                  查看完整文章>>
                </div>
              </div>
              <div class="hp-s9-c-photo mt60 w100_m flex">
                <div class="hp-s9-c-pitem overhidden">
                  <img
                    class="hp-s9-cpitem-image w100 "
                    :src="`${baseUrl}statics/images/case/image2.png`"
                    alt
                  />
                </div>
                <div class="hp-s9-c-pitem overhidden">
                  <img
                    class="hp-s9-cpitem-image w100 "
                    :src="`${baseUrl}statics/images/case/image2.png`"
                    alt
                  />
                </div>
                <div class="hp-s9-c-pitem overhidden">
                  <img
                    class="hp-s9-cpitem-image w100 "
                    :src="`${baseUrl}statics/images/case/image2.png`"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hp-section10 w100_m pt40 pl60 pr60 pb100 mb40">
          <div class="hp-s10-body w100_m flex">
            <div
              class="hp-s10-item mt60 p40"
              v-for="(aitem, aidx) in article"
              :key="aidx"
            >
              <div class="hp-s10-i-body w100_m relative">
                <div class="hp-s10-i-image relative w100_m">
                  <img
                    class="hp-s10-i-img absolute"
                    :src="`${baseUrl}` + aitem.image"
                    alt=""
                  />
                </div>
                <div class="hp-s10-i-title mt30 mb10 fs30 black3">
                  {{ aitem.title }}
                </div>
                <div class="hp-s10-i-detail fs16 black2">
                  {{ aitem.detail }}
                </div>
                <div class="hp-s10-i-href fs16 mt60" @click.stop="goArticle">
                  查看全文>>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import MyFooter from "@/components/Footer.vue";
import TopBanner from "@/components/TopBanner.vue";
import article from "@/assets/article.json";
export default {
  name: "ClassicCase",
  components: {
    MyHeader,
    MyFooter,
    TopBanner
  },
  data() {
    return {
      article: article
    };
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(this.article));
  },
  methods: {
    goArticle() {
      this.$router.push({ name: "Article" });
    }
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
      .hp-section8 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0px 80px 0px;
        position: relative;
        .hp-s8-left {
          width: 54%;
          min-width: 54%;
          max-width: 54%;
          border-radius: 8px;
          padding: 0px !important;
          img {
            display: block !important;
            border-radius: 8px;
          }
        }
        .hp-s8-right {
          .hp-s8-r-title {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .hp-s8-r-line {
            width: 50px;
            height: 2px;
            background-color: rgba(186, 85, 168, 1);
          }
          .hp-s8-r-detail {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            color: #484848;
            line-height: 24px;
          }
          .hp-s8-r-btn {
            display: inline-block;
            padding: 0px 24px;
            border: 2px solid rgba(186, 85, 168, 1);
            border-radius: 4px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(188, 82, 169, 1);
            box-sizing: border-box;
          }
        }
      }
      .hp-section9 {
        .hp-s9-body {
          flex-direction: column;
          align-items: center;
          background-repeat: no-repeat;
          background-size: 100% 540px;
          background-position: 0px;
          .hp-s9-cont {
            width: 60%;
            flex-wrap: wrap;
            .hp-s9-c-line {
              width: 50px;
              height: 2px;
              background-color: rgba(186, 85, 168, 1);
            }
            .hp-s9-c-article {
              .hp-s9-c-detail {
                width: 65%;
                color: #484848;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                color: #484848;
                line-height: 24px;
              }
              .hp-s9-c-btn {
                top: 0;
                right: 0;
                display: inline-block;
                padding: 0px 24px;
                border: 2px solid rgba(186, 85, 168, 1);
                border-radius: 4px;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                color: rgba(188, 82, 169, 1);
                box-sizing: border-box;
              }
            }
            .hp-s9-c-photo {
              justify-content: space-between;
              .hp-s9-c-pitem {
                width: 30%;
                border-radius: 8px;
                .hp-s9-cpitem-image {
                  display: block;
                  border-radius: 8px;
                }
              }
            }
          }
        }
      }
      .hp-section10 {
        .hp-s10-body {
          flex-wrap: wrap;
          justify-content: space-between;
          .hp-s10-item {
            width: 29%;
            min-width: 29%;
            max-width: 29%;
            overflow: hidden;
            border-radius: 8px;
            border: 1px solid rgba(249, 233, 252, 1);
            .hp-s10-i-body {
              .hp-s10-i-image {
                height: 0px;
                padding-top: 69.3%;
                overflow: hidden;
                background-color: #cecece;
                .hp-s10-i-img {
                  max-width: 100%;
                  max-height: 100%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              }
              .hp-s10-i-title {
                line-height: 40px;
              }
              .hp-s10-i-detail {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                color: #484848;
                line-height: 24px;
              }
              .hp-s10-i-href {
                font-weight: 500;
                color: rgba(186, 85, 168, 1);
                line-height: 25px;
              }
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
  .hp-section8 {
    width: 90%;
  }
  .hp-s8-right {
    padding: 50px 0px 0px 70px;
  }
  .hp-s8-r-btn {
    height: 48px;
    line-height: 44px;
  }
  .hp-s9-c-btn {
    height: 48px;
    line-height: 44px;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .hp-section11 {
    width: 90%;
  }
  .hp-section8 {
    width: 90%;
  }
  .hp-s8-right {
    padding: 50px 0px 0px 70px;
  }
  .hp-s8-r-btn {
    height: 52px;
    line-height: 48px;
  }
  .hp-s9-c-btn {
    height: 52px;
    line-height: 48px;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .hp-section11 {
    width: 90%;
  }
  .hp-section8 {
    width: 90%;
  }
  .hp-s8-right {
    padding: 60px 0px 0px 70px;
  }
  .hp-s8-r-btn {
    height: 52px;
    line-height: 48px;
  }
  .hp-s9-c-btn {
    height: 52px;
    line-height: 48px;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .hp-section11 {
    width: 90%;
  }
  .hp-section8 {
    width: 90%;
  }
  .hp-s8-right {
    padding: 60px 0px 0px 70px;
  }
  .hp-s8-r-btn {
    height: 56px;
    line-height: 52px;
  }
  .hp-s9-c-btn {
    height: 56px;
    line-height: 52px;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .hp-section11 {
    width: 80%;
  }
  .hp-section8 {
    width: 80%;
  }
  .hp-s8-right {
    padding: 70px 0px 0px 70px;
  }
  .hp-s8-r-btn {
    height: 56px;
    line-height: 52px;
  }
  .hp-s9-c-btn {
    height: 56px;
    line-height: 52px;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .hp-section11 {
    width: 80%;
  }
  .hp-s8-right {
    padding: 80px 0px 0px 70px;
  }
  .hp-section8 {
    width: 80%;
  }
  .hp-s8-r-btn {
    height: 60px;
    line-height: 56px;
  }
  .hp-s9-c-btn {
    height: 60px;
    line-height: 56px;
  }
}
</style>
