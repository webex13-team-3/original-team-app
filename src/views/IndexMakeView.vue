<template>
  <h1>一覧ページ</h1>
  <div>
    <p v-for="make in makes" :key="make.id">
      {{ make.text }}
      {{ make.sample.shitajiName }}
    </p>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  data() {
    return {
      makes: [],
    }
  },
  methods: {
    postTweet() {
      addDoc(collection(db, "makes"), {
        text: "こんにちは、ツイートの本文です。",
      })
    },
  },
  created() {
    getDocs(collection(db, "makes")).then((snapshot) => {
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
