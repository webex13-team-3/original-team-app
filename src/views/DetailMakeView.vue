<template>
  <h1>詳細ページ</h1>
  {{ this.make.shitajiName }}
  <p v-if="make.shitajiImage">
    <img v-bind:src="make.shitajiImage" alt="下地のイメージ" width="200" />
  </p>
  {{ this.make.shitajiComment }}
  {{ this.make.shitajiName }}
  {{ this.make.shitajiName }}
  {{ this.make.shitajiName }}
  {{ this.make.shitajiName }}
</template>

<script>
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
export default {
  data() {
    return {
      make: null,
    }
  },
  created() {
    getDoc(doc(db, "makes", this.$route.params.id)).then((doc) => {
      this.make = doc.data()
    })
  },
}
</script>
