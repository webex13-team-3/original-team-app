<template>
  <p>{{ $route.params.shitajiName }}</p>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
export default {
  data() {
    return {
      makes: [{ shitajiName: "あああ" }],
    }
  },
  methods: {},
  created() {
    getDocs(collection(db, "this.$route.params.id")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.makes.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>
