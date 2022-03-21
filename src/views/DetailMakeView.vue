<template>
  <h1>詳細ページ</h1>
  <DetailShow></DetailShow>
  {{ this.make.shitajiName }}
  {{ this.make.shitajiComment }}
  {{ this.make.shadingName }}
  {{ this.make.shadingComment }}
  {{ this.make.powderName }}
  {{ this.make.powderComment }}
  {{ this.make.otherName }}
  {{ this.make.otherComment }}
  {{ this.make.mascaraName }}
  {{ this.make.mascaraComment }}
  {{ this.make.lipName }}
  {{ this.make.lipComment }}
  {{ this.make.highlightName }}
  {{ this.make.highlightComment }}
  {{ this.make.eyelineName }}
  {{ this.make.eyelineComment }}
  {{ this.make.fandationName }}
  {{ this.make.fandationComment }}
  {{ this.make.eyeblowName }}
  {{ this.make.eyeblowComment }}
  {{ this.make.eyeShadowName }}
  {{ this.make.eyeShadowComment }}
  {{ this.make.concealerName }}
  {{ this.make.concealerComment }}
  {{ this.make.cheekName }}
  {{ this.make.cheekComment }}
</template>

<script>
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import DetailShow from "@/components/DetailShow.vue"

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
  components: {
    DetailShow,
  },
}
</script>
