<template>
  <h1>一覧ページ</h1>
  <div v-for="make in makes" :key="make.id">
    <p>
      {{ make.shitajiName }}
    </p>
    <p>
      <img v-bind:src="make.shitajiImage" alt="下地のイメージ" width="200" />
    </p>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  data() {
    return {
      makes: [],
    }
  },
  methods: {
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
  },
}
</script>
