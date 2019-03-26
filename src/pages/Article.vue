<template>
  <div class="hpcont">
    <my-header :currentActive="'ClassicCase'"></my-header>
    <div class="hpbody">
      <div class="hpbody-section" style="background:#fafafa !important;">
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
      </div>
      <div class="hpbody-section relative" style="margin:0px 0px 300px 0px;">
        <div class="hp-section12 mt100 relative">
          <div class="hp-s12-bread">
            <div class="hp-s12-bread-item fs18">
              首页><span class="fs18">经典案例</span>
            </div>
          </div>
          <div class="hp-s12-title fs30 t-center mt40 mb40">
            {{ article.title }}
          </div>
          <div class="hp-s12-info flex">
            <span class="hp-s12-info-item fs20 pr40"
              >发布时间：{{ article.date }}</span
            >
            <span class="hp-s12-info-item fs20 pl40"
              >作者：{{ article.author }}</span
            >
          </div>
          <span v-for="(item, index) in article.body" :key="index">
            <div
              class="hp-s12-image w100 mt20 pb20"
              v-if="item.type == 'image'"
            >
              <img
                class="hp-s12-img w100"
                :src="`${baseUrl}${item.centent}`"
                alt
              />
            </div>
            <div v-else class="hp-s12-paragraph fs20 mt20">
              {{ item.centent }}
            </div>
          </span>
          <div class="hp-s12-qcode absolute">
            <div class="hp-s12-qcode-image pt25 pb15">
              <img
                class="w100 pl25 pr25"
                :src="`${baseUrl}statics/images/index/foot_qcode1.png`"
                alt
              />
            </div>
            <div class="hp-s12-qcode-text fs14 t-center">微信扫一扫</div>
            <div class="hp-s12-qcode-text fs14 t-center pb25">
              关注归期公众号
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
export default {
  name: "Article",
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      index: this.$route.query.index ? this.$route.query.index : 0,
      article: null
    };
  },
  created() {
    this.article = require("@/assets/articleDetails.json")[this.index];
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
      .hp-section12 {
        width: 60%;
        padding: 30px 60px;
        border: 1px solid rgba(151, 151, 151, 1);
        .hp-s12-bread {
          .hp-s12-bread-item {
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(186, 85, 168, 1);
            line-height: 24px;
          }
        }
        .hp-s12-title {
        }
        .hp-s12-info {
          justify-content: center;
          border-bottom: 1px solid #979797;
          padding-bottom: 10px;
          .hp-s12-info-item {
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(155, 155, 155, 1);
            line-height: 28px;
          }
        }
        .hp-s12-paragraph {
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(77, 77, 77, 1);
          line-height: 28px;
          text-indent: 40px;
        }
        .hp-s12-qcode {
          width: 140px;
          // padding: 25px;
          border: 1px solid rgba(151, 151, 151, 1);
          top: 0;
          right: -160px;
          img {
            box-sizing: border-box;
          }
          .hp-s12-qcode-text {
            color: #717375;
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
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .hp-section11 {
    width: 90%;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .hp-section11 {
    width: 90%;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .hp-section11 {
    width: 90%;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .hp-section11 {
    width: 80%;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .hp-section11 {
    width: 80%;
  }
}
</style>
