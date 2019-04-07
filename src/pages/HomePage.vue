<template>
  <div class="hpcont">
    <my-header :currentActive="'HomePage'"></my-header>
    <div class="hpbody">
      <div class="hpbody-section">
        <my-swiper></my-swiper>
      </div>
      <div class="hpbody-section">
        <div class="hp-section1">
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon_1.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">严格的保密协议</p>
              <p class="hp-s1-item-text2 fs14">客户资料信息完全保密</p>
            </div>
          </div>
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon_2.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">高效的服务体系</p>
              <p class="hp-s1-item-text2 fs14">24小时紧急联系指导</p>
            </div>
          </div>
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon_3.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">专业的导师团队</p>
              <p class="hp-s1-item-text2 fs14">官方认证心理咨询师</p>
            </div>
          </div>
          <div class="hp-s1-item">
            <div class="hp-s1-item-icon">
              <img :src="`${baseUrl}statics/images/index/s1_icon_4.png`" alt />
            </div>
            <div class="hp-s1-item-title">
              <p class="hp-s1-item-text1 fs18">放心的用户保障</p>
              <p class="hp-s1-item-text2 fs14">合同制全程受法律保护</p>
            </div>
          </div>
        </div>
        <div class="hp-section2">
          <div class="hp-pub-title">
            <div class="hp-pub-title-zh fs30">服务项目</div>
            <div class="hp-pub-title-en fs60">Service Items</div>
          </div>
          <div class="hp-s2-body">
            <div class="hp-s2-item">
              <div class="hp-s2-item-icon">
                <img :src="`${baseUrl}statics/images/index/s2_icon1.png`" alt />
              </div>
              <div class="hp-s2-item-title fs20">爱情挽回</div>
              <div class="hp-s2-item-text fs14">
                关系降格、复联破冰、印象重建、引导投资、二次吸引、长期关系维护
              </div>
            </div>
            <div class="hp-s2-item">
              <div class="hp-s2-item-icon">
                <img :src="`${baseUrl}statics/images/index/s2_icon2.png`" alt />
              </div>
              <div class="hp-s2-item-title fs20">婚姻挽回</div>
              <div class="hp-s2-item-text fs14">
                根源问题剖析、吸引力提升法则、核心姿态扭转、正确沟通方式、两性思维差异解析、解决婆媳矛盾
              </div>
            </div>
            <div class="hp-s2-item">
              <div class="hp-s2-item-icon">
                <img :src="`${baseUrl}statics/images/index/s2_icon3.png`" alt />
              </div>
              <div class="hp-s2-item-title fs20">分离小三</div>
              <div class="hp-s2-item-text fs14">
                找到出轨根本原因、形象改造能力提升、正确沟通、夫妻生活调节、攻心找到痛点、重燃夫妻激情
              </div>
            </div>
            <div class="hp-s2-item">
              <div class="hp-s2-item-icon">
                <img :src="`${baseUrl}statics/images/index/s2_icon4.png`" alt />
              </div>
              <div class="hp-s2-item-title fs20">狙击真爱</div>
              <div class="hp-s2-item-text fs14">
                提高情商、读懂两性思维、聊天技巧（代聊）、通过言行举止了解心思、感情升温关系升级
              </div>
            </div>
          </div>
        </div>
        <div class="hp-section3">
          <img :src="`${baseUrl}statics/images/index/s3_pic.png`" alt />
        </div>
        <div
          class="hp-section4"
          :style="
            'backgroundImage:url(' +
              `${baseUrl}statics/images/index/s4_bg.png` +
              ')'
          "
        >
          <div class="hp-section4-body">
            <div class="hp-pub-title">
              <div class="hp-pub-title-zh fs30">案例回顾</div>
              <div class="hp-pub-title-en fs60">Case review</div>
            </div>
            <div class="hp-s4-body">
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="look-details-text">
                      <p class="lds-text-item fs14">
                        当你还沉浸在两人的爱情中时，她却突然提出分手，让你猝不及防。你只能一次次道歉求原谅，想尽了办法去挽回，结果却只换来她的一句“我们不可能了”。
                      </p>
                      <p class="lds-text-item fs14">
                        每当夜深人静时，你巴巴看着手机里保存的美好回忆，越想越无法接受她离开的事实。曾经的那些甜蜜时光一幕幕在脑海中浮现，仿佛她还在身边。
                      </p>
                    </div>
                    <div class="center-div pointer" @click.stop="goArticle(6)">
                      查看全文
                    </div>
                  </div>
                  <div class="hp-s4-iconbar">
                    <div class="hp-s4-icon">
                      <img
                        class="hp-s4-icon-img"
                        :src="`${baseUrl}statics/images/index/s4_icon-img.png`"
                        alt
                      />
                    </div>
                    <div class="hp-s4-num">01</div>
                  </div>
                  <div class="hp-s4-title fs18">
                    从她说“我们不可能了”到成功复合，他只用了16天！
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      当你还沉浸在两人的爱情中时，她却突然提出分手，让你猝不及防。你只能一次次道歉求原谅，想尽了办法去挽回，结果却只换来她的一句“我们不可能了”。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      每当夜深人静时，你巴巴看着手机里保存的美好回忆，越想越无法接受她离开的事实。曾经的那些甜蜜时光一幕幕在脑海中浮现，仿佛她还在身边。
                    </p>
                  </div>
                </div>
              </div>
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="look-details-text">
                      <p class="lds-text-item fs14">
                        电视里隐隐约约传出至尊宝那句经典台词：“曾经有一份真诚的爱情摆在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
                      </p>
                      <p class="lds-text-item fs14">
                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加上一个期限，我希望是……一万年！”
                      </p>
                    </div>
                    <div class="center-div pointer" @click.stop="goArticle(7)">
                      查看全文
                    </div>
                  </div>
                  <div class="hp-s4-iconbar">
                    <div class="hp-s4-icon">
                      <img
                        class="hp-s4-icon-img"
                        :src="`${baseUrl}statics/images/index/s4_icon-img.png`"
                        alt
                      />
                    </div>
                    <div class="hp-s4-num">02</div>
                  </div>
                  <div class="hp-s4-title fs18">
                    你道歉100次无效，他只用4步让女友回心转意!
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      电视里隐隐约约传出至尊宝那句经典台词：“曾经有一份真诚的爱情摆在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加上一个期限，我希望是……一万年！”
                    </p>
                  </div>
                </div>
              </div>
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="look-details-text">
                      <p class="lds-text-item fs14">
                        在感情中，我们总是相爱简单，相处太难。其实很多时候只是我们都不肯正面去解决问题，然后，各自在沉默中渐行渐远，最后就回不去了。
                      </p>
                      <p class="lds-text-item fs14">
                        然而，我们无法逃掉上天注定的离散，却可以避免人酿造的遗憾，千万别把那个曾对你百般呵护、体贴包容的人让别人捡走。
                      </p>
                    </div>
                    <div class="center-div pointer" @click.stop="goArticle(8)">
                      查看全文
                    </div>
                  </div>
                  <div class="hp-s4-iconbar">
                    <div class="hp-s4-icon">
                      <img
                        class="hp-s4-icon-img"
                        :src="`${baseUrl}statics/images/index/s4_icon-img.png`"
                        alt
                      />
                    </div>
                    <div class="hp-s4-num">03</div>
                  </div>
                  <div class="hp-s4-title fs18">
                    巧用攻心计逆转分手死局，原来挽回还可以这样做！
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      在感情中，我们总是相爱简单，相处太难。其实很多时候只是我们都不肯正面去解决问题，然后，各自在沉默中渐行渐远，最后就回不去了。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      然而，我们无法逃掉上天注定的离散，却可以避免人酿造的遗憾，千万别把那个曾对你百般呵护、体贴包容的人让别人捡走。
                    </p>
                  </div>
                </div>
              </div>
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="look-details-text">
                      <p class="lds-text-item fs14">
                        每当夜深人静，看着熟悉的房间，却再也找不到那个熟悉的身影。曾经你们甜蜜相拥的点点滴滴，仿佛洒遍了每一个角落，现在伸手触及的却是一片空旷；
                      </p>
                      <p class="lds-text-item fs14">
                        曾经满满的衣柜，如今只剩你一个人的衣服。熟悉的号码却再没有能够拨通的理由……
                      </p>
                    </div>
                    <div class="center-div pointer" @click.stop="goArticle(9)">
                      查看全文
                    </div>
                  </div>
                  <div class="hp-s4-iconbar">
                    <div class="hp-s4-icon">
                      <img
                        class="hp-s4-icon-img"
                        :src="`${baseUrl}statics/images/index/s4_icon-img.png`"
                        alt
                      />
                    </div>
                    <div class="hp-s4-num">04</div>
                  </div>
                  <div class="hp-s4-title fs18">
                    挽回必用策略，让绝情的她乖乖回到你身边
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      每当夜深人静，看着熟悉的房间，却再也找不到那个熟悉的身影。曾经你们甜蜜相拥的点点滴滴，仿佛洒遍了每一个角落，现在伸手触及的却是一片空旷；
                    </p>
                    <p class="hp-s4-text-p fs14">
                      曾经满满的衣柜，如今只剩你一个人的衣服。熟悉的号码却再没有能够拨通的理由……
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <tutor-introduce></tutor-introduce>
        <div class="hp-section3">
          <img :src="`${baseUrl}statics/images/index/photo.png`" alt />
        </div>
        <div class="hp-section6">
          <div class="hp-s6-ad pointer">
            <img
              @click.stop="$brdge()"
              :src="`${baseUrl}statics/images/index/s6-advertisement.png`"
              alt
            />
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
import MySwiper from "@/components/Swiper.vue";
import TutorIntroduce from "@/components/TutorsIntro.vue";

export default {
  name: "HomePage",
  components: {
    MyHeader,
    MyFooter,
    MySwiper,
    TutorIntroduce
  },
  methods: {
    goArticle(index) {
      this.$router.push({
        name: "Article",
        query: {
          index: index
        }
      });
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
      .hp-section1 {
        display: flex;
        padding: 40px 0px;
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
        background-color: #f2f2f2;
        width: 90%;
        left: 40px;
        bottom: 5px;
        position: absolute;
      }
      .hp-section2 {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0px 40px 0px;
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
        .hp-s2-body {
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          padding: 40px 0px;
          text-align: center;
          display: flex;
          .hp-s2-item {
            width: 25%;
            min-width: 25%;
            max-width: 25%;
            display: flex;
            align-items: center;
            flex-direction: column;
            box-sizing: border-box;
            padding: 0px 40px;
            .hp-s2-item-icon {
              padding: 0px 0px 30px 0px;
              height: 260px;
              img {
                width: 100%;
              }
            }
            .hp-s2-item-title {
              height: 52px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              color: rgba (32, 32, 32, 1);
              line-height: 32px;
              text-align: center;
              padding: 0px 0px 17px 0px;
            }
            .hp-s2-item-text {
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(39, 39, 39, 1);
              line-height: 32px;
            }
          }
        }
      }
      .hp-section3 {
        width: 100%;
        img {
          width: 100%;
          min-width: 1280px;
        }
      }
      .hp-section4 {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 0px 100px 0px;
        position: relative;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        .hp-section4-body {
          width: 80%;
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
          .hp-s4-body {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            padding: 0px 0px 40px 0px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .hp-s4-item {
              width: 50%;
              max-width: 520px;
              box-sizing: border-box;
              padding: 0px 44px;
              margin-top: 44px;
              .hp-s4-item-body {
                width: 100%;
                box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
                border-radius: 25px;
                overflow: hidden;
                box-sizing: border-box;
                padding: 43px;
                position: relative;
                .look-details {
                  display: none;
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(227, 238, 255, 0.8);
                  .look-details-text {
                    margin-top: 202px;
                    .lds-text-item {
                      margin-top: 15px;
                      font-family: PingFangSC-Regular;
                      font-weight: 400;
                      color: rgba(136, 136, 136, 1);
                      line-height: 20px;
                      padding: 0px 51px;
                    }
                  }
                  .center-div {
                    position: absolute;
                    width: 100%;
                    height: 100px;
                    line-height: 100px;
                    text-align: center;
                    background: rgba(102, 150, 224, 1);
                    left: 0;
                    bottom: 0;
                    color: #fff;
                    font-size: 30px;
                  }
                }
                &:hover {
                  .look-details {
                    display: block !important;
                    .look-details-text {
                      margin-top: 102px;
                    }
                  }
                  .hp-s4-iconbar,
                  .hp-s4-title,
                  .hp-s4-text {
                    opacity: 0;
                  }
                }
                .hp-s4-iconbar {
                  display: flex;
                  flex-wrap: nowrap;
                  .hp-s4-icon {
                    width: 174px;
                    height: 126px;
                    img {
                      width: 100%;
                    }
                  }
                  .hp-s4-num {
                    width: calc(100% - 174px);
                    box-sizing: border-box;
                    padding: 0px 20px;
                    height: 126px;
                    font-size: 150px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    color: rgba(245, 247, 248, 1);
                    line-height: 126px;
                    text-align: center;
                  }
                }
                .hp-s4-title {
                  height: 44px;
                  font-family: PingFangSC-Medium;
                  font-weight: 500;
                  color: rgba(78, 78, 78, 1);
                  line-height: 24px;
                  padding: 10px 8px 0px 8px;
                  margin-top: 20px;
                }
                .hp-s4-text {
                  .hp-s4-text-p {
                    margin-top: 15px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(136, 136, 136, 1);
                    line-height: 20px;
                  }
                }
              }
            }
          }
        }
      }
      .hp-section6 {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0px 40px 0px;
        position: relative;
        .hp-s6-ad {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
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
  .hp-section2 {
    width: 90%;
    .hp-s2-item {
      padding: 0px 20px !important;
      .hp-s2-item-icon {
        width: 216px;
      }
    }
  }
  .hp-section4-body {
    width: 90%;
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
  .hp-section2 {
    width: 90%;
    .hp-s2-item {
      padding: 0px 20px !important;
      .hp-s2-item-icon {
        width: 216px;
      }
      .hp-s2-item-text {
        width: 216px;
      }
    }
  }
  .hp-section4-body {
    width: 90%;
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
  .hp-section2 {
    width: 90% !important;
    .hp-s2-item {
      padding: 0px 20px !important;
      .hp-s2-item-icon {
        width: 250px;
      }
      .hp-s2-item-text {
        width: 250px;
      }
    }
  }
  .hp-section4-body {
    width: 90%;
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
  .hp-section2 {
    width: 90% !important;
    .hp-s2-item {
      padding: 0px 20px !important;
      .hp-s2-item-icon {
        width: 270px;
      }
      .hp-s2-item-text {
        width: 270px;
      }
    }
  }
  .hp-section4-body {
    width: 90%;
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
  .hp-section2 {
    width: 80% !important;
    .hp-s2-item {
      padding: 0px 30px !important;
      .hp-s2-item-icon {
        width: 280px;
      }
      .hp-s2-item-text {
        width: 280px;
      }
    }
  }
  .hp-section4-body {
    width: 80%;
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
  .hp-section2 {
    width: 80% !important;
    .hp-s2-item {
      padding: 0px 40px !important;
      .hp-s2-item-icon {
        width: 290px;
      }
      .hp-s2-item-text {
        width: 290px;
      }
    }
  }
  .hp-section4-body {
    width: 80%;
  }
}
</style>
