<template>
  <h1>ああああああ</h1>
  <p>{{ twit.shitajiName }}</p>
</template>

<script>
import { firestore } from "firebase"
import { db } from "../main"

export default {
  props: ["id"],
  data() {
    return {
      twit: {},
    }
  },
  firestore() {
    return {
      twit: db.collection("makes").doc(this.$makes.id),
    }
  },
}
</script>
