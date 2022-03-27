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
      images: [],
    }
  },
  methods: {
    getImgUrl(i) {
      return this.images[i]
    },
  },
  created() {
    getDoc(doc(db, "makes", this.$route.params.id))
      .then((docSnap) => {
        return docSnap.data()
      })
      .then((data) => {
        this.make = data
        if (data.shitajiImage) {
          this.images.push(data.shitajiImage)
          this.images.push(data.shitajiImage)
        }
        if (data.shadingImage) {
          this.images.push(data.shadingImage)
        }
        if (data.shadingImage) {
          this.images.push(data.powderImage)
        }
        if (data.highlightImage) {
          this.images.push(data.highlightImage)
        }
        if (data.concealerImage) {
          this.images.push(data.concealerImage)
        }
        if (data.cheekImage) {
          this.images.push(data.cheekImage)
        }
        if (data.mascaraImage) {
          this.images.push(data.mascaraImage)
        }
        if (data.eyelineImage) {
          this.images.push(data.eyelineImage)
        }
        if (data.eyeShadowImage) {
          this.images.push(data.eyeShadowImage)
        }
        if (data.eyeblowImage) {
          this.images.push(data.eyeblowImage)
        }
        if (data.lipImage) {
          this.images.push(data.lipImage)
        }
        if (data.otherImage) {
          this.images.push(data.otherImage)
        }
      })
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
