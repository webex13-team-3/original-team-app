<template>
  <!-- <p v-if="make.shitajiImage">
    <img v-bind:src="make.shitajiImage" alt="下地のイメージ" width="200" />
  </p> -->
  <a-carousel arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img :src="getImgUrl(props.i)" :alt="`${props.i}番目の画像`" />
      </a>
    </template>
    <div v-for="image in images" :key="image">
      <img :src="image" />
    </div>
  </a-carousel>
</template>

// firebaseから情報を取ってくる // 配列に画像の情報を入れる
<script>
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      make: {},
    }
  },
  created() {
    getDoc(doc(db, "makes", this.$route.params.id)).then((doc) => {
      this.make = doc.data()
    })
  },
  computed: {
    images() {
      return [this.make.shitajiImage, this.make.powderImage]
    },

    getImgUrl() {
      return function (index) {
        return this.images[index]
      }
    },
  },
})
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
