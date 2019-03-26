<template>
  <div class="foot-cont w100">
    <div class="foot-body-top flex w100">
      <div class="fbt-body relative">
        <div class="foot-top-logo">
          <img
            class="foot-top-logo-img"
            :src="`${baseUrl}statics/images/index/foot_logo.png`"
            alt
          />
        </div>
        <div class="foot-top-right absolute flex">
          <div class="ftr-href flex">
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('HomePage')"
            >
              首页
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('EmotionalRecovery')"
            >
              情感挽回
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('MarriageSalvage')"
            >
              婚姻挽回
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('AbruptionMistress')"
            >
              分离第三者
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('LoveSnipe')"
            >
              狙击真爱
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('AboutTeam')"
            >
              团队介绍
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('ClassicCase')"
            >
              经典案例
            </div>
            <div
              class="ftr-href-section w25_m fs16 white1"
              @click.stop="headerRoute('ServiceConcept')"
            >
              服务理念
            </div>
            <div class="ftr-href-section w25_m fs16 white1">服务咨询</div>
            <div class="ftr-href-section w25_m fs16 white1">友情链接</div>
            <div class="ftr-href-section w50_m fs16 white1">
              服务热线：400-0173-520
            </div>
          </div>
          <div class="ftr-qcode flex">
            <div class="foot-top-qcode-item">
              <img
                class="w100"
                :src="`${baseUrl}statics/images/index/foot_qcode1.png`"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-body-bottom flex w100">
      <div class="fbb-body pt10 pb10">
        <span class="foot-bottom-text fs14 white1"
          >公司地址：广州市番禺区小谷围街外环东路280号</span
        >
        <span class="foot-bottom-text fs14 white1"
          >Copyright© guiqi,lnc.All Rights Reserved. 粤ICP备16060296号-1</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    // 头部路由跳转
    headerRoute(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>

<style lang="scss">
.foot-cont {
  width: 100%;
  min-width: 1280px;
  .foot-body-top {
    flex-direction: column;
    align-items: center;
    background-color: #f38181;
    .fbt-body {
      padding: 40px;
      .foot-top-right {
        top: 40px;
        right: 0;
        .ftr-href {
          width: 610px;
          flex-wrap: wrap;
          margin-right: 0px;
          .ftr-href-section {
            line-height: 44px;
          }
        }
        .ftr-qcode {
          .foot-top-qcode-item {
            width: 134px;
            max-width: 134px;
            min-width: 134px;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .foot-body-bottom {
    flex-direction: column;
    align-items: center;
    background-color: #ee6e6e;
    .fbb-body {
      height: 60px;
      line-height: 40px;
      justify-content: center;
      text-align: center;
      .foot-bottom-text {
        padding: 0px 40px;
      }
    }
  }
}

//  小于1280px
@media screen and (max-width: 1280px) {
  .fbt-body {
    width: 80%;
  }
  .fbb-body {
    width: 80%;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .fbt-body {
    width: 80%;
  }
  .fbb-body {
    width: 80%;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .fbt-body {
    width: 80%;
  }
  .fbb-body {
    width: 80%;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .fbt-body {
    width: 70%;
  }
  .fbb-body {
    width: 70%;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .fbt-body {
    width: 70%;
  }
  .fbb-body {
    width: 70%;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .fbt-body {
    width: 60%;
  }
  .fbb-body {
    width: 60%;
  }
}
</style>
