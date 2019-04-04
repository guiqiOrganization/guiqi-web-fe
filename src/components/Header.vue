<template>
  <div class="head-cont relative">
    <div class="head-body absolute z-index-9 head-body-w">
      <div class="head-logo w100 relative">
        <div class="head-logo-logo">
          <img
            class="head-logo-img"
            :src="`${baseUrl}statics/images/index/header_logo.png`"
            alt
          />
        </div>
        <div class="head-logo-menu absolute flex">
          <div class="hlm-item flex pointer" @click.stop="$brdge()">
            <div class="hlm-item-icon relative overhidden">
              <img
                class="hlm-item-icon-img w100 absolute"
                :src="`${baseUrl}statics/images/index/header_icon_1.png`"
                alt
              />
            </div>
            <div class="hlm-item-title hlm-item-title-btn fs14">在线咨询</div>
          </div>
          <div class="hlm-item flex relative">
            <div
              class="hlm-item-icon relative overhidden"
              @mouseenter="showQrcode"
              @mouseleave="hiddenQrcode"
            >
              <img
                class="hlm-item-icon-img w100 absolute"
                :src="`${baseUrl}statics/images/index/header_icon_2.png`"
                alt
              />
            </div>
            <div
              class="hlm-item-title fs14"
              @mouseenter="showQrcode"
              @mouseleave="hiddenQrcode"
            >
              官方微信
            </div>
            <div class="hlm-item-qcode absolute" v-if="qrcodeshow">
              <img
                class="w100"
                :src="`${baseUrl}statics/images/index/foot_qcode1.jpg`"
                alt
              />
            </div>
          </div>
          <div class="hlm-item flex">
            <div class="hlm-item-icon relative overhidden">
              <img
                class="hlm-item-icon-img w100 absolute"
                :src="`${baseUrl}statics/images/index/header_icon_3.png`"
                alt
              />
            </div>
            <div class="hlm-item-title fs14">免费咨询热线:400-9629-520</div>
          </div>
        </div>
      </div>
      <div class="head-menu w100">
        <div class="head-menu-body w100 flex">
          <div
            class="hmb-item t-center relative"
            v-for="(mitem, midx) in menu"
            :key="midx"
          >
            <div
              class="hmb-item-label t-center fs16 pointer"
              :class="{ 'header-active': currentActive == mitem.value }"
              @click.stop="headerRoute(mitem)"
              @mouseenter="collaspe(mitem, midx, 'hover')"
              @mouseleave="collaspe(mitem, midx, 'hover')"
            >
              {{ mitem.label }}
            </div>
            <div
              class="hmb-item-arraw pointer animate"
              :class="{ 'hmb-item-arraw__active': mitem.collaspe }"
              v-if="mitem.children.length != 0"
            ></div>
            <div
              class="hmb-item-body absolute z-index-3"
              v-if="mitem.children.length != 0"
              v-show="mitem.collaspe"
              @mouseleave="collaspe(mitem, midx)"
            >
              <div
                class="hmd-item-b-item t-center fs16 pointer"
                v-for="(mbitem, mbidx) in mitem.children"
                @click.stop="headerRoute(mitem)"
                :key="mbidx"
              >
                {{ mbitem.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/assets/menu.json";
export default {
  name: "Header",
  props: {
    currentActive: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      menu: menu,
      qrcodeshow: false
    };
  },
  mounted() {},
  methods: {
    // 控制二维码弹窗显示
    showQrcode() {
      this.qrcodeshow = true;
    },
    // 控制二维码弹窗显示
    hiddenQrcode() {
      this.qrcodeshow = false;
    },
    // 控制菜单开关
    collaspe(item, idx) {
      let status = item.collaspe;
      for (let m = 0; m < this.menu.length; m++) {
        this.menu[m].collaspe = false;
      }
      if (item.haschiren) {
        this.menu[idx].collaspe = status ? false : true;
      }
    },
    // 头部路由跳转
    headerRoute(item) {
      for (let m = 0; m < this.menu.length; m++) {
        this.menu[m].collaspe = false;
      }
      this.$router.push({
        path: item.value
      });
    }
  }
};
</script>

<style lang="scss">
.head-cont {
  width: 100%;
  min-width: 1280px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .head-body {
    width: 80%;
    height: 100%;
    .head-logo {
      height: 60px;
      padding: 4px 0px;
      .head-logo-logo {
        height: 100%;
        .head-logo-img {
          height: 100%;
        }
      }
      .head-logo-menu {
        height: 52px;
        top: 4px;
        right: 0px;
        .hlm-item {
          line-height: 52px;
          margin-left: 40px;
          .hlm-item-icon {
            width: 24px;
            height: 24px;
            border-radius: 100%;
            margin-top: 14px;
            overflow: hidden;
            margin-right: 6px;
            .hlm-item-icon-img {
              top: 0;
              left: 0;
            }
          }
          .hlm-item-title-btn {
            padding: 0px 20px;
            background-color: #9ca0e5;
            height: 20px;
            line-height: 20px;
            border-radius: 12px;
            margin-top: 16px;
            color: #ffffff;
          }
          .hlm-item-qcode {
            top: 52px;
            left: 0px;
            padding: 12px;
            border-radius: 4px;
            height: 120px;
            width: 120px;
            background-color: #ffffff;
            box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
            z-index: 2019;
          }
        }
      }
    }
    .head-menu {
      height: 40px;
      padding: 0px 40px;
      .head-menu-body {
        .hmb-item {
          width: 12.5%;
          min-width: 12.5%;
          max-width: 12.5%;
          line-height: 40px;
          height: 40px;
          box-sizing: border-box;
          .hmb-item-label {
            display: inline-block;
            padding: 0px 4px;
            height: 40px;
            line-height: 40px;
          }
          .hmb-item-label:hover {
            color: #bf6bac;
            border-bottom: 3px solid #bf6bac;
          }
          .header-active {
            color: #bf6bac;
            border-bottom: 3px solid #bf6bac;
          }
          .hmb-item-arraw {
            display: inline-block;
            height: 10px;
            width: 10px;
            border-top: 1px solid #fbfbfb;
            border-left: 1px solid #fbfbfb;
            border-bottom: 1px solid #525252;
            border-right: 1px solid #525252;
            transform: rotate(-45deg);
            margin-left: 4px;
          }
          .hmb-item-arraw__active {
            transform: rotate(45deg) translate(0, -3px);
          }
          .hmb-item-body {
            background-color: #fffbfb;
            top: 39px;
            left: 8px;
            width: calc(100% - 16px);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            .hmd-item-b-item {
              height: 40px;
              line-height: 40px;
              border-bottom: 1px solid rgba(206, 135, 186, 0.6);
            }
            .hmd-item-b-item:hover {
              background-color: #f5f5f5;
            }
          }
          .hmb-item-body :last-child {
            border: none;
          }
        }
        .hmb-item::after {
          content: "";
          display: block;
          width: 2px;
          height: 16px;
          background-color: rgba(206, 135, 186, 0.6);
          position: absolute;
          top: 50%;
          margin-top: -8px;
          right: 0;
        }
        .hmb-item:last-child::after {
          display: none;
        }
      }
    }
  }
}
.head-cont::before {
  content: "";
  display: block;
  width: 100%;
  height: 40px;
  background-color: #fffbfe;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ff9696;
  z-index: 1;
}
//  小于1280px
@media screen and (max-width: 1280px) {
  .head-body-w {
    min-width: 1200px;
  }
  .hmb-item-label:hover {
    font-size: 16px !important;
  }
  .header-active {
    font-size: 16px !important;
  }
}
// 大于1280px 小于1366px
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .head-body-w {
    min-width: 1200px;
  }
  .hmb-item-label:hover {
    font-size: 16px !important;
  }
  .header-active {
    font-size: 16px !important;
  }
}
// 大于1366px 小于1440px
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .head-body-w {
    min-width: 1280px;
  }
  .hmb-item-label:hover {
    font-size: 16px !important;
  }
  .header-active {
    font-size: 16px !important;
  }
}
// 大于1440px 小于 1680px
@media screen and (min-width: 1440px) and (max-width: 1680px) {
  .head-body-w {
    min-width: 1366px;
  }
  .hmb-item-label:hover {
    font-size: 16px !important;
  }
  .header-active {
    font-size: 16px !important;
  }
}
// 大于1680px 小于1920px
@media screen and (min-width: 1680px) and (max-width: 1920px) {
  .head-body-w {
    min-width: 1440px;
  }
  .hmb-item-label:hover {
    font-size: 16px !important;
  }
  .header-active {
    font-size: 16px !important;
  }
}
// 大于 1920px
@media screen and (min-width: 1920px) {
  .head-body-w {
    min-width: 1680px;
  }
  .hmb-item-label:hover {
    font-size: 18px !important;
  }
  .header-active {
    font-size: 18px !important;
  }
}
</style>
