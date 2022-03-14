<template>
  <p>{{ $route.params }}</p>
</template>

<script>
// import { firestore, getDoc, collection } from "firebase"
// import { db } from "../firebase"

export default {
  data() {
    return {
      twit: {},
    }
  },
  created() {
    console.log(this.$route.params.id)
  },
}
</script>
