<template>
  <div class="image-cont flex" :class="contclass">
    <div class="image-body" :class="bodyclass">
      <img
        class="hpbody-section-image"
        @click.stop="$brdge()"
        :src="`${baseUrl}` + imagehref"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ImageCont",
  props: {
    imagehref: {
      type: String,
      default: ""
    },
    contclass: {
      type: String,
      default: ""
    },
    bodyclass: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.image-cont {
  width: 100%;
  align-items: center;
  flex-direction: column;
}
.image-body100 {
  width: 100%;
  .hpbody-section-image {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
.image-body90 {
  width: 90%;
  .hpbody-section-image {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
.image-body86 {
  width: 86%;
  .hpbody-section-image {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
.image-body80 {
  width: 80%;
  .hpbody-section-image {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
.image-body45 {
  width: 45%;
  .hpbody-section-image {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
.image-body30 {
  width: 30%;
  .hpbody-section-image {
    width: 100%;
    max-width: 100%;
    display: block;
  }
}
.top40 {
  margin-top: 40px;
}
.bottom40 {
  margin-bottom: 40px;
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
