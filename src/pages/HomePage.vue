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
                    <div class="center-div">查看全文</div>
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
                    简单聊天技巧，教你挽回异地恋
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      不同原因分手，分手之后的心态也不同。因矛盾而
                      分手，男人会逼迫自己走出来，重新开始生活；因感情淡化而分手，男人会在分手时有一丝解脱。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      不要有太多质问的话， “你真的不爱我了吗?”
                      这些话暴露了你强烈的需求感，会让TA觉得你很
                      烦；二、不要旧事重提，计算谁对谁错......
                    </p>
                  </div>
                </div>
              </div>
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="center-div">查看全文</div>
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
                    简单聊天技巧，教你挽回异地恋
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      不同原因分手，分手之后的心态也不同。因矛盾而
                      分手，男人会逼迫自己走出来，重新开始生活；因感情淡化而分手，男人会在分手时有一丝解脱。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      不要有太多质问的话， “你真的不爱我了吗?”
                      这些话暴露了你强烈的需求感，会让TA觉得你很
                      烦；二、不要旧事重提，计算谁对谁错......
                    </p>
                  </div>
                </div>
              </div>
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="center-div">查看全文</div>
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
                    简单聊天技巧，教你挽回异地恋
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      不同原因分手，分手之后的心态也不同。因矛盾而
                      分手，男人会逼迫自己走出来，重新开始生活；因感情淡化而分手，男人会在分手时有一丝解脱。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      不要有太多质问的话， “你真的不爱我了吗?”
                      这些话暴露了你强烈的需求感，会让TA觉得你很
                      烦；二、不要旧事重提，计算谁对谁错......
                    </p>
                  </div>
                </div>
              </div>
              <div class="hp-s4-item">
                <div class="hp-s4-item-body">
                  <div class="look-details">
                    <div class="center-div">查看全文</div>
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
                    简单聊天技巧，教你挽回异地恋
                  </div>
                  <div class="hp-s4-text">
                    <p class="hp-s4-text-p fs14">
                      不同原因分手，分手之后的心态也不同。因矛盾而
                      分手，男人会逼迫自己走出来，重新开始生活；因感情淡化而分手，男人会在分手时有一丝解脱。
                    </p>
                    <p class="hp-s4-text-p fs14">
                      不要有太多质问的话， “你真的不爱我了吗?”
                      这些话暴露了你强烈的需求感，会让TA觉得你很
                      烦；二、不要旧事重提，计算谁对谁错......
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
          <div class="hp-s6-ad">
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
        background-color: #F2F2F2;
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
              img {
                width: 100%;
                height: 147px;
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
                  .center-div {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    line-height: 200px;
                    text-align: center;
                    border-radius: 200px;
                    background: rgba(102, 150, 224, 1);
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: #fff;
                    font-size: 30px;
                  }
                }
                &:hover {
                  .look-details {
                    display: block !important;
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
